import { initApp } from "./app.js";

function clearMemo() {
  if (confirm("작성 중인 메모를 모두 지우시겠습니까?")) {
    const memoEl = document.getElementById("consulting-memo");
    if (!memoEl) return;

    memoEl.value = "";
    localStorage.removeItem("tempMemo");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();

  const memoEl = document.getElementById("consulting-memo");
  if (!memoEl) return;

  const savedMemo = localStorage.getItem("tempMemo");
  if (savedMemo) {
    memoEl.value = savedMemo;
  }

  memoEl.addEventListener("input", (e) => {
    localStorage.setItem("tempMemo", e.target.value);
  });
});

// HTML에서 onclick="clearMemo()"를 쓰고 있다면 필요
window.clearMemo = clearMemo;