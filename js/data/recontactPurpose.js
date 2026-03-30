// recontactPurpose.js
export const recontactPurposeData = {
  recontact_timing_check: {
    title: "재컨택 > 시작 가능 시기 확인",
    questions: [
      "지금 바로 시작 가능한지 확인",
      "시작 의사는 있지만 시기만 조율이 필요한지 확인",
      "현재 가능한 월/요일/시간대를 파악",
    ],
    scripts: [
      "혹시 지금은 실제로 시작을 알아보셔도 되는 시기실까요? 아니면 관심은 있으신데 시점만 조금 더 뒤로 보고 계신 걸까요?",
      "만약 시작 자체는 생각 있으신 상황이면, 제가 OOO님 기준으로 가능한 시기나 시간대부터 맞춰서 현실적으로 안내드릴게요.",
    ],
    goal: "시작 가능한 현재 시점을 확인하고 바로 예약, 시간표 조율, 추후 연락 분기로 연결하기",
    nextOptions: [
      { id: "visit_reservation", label: "방문 예약 진행" },
      { id: "schedule_not_fit", label: "시간표가 안 맞음" },
      { id: "end_followup", label: "추후 다시 보기로 마무리" },
    ],
  },

  recontact_status_change: {
    title: "재컨택 > 상황 변화 확인",
    questions: [
      "지난 상담 이후 일정/직장/가족 상황 변화가 있었는지 확인",
      "지원제도 가능 여부가 달라졌는지 확인",
      "배우려는 목적이 더 명확해졌는지 확인",
    ],
    scripts: [
      "지난번 이후로 혹시 일정이나 근무 상황, 배우시려는 목적 쪽에서 달라진 부분이 있으셨을까요?",
      "예를 들어 시간 여유가 조금 생기셨다든지, 취업이나 이직 쪽으로 방향이 더 구체화되셨다든지 그런 부분이 있으면 그 기준으로 다시 안내드릴 수 있습니다.",
    ],
    goal: "상황 변화를 기준으로 다시 적절한 안내 흐름으로 연결하기",
    nextOptions: [
      { id: "check_support", label: "지원제도 가능 여부 다시 확인" },
      { id: "job_change", label: "이직/취업 방향으로 연결" },
      { id: "skill_work_use", label: "실무 활용 목적 안내" },
      { id: "visit_soft_close", label: "방문상담으로 부드럽게 연결" },
    ],
  },

  recontact_compare_check: {
    title: "재컨택 > 비교 여부 확인",
    questions: [
      "다른 학원과 비교 중인지 확인",
      "이미 다른 곳 등록 여부 확인",
      "비교 기준이 비용/거리/수업방식/결과 중 무엇인지 파악",
    ],
    scripts: [
      "혹시 지금도 몇 군데 비교해보시는 중이실까요? 아니면 이미 다른 쪽으로 어느 정도 방향을 정하신 상태이실까요?",
      "비교하시는 중이시라면 제가 무조건 권유드리기보다, 어떤 기준으로 보셔야 덜 헷갈리시는지 그 기준 정리만 도와드려도 괜찮습니다.",
    ],
    goal: "비교 상황을 파악하고 비교 대응 또는 자연스러운 마무리/방문 연결로 넘기기",
    nextOptions: [
      { id: "objection_compare", label: "비교 대응 진행" },
      { id: "recontact_other_academy", label: "다른 학원 등록/비교 중" },
      { id: "visit_soft_close", label: "방문상담으로 부드럽게 연결" },
      { id: "end_followup", label: "추후 판단하시도록 마무리" },
    ],
  },

  recontact_after_info: {
    title: "재컨택 > 안내만 받고 멈춘 이후 상태 확인",
    questions: [
      "지난번 안내 이후 왜 진행이 멈췄는지 확인",
      "지금 다시 검토 중인지 확인",
      "비용/시간/비교 중 어디서 멈췄는지 확인",
    ],
    scripts: [
      "지난번에 시간표나 비용, 과정 설명은 한번 받아보셨었는데 그 뒤로 바로 진행은 안 하셨더라고요. 혹시 어느 부분에서 조금 멈추게 되셨는지 여쭤봐도 괜찮을까요?",
      "지금 다시 생각 중이신 상황이면 처음부터 다 다시 설명드리기보다, 그때 가장 걸리셨던 부분 위주로만 짧게 정리드리는 게 더 편하실 것 같아서요.",
    ],
    goal: "안내 후 멈춘 원인을 파악하고 비용/시간/비교/방문 유도 분기로 연결하기",
    nextOptions: [
      { id: "recontact_cost_burden", label: "비용 부담이 있었음" },
      { id: "recontact_schedule_issue", label: "시간표가 안 맞았음" },
      { id: "recontact_compare_check", label: "비교 중이었음" },
      { id: "visit_soft_close", label: "방문상담으로 부드럽게 연결" },
    ],
  },

  recontact_after_visit: {
    title: "재컨택 > 방문상담 이후 상태 확인",
    questions: [
      "방문상담 후 등록까지 이어지지 않은 핵심 이유 확인",
      "확신 부족 / 비용 / 가족 상의 / 시기 문제 중 무엇인지 파악",
      "재방문이 필요한지 확인",
    ],
    scripts: [
      "예전에 방문해서 상담까지 받아보셨던 걸로 확인되는데요, 그때 바로 결정 안 하신 데에는 이유가 있으셨을 것 같아서요. 지금 다시 보면 어떤 부분이 가장 걸리셨는지 여쭤봐도 괜찮을까요?",
      "괜히 다시 처음부터 길게 설명드리려는 건 아니고요, 지난번 보셨던 내용 기준으로 지금 시점에서 필요한 부분만 다시 정리해드리면 될 것 같아서 연락드렸습니다.",
    ],
    goal: "방문상담 이후 멈춘 이유를 파악하고, 거절 대응 또는 재방문 분기로 연결하기",
    nextOptions: [
      { id: "recontact_not_decided", label: "아직 확신이 부족했음" },
      { id: "recontact_family_consult", label: "가족 상의가 필요했음" },
      { id: "recontact_cost_burden", label: "비용 부담이 있었음" },
      { id: "recontact_not_now", label: "시기가 아니었음" },
      { id: "visit_reservation", label: "재방문 상담 연결" },
    ],
  },
};