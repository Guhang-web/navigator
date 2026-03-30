export const detailData = {
  support_have_card: {
    title: "국비지원 > 내배카 있음",
    questions: [
      "카드 발급 상태와 사용 가능 여부 확인",
      "어떤 과정에 적용 가능한지 궁금한지 확인",
      "온라인/오프라인 모두 가능한지 확인",
    ],
    scripts: [
      "아, 카드가 있으시군요. 그러면 적용 가능 과정이랑 실제 부담액을 같이 체크해보는 게 제일 중요하겠네요.",
      "전화로는 일반적인 안내까진 가능하지만, 정확한 적용 여부나 자부담은 직접 확인하거나 전화상담으로 세부 확인드리는 게 가장 정확합니다.",
    ],
    goal: "카드 보유자를 방문 또는 전화상담으로 연결",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
      { id: "visit_reservation", label: "바로 방문 예약" },
    ],
  },

  support_no_card: {
    title: "국비지원 > 내배카 없음",
    questions: [
      "발급 생각이 있는지 확인",
      "국비가 꼭 필요한 상황인지 확인",
      "지금 바로 시작이 급한지 확인",
    ],
    scripts: [
      "아직 카드가 없으시군요. 괜찮습니다. 발급 가능성부터 어떤 방향으로 보는 게 좋은지 같이 설명드릴 수 있어요.",
      "카드 발급이 가능한 상황인지, 그리고 카드 없이도 시작 가능한 방향이 있는지 같이 비교해서 보시면 훨씬 판단이 쉬우세요.",
    ],
    goal: "발급 전 고객 불안 완화",
    nextOptions: [
      { id: "objection_support_only", label: "국비 아니면 어렵다고 함" },
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  schedule_worker: {
    title: "시간표 > 직장인",
    questions: [
      "퇴근 시간이 몇 시쯤인지 확인",
      "주말 가능 여부 확인",
      "비대면 수업 가능 여부 확인",
    ],
    scripts: [
      "직장 다니시면서 배우시려는 거면 시간표가 제일 중요하죠. 그래서 재직자분들은 무조건 생활 패턴 기준으로 반을 보는 게 맞습니다.",
      "혹시 평일 저녁이 편하실까요, 아니면 주말 하루 집중해서 듣는 쪽이 더 괜찮으실까요?",
    ],
    goal: "직장인 맞춤형 반 제안",
    nextOptions: [
      { id: "schedule_not_fit", label: "원하는 시간대가 현재 없음" },
      { id: "remote_class_info", label: "비대면 수업 가능 여부 안내" },
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  schedule_student: {
    title: "시간표 > 학생",
    questions: [
      "학교 일정과 병행 가능한지 확인",
      "방학 활용 여부 확인",
      "바로 시작인지, 방학 시작인지 확인",
    ],
    scripts: [
      "학생분들은 학기 중이냐 방학 중이냐에 따라 반 선택이 꽤 달라져요.",
      "지금 바로 시작이 좋을지, 아니면 방학 타이밍이 더 효율적인지 같이 보면 좋을 것 같아요.",
    ],
    goal: "학생 일정 중심으로 유도",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  schedule_parent: {
    title: "시간표 > 학부모/보호자",
    questions: [
      "자녀 학교 일정과 병행 가능한지 확인",
      "주말 또는 방학 활용 가능 여부 확인",
    ],
    scripts: [
      "학생 일정은 학교 시간과 병행 여부가 중요해서요. 그래서 실제 가능한 요일과 시간대를 먼저 보는 게 좋습니다.",
      "방학 활용이 가능한지, 아니면 학기 중 병행이 필요한지에 따라 추천드리는 반이 달라질 수 있어요.",
    ],
    goal: "보호자 문의를 실질적인 시간표 상담으로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  job_beginner: {
    title: "취업 > 비전공/초보",
    questions: [
      "완전 처음인지 확인",
      "혼자 해보다 막힌 경험 있는지 확인",
      "취업 희망 시점 확인",
    ],
    scripts: [
      "처음 시작이시군요. 그럼 오히려 방향을 제대로 잡는 게 더 중요해요. 처음에 잘못 시작하면 시간만 오래 쓰는 경우가 많거든요.",
      "그래서 기초부터 어디까지 잡아야 취업 연결이 되는지 기준을 먼저 보는 게 좋습니다.",
    ],
    goal: "초보자에게 방향 설계 필요성 인식",
    nextOptions: [
      { id: "objection_not_sure", label: "내가 할 수 있을지 걱정함" },
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  job_portfolio: {
    title: "취업 > 포트폴리오 필요",
    questions: [
      "현재 작업물이 있는지 확인",
      "면접/지원 경험이 있는지 확인",
      "희망 직무 확인",
    ],
    scripts: [
      "포트폴리오가 필요하신 상황이군요. 이 단계에서는 단순 수업 안내보다 어떤 결과물이 있어야 면접까지 연결되는지가 더 중요합니다.",
      "그래서 작업물 방향이나 직무 기준을 같이 보는 상담이 훨씬 도움이 되세요.",
    ],
    goal: "포폴 방향 상담 명분 만들기",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
      { id: "visit_reservation", label: "바로 방문 예약" },
    ],
  },

  job_urgent: {
    title: "취업 > 빨리 취업해야 함",
    questions: [
      "취업 희망 시점 확인",
      "현재 가능한 시간 확보 여부 확인",
      "가장 빠른 시작 가능 일정 확인",
    ],
    scripts: [
      "빨리 취업을 생각 중이시라면 더더욱 시작 방향을 빨리 잡는 게 중요하겠네요.",
      "이럴 때는 전화로 길게 듣는 것보다 OOO님 상황 기준으로 어떤 과정을 우선 봐야 하는지 빠르게 정리받는 게 훨씬 효율적입니다.",
    ],
    goal: "긴박감을 상담 전환 이유로 연결",
    nextOptions: [
      { id: "visit_reservation", label: "방문 예약 잡기" },
      { id: "remote_consult_reservation", label: "전화 상담 예약 잡기" },
    ],
  },

  job_change: {
    title: "취업 > 이직/직무변경",
    questions: [
      "현재 직무에서 왜 바꾸고 싶은지 확인",
      "완전 다른 분야인지, 기존 경력 확장인지 확인",
    ],
    scripts: [
      "이직이나 직무 변경은 단순히 새로 배우는 것보다, 기존 경력을 어떻게 연결해서 가져갈지가 중요하거든요.",
      "그래서 OOO님 상황에서는 처음부터 전부 새로 가야 하는지, 아니면 기존 경험을 살려서 빠르게 연결할 수 있는지 같이 보는 게 좋습니다.",
    ],
    goal: "이직 고민을 현실적인 로드맵 상담으로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  skill_work_use: {
    title: "실무 보충 > 현재 업무 활용",
    questions: [
      "업무에서 어떤 부분이 필요한지 확인",
      "엑셀/AI/디자인/영상 등 구체 분야 확인",
      "급하게 필요한지 확인",
    ],
    scripts: [
      "업무에 바로 쓰셔야 하는 거면 더 실용적으로 접근하는 게 맞습니다.",
      "어떤 기능이나 작업이 가장 필요하신지만 정확히 잡히면, 불필요하게 길게 안 가고 필요한 부분부터 보실 수 있어요.",
    ],
    goal: "필요 기능 중심 상담",
    nextOptions: [
      { id: "visit_soft_close", label: "짧은 방문 상담 제안" },
      { id: "remote_soft_close", label: "짧은 전화 상담 제안" },
    ],
  },

  skill_future: {
    title: "실무 보충 > 미래 대비",
    questions: [
      "관심 분야가 뚜렷한지 확인",
      "취미 수준인지 진로 확장까지 보는지 확인",
    ],
    scripts: [
      "미리 준비하시는 건 정말 좋죠. 이런 분들은 급하게 시작하는 것보다 본인한테 맞는 방향을 먼저 잡는 게 훨씬 만족도가 높아요.",
      "그래서 가볍게라도 상담 받아보시면 시작 우선순위 잡는 데 도움이 되실 거예요.",
    ],
    goal: "부담 없는 상담 명분 만들기",
    nextOptions: [
      { id: "visit_soft_close", label: "가볍게 방문 상담 제안" },
      { id: "remote_soft_close", label: "가볍게 전화 상담 제안" },
    ],
  },

  parent_highschool: {
    title: "학부모 > 고등학생 자녀",
    questions: [
      "진학 대비인지, 포트폴리오 대비인지 확인",
      "기초 적응이 필요한지 확인",
    ],
    scripts: [
      "고등학생은 아직 방향이 완전히 정해지지 않은 경우도 많아서, 무조건 빨리 배우는 것보다 적성에 맞는지와 기초가 맞는지를 함께 보는 게 중요해요.",
      "그래서 자녀분 상황에 맞게 기초부터 가야 하는지, 포트폴리오를 미리 준비해야 하는지 같이 정리해드리는 편입니다.",
    ],
    goal: "고등학생 상담을 방향 탐색 중심으로 연결",
    nextOptions: [{ id: "visit_soft_close", label: "방문 상담 제안" }],
  },

  parent_college: {
    title: "학부모 > 대학생 자녀",
    questions: [
      "재학 중인지 휴학 중인지 확인",
      "포트폴리오 필요 여부 확인",
    ],
    scripts: [
      "대학생은 학교 수업과 별개로 실무 결과물이 필요해지는 시점이 오기 때문에, 언제부터 어떤 걸 준비해야 하는지가 중요해요.",
      "그래서 자녀분 상태를 먼저 보고, 기초 보강이 필요한지 포트폴리오 준비가 필요한지 정리해보면 좋습니다.",
    ],
    goal: "대학생 자녀 문의를 준비 시점 상담으로 연결",
    nextOptions: [{ id: "visit_soft_close", label: "방문 상담 제안" }],
  },

  parent_job: {
    title: "학부모 > 취업 준비 자녀",
    questions: [
      "취업 시점 확인",
      "현재 작업물이나 준비 상태 확인",
    ],
    scripts: [
      "취업 준비 단계라면 단순히 수업을 듣는 것보다 실제 취업에 연결될 수 있는 결과물이 있는지가 더 중요해요.",
      "그래서 자녀분이 어느 단계에 있는지 먼저 보고, 부족한 부분부터 효율적으로 채우는 게 좋습니다.",
    ],
    goal: "취업 준비 자녀 문의를 결과물 중심 상담으로 전환",
    nextOptions: [{ id: "visit_soft_close", label: "방문 상담 제안" }],
  },
};