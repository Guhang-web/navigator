// recontactRoot.js
export const recontactRootData = {
  recontact_root: {
    title: "재컨택 > 첫 안내",
    questions: [
      "이전에 문의나 상담 이력이 있었던 분인지 확인",
      "지금 통화 가능하신지 먼저 확인",
      "지난번 이후 상황 변화가 있었는지 가볍게 체크",
    ],
    scripts: [
      "안녕하세요, SBS아카데미컴퓨터아트학원 안산점 OOO멘토입니다. 예전에 문의 주셨던 내용 참고해서 다시 한번 안내 도와드리려고 연락드렸습니다. 지금 잠깐 통화 괜찮으실까요?",
      "지난번에 문의 주셨을 때 바로 시작하시기보다 조금 더 고민해보신다고 하셨던 걸로 확인돼서요. 혹시 그 이후로 상황이 조금 달라지셨는지, 아니면 아직 비슷하신지 가볍게 여쭤보려고 연락드렸습니다.",
    ],
    goal: "재컨택 목적을 부담 없이 전달하고, 현재 고객 상태에 맞는 분기로 자연스럽게 넘기기",
    nextOptions: [
      { id: "recontact_interest_check", label: "아직 관심은 있음" },
      { id: "recontact_no_response", label: "예전에 연락이 잘 안 닿았음" },
      { id: "recontact_callback", label: "나중에 다시 연락 달라고 했었음" },
      { id: "recontact_after_visit", label: "방문상담 후 등록 안 함" },
      { id: "recontact_after_info", label: "자료/비용/시간표만 듣고 멈춤" },
    ],
  },

  recontact_interest_check: {
    title: "재컨택 > 관심 여부 확인",
    questions: [
      "지금도 과정 자체에 대한 관심이 남아 있는지 확인",
      "관심은 있는데 시작을 못 한 이유가 무엇인지 확인",
      "지금 다시 보면 가장 걸리는 요소가 무엇인지 파악",
    ],
    scripts: [
      "혹시 지금도 그 과정 자체에는 관심이 있으신 편이실까요? 아니면 최근에는 우선순위가 조금 바뀌셨을까요?",
      "관심은 있으신데 아직 시작을 안 하신 거라면, 지금 시점에서는 어떤 부분이 가장 걸리시는지 제가 그 부분 위주로만 짧게 도와드릴게요.",
    ],
    goal: "관심이 살아 있는지 확인하고, 이후 timing / 비교 / 보류 사유 분기로 연결하기",
    nextOptions: [
      { id: "recontact_timing_check", label: "지금 시작 가능한 시기 확인" },
      { id: "recontact_compare_check", label: "비교 중인지 확인" },
      { id: "recontact_not_now", label: "지금은 아직 어려움" },
      { id: "visit_soft_close", label: "방문상담으로 부드럽게 연결" },
      { id: "remote_soft_close", label: "비대면 안내로 부드럽게 연결" },
    ],
  },

  recontact_no_response: {
    title: "재컨택 > 미연결 고객 재접점",
    questions: [
      "예전에 연락이 닿지 않았던 이유가 단순 타이밍 문제였는지 확인",
      "지금은 안내를 받을 수 있는 상황인지 확인",
      "관심 유지 여부를 짧게 파악",
    ],
    scripts: [
      "이전에 안내드리려고 몇 번 연락드렸는데 시기가 안 맞으셨던 것 같아서요. 혹시 지금은 잠깐 안내 들으실 수 있으실까요?",
      "길게 말씀드리려는 건 아니고요, 그때 문의 주셨던 과정 기준으로 지금도 관심 있으신지 정도만 가볍게 확인드리고 싶어서 연락드렸습니다.",
    ],
    goal: "부담 없이 재연결하고, 현재 관심 여부나 시작 가능 시점을 확인하는 쪽으로 넘기기",
    nextOptions: [
      { id: "recontact_interest_check", label: "관심 여부 다시 확인" },
      { id: "recontact_timing_check", label: "지금 가능한 시기 확인" },
      { id: "recontact_not_now", label: "지금은 어려움" },
      { id: "recontact_reject_call", label: "통화 자체를 원치 않음" },
      { id: "end_followup", label: "짧게 종료" },
    ],
  },

  recontact_callback: {
    title: "재컨택 > 재연락 요청 고객",
    questions: [
      "이전에 다시 연락 달라고 했던 시점과 지금이 맞는지 확인",
      "지금 상담을 이어도 괜찮은지 확인",
      "상황 변화 또는 우선순위 변화를 파악",
    ],
    scripts: [
      "지난번에 바로 결정하시기보다는 조금 뒤에 다시 안내 받는 게 괜찮다고 말씀 주셨던 걸로 확인돼서요. 약속드린 흐름대로 편하게 다시 연락드렸습니다.",
      "혹시 지금은 그때보다 상황이 좀 정리되셨는지, 아니면 아직 비슷하신지 확인해서 필요한 부분만 짧게 도와드릴게요.",
    ],
    goal: "재연락 약속 맥락을 살려 자연스럽게 대화를 재개하고 현재 상태 파악으로 연결하기",
    nextOptions: [
      { id: "recontact_interest_check", label: "관심 여부 확인" },
      { id: "recontact_timing_check", label: "시기 확인" },
      { id: "recontact_status_change", label: "상황 변화 확인" },
      { id: "recontact_not_now", label: "아직 보류 상태" },
      { id: "recontact_callback_save", label: "다시 재연락 시점 저장" },
    ],
  },
};