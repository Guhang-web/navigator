// app.js: 앱의 핵심 로직을 담당하는 심장

// 현재 위치와 히스토리를 추적하는 상태 변수
let currentId = "root";
let history = ["root"];

// DOM 요소들을 미리 찾아서 변수에 저장
const elements = {
  pathDisplay: document.getElementById("path-display"),
  btnContainer: document.getElementById("button-container"),
  qList: document.getElementById("q-list"),
  sContainer: document.getElementById("s-container"),
  gText: document.getElementById("g-text"),
  btnBack: document.getElementById("btn-back"),
};

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
 * 화면을 다시 그리는 메인 함수
 * @param {string} nodeId - 렌더링할 데이터의 ID
 */
function renderNode(nodeId) {
  const node = callData[nodeId];

  // 만약 연결된 데이터가 없으면 에러 방지
  if (!node) {
    console.error("데이터 오류: 해당 ID를 찾을 수 없습니다.", nodeId);
    return;
  }

  // 현재 위치 반영
  currentId = nodeId;

  // 1. 상단 경로(Breadcrumb) 업데이트
  elements.pathDisplay.textContent = node.title;

  // 2. 핵심 질문 리스트 업데이트
  if (node.questions && node.questions.length > 0) {
    elements.qList.innerHTML = node.questions
      .map((q, i) => `<li><strong>질문 ${i + 1}.</strong> ${q}</li>`)
      .join("");
  } else {
    elements.qList.innerHTML = `<li>(질문이 없습니다)</li>`;
  }

  // 3. 추천 멘트 업데이트
  if (node.scripts && node.scripts.length > 0) {
    elements.sContainer.innerHTML = node.scripts
      .map((s, i) => `<p><strong>멘트 ${i + 1}.</strong> ${s}</p>`)
      .join("");
  } else {
    elements.sContainer.innerHTML = `<p>(멘트가 없습니다)</p>`;
  }

  // 4. 통화 목표 업데이트
  elements.gText.textContent =
    node.goal || "다음 단계로 자연스럽게 대화 이어가기";

  // 5. 분기 버튼 생성 및 업데이트
  elements.btnContainer.innerHTML = "";

  if (node.nextOptions && node.nextOptions.length > 0) {
    node.nextOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "branch-btn";
      btn.textContent = opt.label;

      btn.onclick = () => {
        history.push(opt.id);
        renderNode(opt.id);
      };

      elements.btnContainer.appendChild(btn);
    });
  } else {
    elements.btnContainer.innerHTML = `
      <button class="branch-btn" onclick="resetApp()" style="background-color: #e9ecef; border-color: #ccc;">
        🏁 상담 종료 (처음으로)
      </button>
    `;
  }

  // 6. 이전 버튼 상태 업데이트
  updateBackButton();
}

/**
 * 이전 단계로 돌아가는 함수
 */
function goBack() {
  if (history.length <= 1) return;

  // 현재 단계 제거
  history.pop();

  // 직전 단계 가져오기
  const prevId = history[history.length - 1];

  renderNode(prevId);
}

/**
 * 앱을 완전 초기 상태로 되돌리는 함수
 */
function resetApp() {
  currentId = "root";
  history = ["root"];
  renderNode(currentId);
}

// 브라우저가 HTML을 다 읽자마자 최초 화면(root)을 렌더링하여 실행
document.addEventListener("DOMContentLoaded", () => {
  renderNode("root");
});