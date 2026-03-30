export const purposeData = {
  purpose_fee: {
    title: "문의 목적 > 수강료",
    questions: [
      "비용 자체가 궁금한 건지, 실제 본인 부담액이 궁금한 건지 확인",
      "국비지원이나 내일배움카드까지 같이 보려는지 확인",
      "현재 바로 시작 생각인지, 비교 단계인지 확인",
    ],
    scripts: [
      "아, 수강료 부분이 가장 궁금하셨군요. 과정마다 기본 금액은 안내드릴 수 있는데, 실제 부담액은 내일배움카드나 지원 유형에 따라 달라질 수 있어요.",
      "그래서 단순 금액만 보는 것보다 OOO님 상황에서 어떤 방식이 가장 유리한지 같이 보는 게 훨씬 정확합니다.",
    ],
    goal: "단순 가격 문의를 개인별 안내 필요성으로 전환",
    nextOptions: [
      { id: "field_select_common", label: "어떤 분야 비용인지 먼저 보기" },
      { id: "check_support", label: "국비지원/내배카도 같이 확인" },
      { id: "objection_expensive", label: "비용 부담이 크다고 함" },
      { id: "visit_soft_close", label: "방문 상담으로 연결 시도" },
      { id: "remote_soft_close", label: "비대면/전화 상담 가능 여부 안내" },
    ],
  },

  purpose_schedule: {
    title: "문의 목적 > 시간표",
    questions: [
      "평일/주말 중 어느 쪽이 가능한지",
      "오전/오후/저녁 중 가능한 시간대 확인",
      "현재 재직 중인지 여부 확인",
    ],
    scripts: [
      "시간표가 가장 중요하셨군요. 문의 주신 분들 중에도 시간대 때문에 반 선택이 달라지는 경우가 많아서 먼저 그 부분을 확인드리고 있어요.",
      "혹시 평일이 편하실까요, 아니면 주말 쪽이 더 편하실까요?",
    ],
    goal: "시간표 문의를 구체적인 생활패턴 파악으로 연결",
    nextOptions: [
      { id: "field_select_common", label: "어떤 분야 시간표인지 먼저 보기" },
      { id: "schedule_worker", label: "직장인 / 퇴근 후만 가능" },
      { id: "schedule_student", label: "학생 / 요일 조정 가능" },
      { id: "schedule_parent", label: "학부모 / 자녀 일정 중요" },
      { id: "schedule_not_fit", label: "원하는 시간표가 안 맞음" },
      { id: "visit_soft_close", label: "방문 상담으로 연결 시도" },
      { id: "remote_soft_close", label: "비대면/전화 상담으로 연결 시도" },
    ],
  },

  purpose_support: {
    title: "문의 목적 > 국비지원/내배카",
    questions: [
      "내일배움카드 보유 여부 확인",
      "발급 전인지, 이미 발급받았는지 확인",
      "국비가 안 되면 진행이 어려운 상황인지 확인",
    ],
    scripts: [
      "아, 국비지원 쪽이 가장 궁금하셨군요. 이 부분은 문의가 가장 많은데, 실제로는 개인 이력이나 카드 상태에 따라 적용 방식이 조금씩 달라질 수 있어요.",
      "혹시 현재 내일배움카드를 이미 갖고 계신 상태실까요, 아니면 아직 알아보시는 단계실까요?",
    ],
    goal: "지원 여부 확인 + 내방 또는 전화상담 명분 만들기",
    nextOptions: [
      { id: "field_select_common", label: "적용 희망 분야부터 정리하기" },
      { id: "support_have_card", label: "내배카 이미 있음" },
      { id: "support_no_card", label: "내배카 아직 없음" },
      { id: "objection_support_only", label: "국비 안 되면 안 하겠다고 함" },
      { id: "visit_soft_close", label: "방문 상담으로 연결 시도" },
      { id: "remote_soft_close", label: "전화 상담으로 먼저 확인" },
    ],
  },

  purpose_job: {
    title: "문의 목적 > 취업/이직",
    questions: [
      "현재 재직 중인지, 취업 준비 중인지 확인",
      "희망 직무나 분야가 있는지 확인",
      "기초부터 필요한지, 포트폴리오가 필요한지 확인",
    ],
    scripts: [
      "취업이나 이직 목적이시군요. 같은 과정을 문의하셔도 취업 목적이시면 수업을 보는 기준이 조금 달라져서요.",
      "혹시 완전 처음 시작이신지, 아니면 어느 정도 해보셨는데 취업 연결이 안 되고 있는 상황이실까요?",
    ],
    goal: "현재 수준과 취업 목적 명확화",
    nextOptions: [
      { id: "field_select_common", label: "관련 분야부터 정리하기" },
      { id: "job_beginner", label: "비전공/처음 시작" },
      { id: "job_portfolio", label: "포트폴리오가 필요함" },
      { id: "job_urgent", label: "빨리 취업해야 하는 상황" },
      { id: "job_change", label: "이직/직무 변경 고민" },
      { id: "visit_soft_close", label: "방문 상담으로 연결 시도" },
    ],
  },

  purpose_skill: {
    title: "문의 목적 > 실무 보충/자기계발",
    questions: [
      "업무 활용인지, 개인 역량 확장인지 확인",
      "현재 어떤 일을 하고 있는지 확인",
      "짧고 실용적인 수업을 원하시는지 확인",
    ],
    scripts: [
      "실무 보충이나 자기계발 목적이시군요. 이런 경우에는 취업반처럼 길게 가는 것보다 필요한 부분 위주로 효율적으로 보는 방향도 가능해요.",
      "혹시 현재 업무에 바로 써야 해서 배우시는 걸까요, 아니면 앞으로를 대비해서 미리 준비하시는 걸까요?",
    ],
    goal: "목적에 따라 짧고 효율적인 과정 제안",
    nextOptions: [
      { id: "field_select_common", label: "관련 분야부터 정리하기" },
      { id: "skill_work_use", label: "현재 업무에 바로 필요" },
      { id: "skill_future", label: "미래 대비 / 취미 포함" },
      { id: "visit_soft_close", label: "방문 상담으로 연결 시도" },
      { id: "remote_soft_close", label: "전화 상담으로 연결 시도" },
    ],
  },

  purpose_parent: {
    title: "문의 목적 > 학부모/보호자",
    questions: [
      "자녀의 현재 학년 또는 상황 확인",
      "취업, 진학, 포트폴리오 중 어떤 방향이 필요한지 확인",
      "기초 적응이 먼저인지 결과물이 먼저인지 확인",
    ],
    scripts: [
      "보호자분 입장에서는 단순히 수업을 듣는 것보다, 이 과정을 왜 배우는지와 앞으로 어떤 방향으로 이어지는지가 더 중요하실 수 있어요.",
      "그래서 자녀분 상황에 맞춰 기초 적응이 필요한지, 아니면 포트폴리오나 실무 연결이 필요한지부터 같이 보시는 게 가장 정확합니다.",
    ],
    goal: "보호자 문의를 자녀 상황 맞춤 상담으로 전환",
    nextOptions: [
      { id: "field_select_common", label: "자녀 관심 분야부터 정리하기" },
      { id: "parent_highschool", label: "고등학생 자녀 문의" },
      { id: "parent_college", label: "대학생 자녀 문의" },
      { id: "parent_job", label: "취업 준비 자녀 문의" },
      { id: "visit_soft_close", label: "방문 상담으로 연결" },
    ],
  },

  purpose_just_ask: {
    title: "문의 목적 > 아직 고민 중",
    questions: [
      "가볍게 알아보는 단계인지 확인",
      "가장 걸리는 요소가 무엇인지 확인",
    ],
    scripts: [
      "네, 충분히 그럴 수 있어요. 처음에는 다들 비교도 해보시고 가볍게 알아보시는 경우가 많으세요.",
      "혹시 지금 바로 결정이 어려우신 이유가 비용 쪽인지, 시간 쪽인지, 아니면 내가 할 수 있을지에 대한 부분인지 여쭤봐도 괜찮을까요?",
    ],
    goal: "막연한 고민을 구체적 장애요인으로 바꾸기",
    nextOptions: [
      { id: "field_select_common", label: "관심 분야부터 가볍게 보기" },
      { id: "objection_expensive", label: "비용이 걸림" },
      { id: "schedule_not_fit", label: "시간이 걸림" },
      { id: "objection_not_sure", label: "나랑 맞을지 모르겠음" },
      { id: "objection_compare", label: "다른 학원과 비교 중" },
      { id: "visit_soft_close", label: "가볍게 방문 상담 제안" },
      { id: "remote_soft_close", label: "가볍게 전화 상담 제안" },
    ],
  },
  field_select_common: {
    title: "분야 선택",
    questions: [
      "어느 분야에 가장 관심이 있는지 확인",
      "취업 / 실무 / 입문 중 어떤 목적이 큰지 확인",
    ],
    scripts: [
      "좋아요. 그러면 먼저 어떤 분야를 보고 계신지부터 정리하면 안내가 훨씬 정확해져요.",
      "관심 있으신 분야를 기준으로 세부 과정 방향까지 같이 봐드릴게요.",
    ],
    goal: "공통 분야 선택 허브 역할",
    nextOptions: [
      { id: "field_video", label: "영상 / 모션" },
      { id: "field_web", label: "웹 / IT" },
      { id: "field_excel", label: "엑셀 / OA" },
      { id: "field_ai", label: "AI 활용" },
      { id: "field_visual_edit", label: "시각 / 편집디자인" },
      { id: "field_interior", label: "건축 / 인테리어" },
      { id: "field_cg", label: "CG / 3D" },
    ],
  },
};
