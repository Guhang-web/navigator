// app.js: 앱의 핵심 로직을 담당하는 심장
import { callData } from "./data/index.js";

// 현재 모드 / 현재 위치 / 히스토리
let currentMode = "contact";

const modeRoots = {
  contact: "root",
  recontact: "recontact_root",
};

let currentId = modeRoots[currentMode];
let history = [currentId];

// DOM 요소 저장용
let elements = {};

/**
 * DOM 요소들을 찾아서 저장
 */
function cacheElements() {
  elements = {
    pathDisplay: document.getElementById("path-display"),
    btnContainer: document.getElementById("button-container"),
    qList: document.getElementById("q-list"),
    sContainer: document.getElementById("s-container"),
    gText: document.getElementById("g-text"),
    btnBack: document.getElementById("btn-back"),
    btnReset: document.getElementById("btn-reset"),
    btnContact: document.getElementById("btn-contact"),
    btnRecontact: document.getElementById("btn-recontact"),
  };
}

/**
 * 이전 버튼 활성/비활성 상태 업데이트
 */
function updateBackButton() {
  if (!elements.btnBack) return;

  const canGoBack = history.length > 1;
  elements.btnBack.disabled = !canGoBack;

  if (canGoBack) {
    elements.btnBack.style.opacity = "1";
    elements.btnBack.style.cursor = "pointer";
  } else {
    elements.btnBack.style.opacity = "0.5";
    elements.btnBack.style.cursor = "not-allowed";
  }
}

/**
 * 모드 버튼 active 상태 업데이트
 */
function updateModeButtons() {
  if (elements.btnContact) {
    elements.btnContact.classList.toggle("active", currentMode === "contact");
  }

  if (elements.btnRecontact) {
    elements.btnRecontact.classList.toggle(
      "active",
      currentMode === "recontact"
    );
  }
}

/**
 * 모드 전환
 * @param {"contact" | "recontact"} mode
 */
function switchMode(mode) {
  if (!modeRoots[mode]) {
    console.error("모드 오류: 존재하지 않는 모드입니다.", mode);
    return;
  }

  currentMode = mode;
  currentId = modeRoots[mode];
  history = [currentId];

  updateModeButtons();
  renderNode(currentId);
}

/**
 * 화면을 다시 그리는 메인 함수
 * @param {string} nodeId - 렌더링할 데이터의 ID
 */
function renderNode(nodeId) {
  const node = callData[nodeId];

  // 연결된 데이터가 없으면 에러 방지
  if (!node) {
    console.error("데이터 오류: 해당 ID를 찾을 수 없습니다.", nodeId);
    return;
  }

  // 현재 위치 반영
  currentId = nodeId;

  // 1. 상단 경로(Breadcrumb) 업데이트
  if (elements.pathDisplay) {
    elements.pathDisplay.textContent = node.title;
  }

  // 2. 핵심 질문 리스트 업데이트
  if (elements.qList) {
    if (node.questions && node.questions.length > 0) {
      elements.qList.innerHTML = node.questions
        .map((q, i) => `<li><strong>질문 ${i + 1}.</strong> ${q}</li>`)
        .join("");
    } else {
      elements.qList.innerHTML = `<li>(질문이 없습니다)</li>`;
    }
  }

  // 3. 추천 멘트 업데이트
  if (elements.sContainer) {
    if (node.scripts && node.scripts.length > 0) {
      elements.sContainer.innerHTML = node.scripts
        .map((s, i) => `<p><strong>멘트 ${i + 1}.</strong> ${s}</p>`)
        .join("");
    } else {
      elements.sContainer.innerHTML = `<p>(멘트가 없습니다)</p>`;
    }
  }

  // 4. 통화 목표 업데이트
  if (elements.gText) {
    elements.gText.textContent =
      node.goal || "다음 단계로 자연스럽게 대화 이어가기";
  }

  // 5. 분기 버튼 생성 및 업데이트
  if (elements.btnContainer) {
  elements.btnContainer.innerHTML = "";

  if (node.nextOptions && node.nextOptions.length > 0) {
    node.nextOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "branch-btn";
      btn.textContent = opt.label;

      btn.addEventListener("click", () => {
        if (opt.id === "root") {
          switchMode("contact");
          return;
        }

        if (opt.id === "recontact_root") {
          switchMode("recontact");
          return;
        }

        history.push(opt.id);
        renderNode(opt.id);
      });

      elements.btnContainer.appendChild(btn);
    });
  } else {
    const finishBtn = document.createElement("button");
    finishBtn.className = "branch-btn";
    finishBtn.textContent = "🏁 상담 종료 (처음으로)";
    finishBtn.style.backgroundColor = "#e9ecef";
    finishBtn.style.borderColor = "#ccc";

    finishBtn.addEventListener("click", resetApp);

    elements.btnContainer.appendChild(finishBtn);
  }
}

  // 6. 이전 버튼 상태 업데이트
  updateBackButton();
  updateModeButtons();
}

/**
 * 이전 단계로 돌아가는 함수
 */
function goBack() {
  if (history.length <= 1) return;

  history.pop();
  const prevId = history[history.length - 1];
  renderNode(prevId);
}

/**
 * 앱을 현재 모드의 초기 상태로 되돌리는 함수
 */
function resetApp() {
  currentId = modeRoots[currentMode];
  history = [currentId];
  renderNode(currentId);
}

/**
 * 상단 고정 버튼 이벤트 연결
 */
function bindEvents() {
  if (elements.btnBack) {
    elements.btnBack.addEventListener("click", goBack);
  }

  if (elements.btnReset) {
    elements.btnReset.addEventListener("click", resetApp);
  }

  if (elements.btnContact) {
    elements.btnContact.addEventListener("click", () => {
      switchMode("contact");
    });
  }

  if (elements.btnRecontact) {
    elements.btnRecontact.addEventListener("click", () => {
      switchMode("recontact");
    });
  }
}

/**
 * 앱 시작 함수
 */
export function initApp() {
  cacheElements();
  bindEvents();
  updateModeButtons();
  resetApp();
}