/**
 * data.js
 * 실전 상담 네비게이터 - v2 확장판
 * 현재 app.js 구조에 그대로 맞는 callData / constantKnowledge 형식
 */

const callData = {
  root: {
    title: "📞 1단계: 도입 및 첫 응대",
    questions: [
      "성함 확인 및 문의 남긴 내용이 맞는지 확인",
      "지금 통화 가능하신지 먼저 체크",
      "가장 궁금한 게 수강료/시간표/국비/취업/실무 중 무엇인지 확인",
    ],
    scripts: [
      "안녕하세요, SBS아카데미컴퓨터아트학원 안산점 OOO멘토입니다. OOO님께서 이번에 [문의과정] 관련해서 문의를 남겨주셔서 안내 도와드리려고 연락드렸습니다. 혹시 문의 남겨주신 거 맞으실까요?",
      "감사합니다. 문의 주신 분들마다 궁금하신 부분이 조금씩 다르셔서요. 수강료, 시간표, 국비지원 여부, 취업 방향 중에서 어떤 부분이 가장 궁금하셔서 문의 남겨주셨어요?",
    ],
    goal: "상대가 '내 상황을 듣고 안내해주는구나'라고 느끼게 만들기",
    nextOptions: [
      { id: "purpose_fee", label: "💰 수강료가 가장 궁금함" },
      { id: "purpose_schedule", label: "🕒 시간표가 가장 궁금함" },
      { id: "purpose_support", label: "🏛️ 국비지원/내배카가 가장 궁금함" },
      { id: "purpose_job", label: "🎯 취업/이직 목적" },
      { id: "purpose_skill", label: "📚 실무 보충/자기계발 목적" },
      { id: "purpose_course_video", label: "🎬 영상/모션 과정 문의" },
      { id: "purpose_course_excel_ai", label: "📊 엑셀/AI 과정 문의" },
      { id: "purpose_course_web_it", label: "💻 웹/IT 과정 문의" },
      { id: "purpose_parent", label: "👨‍👩‍👧 학부모/보호자 문의" },
      { id: "purpose_just_ask", label: "🤔 그냥 문의만 해봄 / 아직 고민 중" },
    ],
  },

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
      { id: "skill_work_use", label: "현재 업무에 바로 필요" },
      { id: "skill_future", label: "미래 대비 / 취미 포함" },
      { id: "visit_soft_close", label: "방문 상담으로 연결 시도" },
      { id: "remote_soft_close", label: "전화 상담으로 연결 시도" },
    ],
  },

  purpose_course_video: {
    title: "과정 문의 > 영상/모션",
    questions: [
      "영상 편집, 모션그래픽, 유튜브, 3D 중 어떤 쪽이 더 관심인지 확인",
      "취업용인지, 포트폴리오용인지, 콘텐츠 제작용인지 확인",
      "완전 처음인지, 포토샵/일러스트/에프터이펙트 경험이 있는지 확인",
    ],
    scripts: [
      "영상/모션 쪽에 관심 있으시군요. 이 분야는 같은 문의라도 유튜브 편집이 목적이신지, 모션그래픽이나 포트폴리오까지 보시는지에 따라 시작 과정이 달라질 수 있어요.",
      "그래서 먼저 OOO님이 결과적으로 어떤 작업을 하고 싶으신지 확인되면 더 정확하게 안내드릴 수 있습니다.",
    ],
    goal: "영상/모션 문의를 세부 목적 분기로 전환",
    nextOptions: [
      { id: "video_youtube", label: "유튜브/쇼츠 편집 목적" },
      { id: "video_motion", label: "모션그래픽 목적" },
      { id: "video_3d", label: "시네마4D / 3D 목적" },
      { id: "video_job", label: "영상 취업/포트폴리오 목적" },
      { id: "visit_soft_close", label: "방문 상담으로 연결" },
    ],
  },

  purpose_course_excel_ai: {
    title: "과정 문의 > 엑셀/AI",
    questions: [
      "업무 활용인지 자격증인지 확인",
      "엑셀만 필요한지, AI도 함께 필요한지 확인",
      "현재 어떤 업무를 하고 있는지 확인",
    ],
    scripts: [
      "엑셀이나 AI 쪽 문의 주셨군요. 이 과정은 업무 효율 때문에 배우시는 분들도 많고, 이직이나 실무 경쟁력 때문에 함께 보시는 분들도 많아요.",
      "엑셀 실무가 먼저 필요하신 건지, 아니면 AI까지 같이 익혀서 업무에 바로 연결하고 싶으신 건지에 따라 방향이 달라질 수 있어요.",
    ],
    goal: "엑셀/AI 문의를 실무 목적 중심으로 구체화",
    nextOptions: [
      { id: "excel_work", label: "엑셀 실무가 급함" },
      { id: "excel_cert", label: "컴활/자격증 목적" },
      { id: "ai_work", label: "AI 업무 활용 목적" },
      { id: "ai_creator", label: "AI 크리에이터/콘텐츠 목적" },
      { id: "visit_soft_close", label: "방문 상담으로 연결" },
      { id: "remote_soft_close", label: "전화 상담으로 연결" },
    ],
  },

  purpose_course_web_it: {
    title: "과정 문의 > 웹/IT",
    questions: [
      "웹디자인, 퍼블리싱, 프론트엔드, 개발 쪽 중 어디가 관심인지 확인",
      "비전공 초보인지, 이미 조금 해봤는지 확인",
      "취업이 목표인지 포트폴리오 보강이 목표인지 확인",
    ],
    scripts: [
      "웹/IT 쪽은 범위가 넓어서요. 디자인 중심인지, 퍼블리싱인지, 개발 쪽인지 먼저 잡히면 훨씬 정확하게 안내드릴 수 있어요.",
      "처음 시작하시는 분들도 많아서, OOO님 상황에 맞게 기초부터 가야 하는지 아니면 포트폴리오 중심으로 가야 하는지 먼저 보는 게 중요합니다.",
    ],
    goal: "웹/IT 문의를 기초/직무/취업 분기로 전환",
    nextOptions: [
      { id: "web_beginner", label: "비전공/처음 시작" },
      { id: "web_publishing", label: "퍼블리싱/UIUX 쪽" },
      { id: "web_frontend", label: "프론트엔드 개발 쪽" },
      { id: "web_job", label: "취업/포트폴리오 목적" },
      { id: "visit_soft_close", label: "방문 상담으로 연결" },
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
      { id: "objection_expensive", label: "비용이 걸림" },
      { id: "schedule_not_fit", label: "시간이 걸림" },
      { id: "objection_not_sure", label: "나랑 맞을지 모르겠음" },
      { id: "objection_compare", label: "다른 학원과 비교 중" },
      { id: "visit_soft_close", label: "가볍게 방문 상담 제안" },
      { id: "remote_soft_close", label: "가볍게 전화 상담 제안" },
    ],
  },

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

  schedule_not_fit: {
    title: "반박 대응 > 시간표가 안 맞음",
    questions: [
      "현재 가능한 요일/시간대가 어떻게 되는지",
      "꼭 실시간 수업이 아니어도 학습을 이어갈 수 있는지",
      "다음 개강까지 기다릴 수 있는지",
    ],
    scripts: [
      "OOO님처럼 배우고 싶은 마음은 확실한데 시간대가 안 맞는 경우가 생각보다 많아요.그래서 이럴 때는 '못 한다'로 끝내기보다, 가능한 시간대 수업으로 먼저 시작할 수 있는지 보고 방향을 같이 잡아드려요. 그리고 운영 가능한 과정은 녹화수업으로 학습을 이어가시는 분들도 계셔서, 시간 제약이 있더라도 방법을 아예 못 찾는 건 아니거든요.",
    ],
    goal: "시간표 불일치를 학습 지속 가능한 대안 구조로 전환",
    nextOptions: [
      { id: "job_urgent", label: "빨리 시작해야 하는 상황" },
      { id: "recorded_class_info", label: "녹화수업 가능 여부 안내" },
      { id: "ddazua_benefit", label: "온라인 보충학습(따즈아) 혜택 안내" },
      { id: "visit_soft_close", label: "가능 반 확인 위해 방문 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  recorded_class_info: {
    title: "반박 대응 > 녹화수업 가능 여부 안내",
    questions: [
      "실시간 참여가 어려운 요일이 고정인지 확인",
      "수업 당일 또는 이후 복습 가능한 시간이 있는지 확인",
      "녹화수업으로라도 학습을 이어갈 의향이 있는지 확인",
    ],
    scripts: [
      "OOO님처럼 시간대 때문에 실시간 참여가 어려운 분들은, 운영 가능한 과정에 한해서 녹화수업으로 학습을 이어가시는 경우도 있어요.",
      "그래서 꼭 매번 현장 참여가 100% 되어야만 시작할 수 있는 건 아니고, 본인 일정상 어려운 날은 녹화본으로 진도를 따라가면서 학습을 이어가는 방식도 가능합니다.",
      "물론 이 부분은 과정마다 운영 방식이 조금 다를 수 있어서, OOO님 일정이랑 맞춰서 가능한 반이 있는지 같이 확인해보는 게 가장 정확해요.",
    ],
    goal: "실시간 참여 어려움을 학습 가능 구조로 전환",
    nextOptions: [
      { id: "ddazua_benefit", label: "온라인 보충학습(따즈아) 혜택 안내" },
      { id: "visit_soft_close", label: "가능 반 확인 위해 방문 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  ddazua_benefit: {
    title: "반박 대응 > 따즈아 수강생 혜택 안내",
    questions: [
      "수업 외에 복습할 수 있는 자료도 함께 필요하신지",
      "반복해서 보면서 익히는 학습 방식이 더 편하신지",
      "온라인 보충학습까지 같이 활용할 의향이 있으신지",
    ],
    scripts: [
      "OOO님처럼 수업만 듣고 끝내기보다 복습이나 보충까지 같이 챙기고 싶어 하시는 분들은, 수강생 혜택으로 따즈아 온라인 강의도 안내받으실 수 있어요.",
      "필요한 내용을 반복해서 볼 수 있어서, 수업 들으시고 집에서 다시 정리하시거나 부족한 부분 보완하실 때 활용도가 높거든요.",
      "그래서 이건 메인 수업을 대신하는 개념이라기보다는, 학습을 더 안정적으로 이어가실 수 있게 도와드리는 추가 혜택이라고 보시면 돼요.",
    ],
    goal: "따즈아를 메인 수업 대체가 아닌 복습·보충 혜택으로 인식시키기",
    nextOptions: [
      { id: "visit_soft_close", label: "가능한 반 확인 위해 방문 제안" },
      { id: "remote_soft_close", label: "전화 상담으로 세부 확인" },
      { id: "job_urgent", label: "빨리 시작해야 하는 상황" },
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

  video_youtube: {
    title: "영상/모션 > 유튜브/쇼츠 편집",
    questions: [
      "개인 채널 운영인지, 취업용인지 확인",
      "프리미어프로 중심으로 필요한지 확인",
    ],
    scripts: [
      "유튜브나 쇼츠 편집이 목적이시라면 너무 무겁게 시작하기보다, 실제 편집 흐름에 바로 연결되는 과정이 더 중요해요.",
      "자막, 컷편집, 썸네일, 업로드용 결과물까지 연결되는 식으로 배우는 방향이 훨씬 실용적입니다.",
    ],
    goal: "콘텐츠 제작 목적에 맞는 과정으로 연결",
    nextOptions: [
      { id: "visit_soft_close", label: "상담 후 과정 추천받기" },
      { id: "remote_soft_close", label: "전화 상담으로 추천받기" },
    ],
  },

  video_motion: {
    title: "영상/모션 > 모션그래픽",
    questions: [
      "에프터이펙트 경험 여부 확인",
      "광고, 타이포그래피, 브랜딩 영상 중 관심 분야 확인",
    ],
    scripts: [
      "모션그래픽 쪽은 단순 툴 사용보다 결과물 퀄리티가 중요해서, 기초 디자인 감각이랑 툴 흐름을 같이 잡는 게 중요해요.",
      "그래서 처음 시작이라도 어떤 스타일의 결과물을 만들고 싶은지 먼저 정리되면 방향 잡기가 훨씬 쉬워집니다.",
    ],
    goal: "모션그래픽 문의를 결과물 중심 상담으로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  video_3d: {
    title: "영상/모션 > 3D / 시네마4D",
    questions: [
      "3D를 영상에 활용하려는 건지, 단독 작업인지 확인",
      "완전 초보인지 확인",
    ],
    scripts: [
      "3D는 입체감 있는 결과물을 만들 수 있어서 영상 퀄리티를 올리기에 좋아요. 다만 처음엔 혼자 접근하면 어디서부터 시작해야 할지 막막할 수 있거든요.",
      "그래서 2D 기반 편집과 연결해서 갈지, 3D 중심으로 갈지를 먼저 잡아보는 게 중요합니다.",
    ],
    goal: "3D 문의를 난이도와 방향 기준으로 정리",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  video_job: {
    title: "영상/모션 > 취업/포트폴리오",
    questions: ["희망 직무 확인", "현재 작업물 보유 여부 확인"],
    scripts: [
      "영상 취업 쪽은 단순 툴을 배웠다는 것보다 포트폴리오 결과물이 있느냐가 더 중요합니다.",
      "그래서 OOO님이 어느 단계에 계신지에 따라 기초부터 갈지, 포트폴리오 중심으로 갈지 나눠서 보는 게 좋아요.",
    ],
    goal: "영상 취업 목적을 포트폴리오 상담으로 연결",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "visit_reservation", label: "바로 방문 예약" },
    ],
  },

  excel_work: {
    title: "엑셀/AI > 엑셀 실무",
    questions: [
      "현재 업무에서 어떤 기능이 필요한지 확인",
      "기초부터 필요한지, 함수/피벗/데이터 정리가 필요한지 확인",
    ],
    scripts: [
      "엑셀은 정말 업무에 바로 연결되기 때문에, 필요한 기능이 뚜렷하면 더 빠르게 도움을 드릴 수 있어요.",
      "문서 정리, 함수, 데이터 관리, 보고용 정리 중에 어떤 부분이 가장 급하신지에 따라 수업 방향이 달라질 수 있습니다.",
    ],
    goal: "엑셀 실무 니즈를 구체 기능으로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  excel_cert: {
    title: "엑셀/AI > 컴활/자격증",
    questions: [
      "컴활 1급/2급 또는 시험 목적 확인",
      "실기 위주인지 필기 포함인지 확인",
    ],
    scripts: [
      "자격증 목적이시라면 실제 시험 일정과 현재 수준을 같이 보는 게 중요해요.",
      "기초가 어느 정도 있으신지에 따라 바로 문제풀이로 갈지, 기본기부터 잡을지 방향이 달라질 수 있습니다.",
    ],
    goal: "시험 목적에 맞는 준비 단계 확인",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  ai_work: {
    title: "엑셀/AI > AI 업무 활용",
    questions: [
      "업무 자동화, 문서작성, 기획보조 등 어떤 용도인지 확인",
      "현재 직무 확인",
    ],
    scripts: [
      "요즘 AI는 단순 호기심보다 업무 효율 때문에 배우시는 분들이 정말 많아요.",
      "OOO님 업무에서 어디에 가장 바로 적용하고 싶으신지가 잡히면, 훨씬 실용적으로 안내드릴 수 있습니다.",
    ],
    goal: "AI 문의를 실무 활용 목적 중심으로 연결",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  ai_creator: {
    title: "엑셀/AI > AI 크리에이터/콘텐츠",
    questions: [
      "영상, 이미지, 유튜브, 콘텐츠 제작 중 어떤 목적 확인",
      "개인 활용인지 업무 활용인지 확인",
    ],
    scripts: [
      "AI 크리에이터 과정은 결과물을 직접 만들어보는 흐름이 중요해서, 단순 기능 설명보다 실제 활용 목적이 먼저 잡히는 게 좋아요.",
      "콘텐츠 제작이 목적이신지, 마케팅이나 업무에 활용하고 싶으신지에 따라 추천 방향이 달라질 수 있습니다.",
    ],
    goal: "AI 크리에이터 문의를 결과물 목적 상담으로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  web_beginner: {
    title: "웹/IT > 비전공/처음 시작",
    questions: [
      "HTML/CSS/JS 경험 여부 확인",
      "디자인과 개발 중 어느 쪽이 더 끌리는지 확인",
    ],
    scripts: [
      "웹/IT는 처음 시작하시는 분들도 정말 많아요. 그래서 처음엔 무조건 어려운 기술부터 가는 것보다, 본인한테 맞는 방향을 먼저 잡는 게 더 중요합니다.",
      "디자인 감각이 더 맞는지, 논리적으로 만드는 쪽이 더 맞는지에 따라 시작 과정이 달라질 수 있어요.",
    ],
    goal: "웹 초보 문의를 방향 설계로 전환",
    nextOptions: [
      { id: "objection_not_sure", label: "내가 할 수 있을지 걱정" },
      { id: "visit_soft_close", label: "방문 상담 제안" },
    ],
  },

  web_publishing: {
    title: "웹/IT > 퍼블리싱/UIUX",
    questions: ["디자인 작업 경험 여부 확인", "피그마/포토샵 경험 여부 확인"],
    scripts: [
      "퍼블리싱이나 UIUX 쪽은 화면을 예쁘게 만드는 것만이 아니라, 실제로 구현과 연결되는 감각도 중요하거든요.",
      "그래서 디자인 감각과 구현 흐름 중 어느 쪽이 더 필요한지 먼저 보면 더 정확히 안내드릴 수 있어요.",
    ],
    goal: "퍼블리싱 문의를 실무 감각 중심으로 연결",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
    ],
  },

  web_frontend: {
    title: "웹/IT > 프론트엔드",
    questions: [
      "자바스크립트/리액트 경험 여부 확인",
      "취업 목적 또는 프로젝트 보강 목적 확인",
    ],
    scripts: [
      "프론트엔드는 단순 문법보다 결과물을 직접 만들어보는 과정이 중요해서요. 기초 문법 단계인지, 프로젝트와 포트폴리오가 필요한 단계인지에 따라 안내 방향이 달라집니다.",
      "어느 정도 해보신 상태인지 먼저 파악되면 훨씬 정확하게 도와드릴 수 있어요.",
    ],
    goal: "프론트엔드 문의를 현재 수준 진단으로 연결",
    nextOptions: [
      { id: "web_job", label: "취업/포트폴리오가 목적" },
      { id: "visit_soft_close", label: "방문 상담 제안" },
    ],
  },

  web_job: {
    title: "웹/IT > 취업/포트폴리오",
    questions: [
      "현재 프로젝트 또는 포트폴리오 유무 확인",
      "희망 기업/직무 확인",
    ],
    scripts: [
      "웹 취업 쪽은 단순 수강보다 포트폴리오 구성과 결과물이 더 중요합니다.",
      "그래서 지금 상태에서 무엇이 부족한지 먼저 봐야, 시간 낭비 없이 필요한 부분만 정확히 채울 수 있어요.",
    ],
    goal: "웹 취업 문의를 포트폴리오 상담으로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "visit_reservation", label: "바로 방문 예약" },
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
    questions: ["재학 중인지 휴학 중인지 확인", "포트폴리오 필요 여부 확인"],
    scripts: [
      "대학생은 학교 수업과 별개로 실무 결과물이 필요해지는 시점이 오기 때문에, 언제부터 어떤 걸 준비해야 하는지가 중요해요.",
      "그래서 자녀분 상태를 먼저 보고, 기초 보강이 필요한지 포트폴리오 준비가 필요한지 정리해보면 좋습니다.",
    ],
    goal: "대학생 자녀 문의를 준비 시점 상담으로 연결",
    nextOptions: [{ id: "visit_soft_close", label: "방문 상담 제안" }],
  },

  parent_job: {
    title: "학부모 > 취업 준비 자녀",
    questions: ["취업 시점 확인", "현재 작업물이나 준비 상태 확인"],
    scripts: [
      "취업 준비 단계라면 단순히 수업을 듣는 것보다 실제 취업에 연결될 수 있는 결과물이 있는지가 더 중요해요.",
      "그래서 자녀분이 어느 단계에 있는지 먼저 보고, 부족한 부분부터 효율적으로 채우는 게 좋습니다.",
    ],
    goal: "취업 준비 자녀 문의를 결과물 중심 상담으로 전환",
    nextOptions: [{ id: "visit_soft_close", label: "방문 상담 제안" }],
  },

  objection_support_only: {
    title: "반박 대응 > 국비 안 되면 안 할래요",
    questions: [
      "비용 절감이 가장 큰 이유인지 확인",
      "국비가 아니면 정말 진행이 어려운 상황인지 확인",
    ],
    scripts: [
      "네, 충분히 그렇게 보실 수 있어요. 아무래도 비용 부담이 있으니까 가장 먼저 국비 여부를 보시는 분들이 많으세요.",
      "다만 국비가 안 된다고 해서 방법이 아예 없는 건 아니고, 실제로는 OOO님처럼 지금 시작 시점이 중요한 분들은 일반과정까지 같이 비교해보시면 훨씬 현실적인 방향이 보이실 수 있어요.",
    ],
    goal: "국비 여부 집착을 정확한 확인 필요 + 일반과정 비교 필요로 전환",
    nextOptions: [
      { id: "normal_course_switch_basic", label: "일반과정 비교 설명하기" },
      { id: "normal_course_switch_fast", label: "빨리 시작 관점으로 설명하기" },
      { id: "visit_soft_close", label: "정확한 확인 위해 방문 제안" },
      { id: "remote_soft_close", label: "정확한 확인 위해 전화 상담 제안" },
      { id: "visit_reservation", label: "방문 예약" },
    ],
  },

  normal_course_switch_basic: {
    title: "전환 멘트 > 국비 안되면 일반과정 비교",
    questions: [
      "지금 배우려는 이유가 무엇인지 확인",
      "국비만 기다릴 상황인지, 시작 시점이 더 중요한지 확인",
    ],
    scripts: [
      "물론 국비로 진행되면 가장 부담이 적어서 좋죠. 그런데 OOO님처럼 지금 배우셔야 하는 이유가 분명한 경우에는 국비 여부만 기다리다가 시작 시기를 놓치는 게 더 아쉬울 수 있어요.",
      "그래서 국비만 딱 보는 것보다 일반과정까지 같이 비교해보시면, 지금 상황에서 어떤 방식이 가장 현실적인지 훨씬 정확하게 보실 수 있습니다.",
    ],
    goal: "국비 불가 = 종료 흐름을 일반과정 비교 흐름으로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "비교 위해 방문 상담 제안" },
      { id: "remote_soft_close", label: "전화로 비교 상담 제안" },
      { id: "check_support", label: "지원 가능 여부 다시 확인" },
    ],
  },

  normal_course_switch_fast: {
    title: "전환 멘트 > 빨리 시작해야 하는 경우",
    questions: [
      "언제부터 시작하고 싶은지 확인",
      "당장 필요한 이유가 있는지 확인",
    ],
    scripts: [
      "국비 여부도 중요하지만, OOO님처럼 빨리 시작하고 싶으신 분들은 오히려 일반과정으로 먼저 필요한 과목부터 시작하시는 경우도 많아요.",
      "중요한 건 지원 형태 자체보다 지금 시작해서 실제 변화를 만드는 거라서, 그 부분까지 같이 비교해보시면 훨씬 판단하시기 편하실 거예요.",
    ],
    goal: "빠른 시작 니즈를 일반과정 전환 명분으로 연결",
    nextOptions: [
      { id: "visit_soft_close", label: "빠른 시작 기준으로 방문 상담 제안" },
      { id: "remote_soft_close", label: "빠른 시작 기준으로 전화 상담 제안" },
      { id: "visit_reservation", label: "바로 방문 예약" },
    ],
  },

  objection_expensive: {
    title: "반박 대응 > 비용이 부담됨",
    questions: [
      "예산이 어느 정도인지 확인",
      "당장 등록이 부담인지, 정보 확인이 먼저인지 확인",
    ],
    scripts: [
      "맞아요. 비용은 누구나 가장 현실적으로 보게 되는 부분이죠.",
      "그래서 더더욱 OOO님 상황에서 지원 가능 여부나 우선순위를 같이 보셔야 괜히 비효율적으로 시작하지 않게 됩니다.",
    ],
    goal: "비용 반박을 상담 필요성으로 전환",
    nextOptions: [
      { id: "check_support", label: "지원 가능 여부 같이 확인" },
      { id: "visit_soft_close", label: "부담 없는 방문 상담 제안" },
      { id: "remote_soft_close", label: "부담 없는 전화 상담 제안" },
    ],
  },

  objection_not_sure: {
    title: "반박 대응 > 나랑 맞을지 모르겠음",
    questions: [
      "어떤 부분이 가장 걱정되는지 확인",
      "완전 처음이라 막막한 건지 확인",
    ],
    scripts: [
      "처음엔 다 그렇게 느끼세요. 내가 할 수 있을지, 나랑 맞을지 확신이 안 서는 게 당연하거든요.",
      "그래서 저희도 무조건 등록 이야기부터 하기보다, 어떤 방식으로 시작하면 부담이 적은지부터 같이 정리해드리는 편이에요.",
    ],
    goal: "심리적 장벽 낮추기",
    nextOptions: [
      { id: "visit_soft_close", label: "부담 없는 방문 상담 제안" },
      { id: "remote_soft_close", label: "부담 없는 전화 상담 제안" },
    ],
  },

  objection_compare: {
    title: "반박 대응 > 다른 학원과 비교 중",
    questions: [
      "무엇을 비교하고 있는지 확인",
      "가격, 거리, 커리큘럼, 취업지원 중 중요 기준 확인",
    ],
    scripts: [
      "네, 당연히 비교해보실 수 있어요. 오히려 처음엔 비교해보시는 게 더 자연스러운 과정이죠.",
      "다만 OOO님처럼 비교 중이신 분들은 기준 없이 보시면 더 헷갈릴 수 있어서, 본인 상황에 맞는 기준부터 잡아보시면 판단이 훨씬 쉬워지세요.",
    ],
    goal: "비교를 망설임이 아닌 기준 정리 단계로 전환",
    nextOptions: [
      { id: "objection_react_compare", label: "비교 중일 때 재반응 멘트" },
      { id: "visit_soft_close", label: "비교 기준 정리 위해 방문 상담" },
      { id: "remote_soft_close", label: "비교 기준 정리 위해 전화 상담" },
      { id: "end_followup", label: "생각할 시간 두고 추후 연락" },
    ],
  },

  objection_family: {
    title: "반박 대응 > 가족/부모님과 상의해야 함",
    questions: [
      "가족이 가장 궁금해할 부분이 무엇인지 확인",
      "비용, 취업, 시간표 중 어떤 설명이 필요한지 확인",
    ],
    scripts: [
      "네, 당연히 중요한 부분이니까 상의해보시는 게 맞습니다.",
      "필요하시면 OOO님이 가족분들께 설명하시기 편하도록 과정 방향이나 비용 구조, 가능한 일정까지 정리해서 안내드릴 수 있어요.",
    ],
    goal: "상의 필요를 이탈이 아닌 보조 설명 단계로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "함께 방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 후 정리 안내" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  objection_busy: {
    title: "반박 대응 > 지금 너무 바쁨",
    questions: ["언제쯤 여유가 생기는지 확인", "지금은 정보만 필요한지 확인"],
    scripts: [
      "네, 지금 바쁘신 상황이면 당장 길게 보시는 건 부담스러우실 수 있어요.",
      "그래서 오히려 짧게라도 방향만 먼저 정리해두시면 나중에 시작하실 때 훨씬 수월해지실 수 있어요.",
    ],
    goal: "바쁨을 완전 이탈이 아닌 짧은 상담 전환으로 연결",
    nextOptions: [
      { id: "objection_react_busy", label: "바쁠 때 재반응 멘트" },
      { id: "remote_soft_close", label: "짧은 전화 상담 제안" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  objection_react_think: {
    title: "재반응 > 생각해보고 연락드릴게요",
    questions: [
      "정말 보류인지, 아직 기준이 없는 상태인지 확인",
      "설명만 들어보는 것에 대한 부담이 큰지 확인",
    ],
    scripts: [
      "네, 충분히 그렇게 말씀 주실 수 있어요. 다만 혼자 생각만 하시다 보면 오히려 뭐가 맞는지 더 헷갈리실 수 있어서요.",
      "부담 없이 한 번만 설명 들어보시고 그다음에 결정하셔도 전혀 늦지 않습니다. 우선 방향만 확인해보시는 쪽으로 보셔도 괜찮아요.",
    ],
    goal: "보류를 완전 종료가 아닌 설명 청취 단계로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "설명만 듣는 방문 상담 제안" },
      { id: "remote_soft_close", label: "설명만 듣는 전화 상담 제안" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  objection_react_busy: {
    title: "재반응 > 지금은 너무 바빠요",
    questions: ["짧은 상담도 부담인지 확인", "편한 시간대가 전혀 없는지 확인"],
    scripts: [
      "맞습니다. 바쁘신데 길게 시간 내시는 것도 쉽지 않으시죠.",
      "그래서 오히려 짧게라도 한번 방향만 정리하고 가시면 이후 고민하시는 시간을 더 줄이실 수 있어요. 편하신 시간대로 최대한 맞춰서 도와드릴게요.",
    ],
    goal: "바쁨을 짧은 맞춤 상담 명분으로 전환",
    nextOptions: [
      { id: "remote_soft_close", label: "짧은 전화 상담 제안" },
      { id: "visit_soft_close", label: "짧은 방문 상담 제안" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  objection_react_compare: {
    title: "재반응 > 다른 데도 알아보고 있어요",
    questions: ["비교 기준이 있는지 확인", "어떤 점이 가장 헷갈리는지 확인"],
    scripts: [
      "네, 비교해보시는 건 정말 좋습니다. 오히려 그렇게 하셔야 더 잘 맞는 선택을 하실 수 있어요.",
      "다만 비교 기준 없이 보시면 더 헷갈릴 수 있어서, 저희 쪽도 한번 들어보시고 기준을 잡아보시는 게 도움이 되실 수 있습니다.",
    ],
    goal: "비교를 이유 없는 보류가 아니라 기준 정리 단계로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "비교 기준 잡는 방문 상담 제안" },
      { id: "remote_soft_close", label: "비교 기준 잡는 전화 상담 제안" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  objection_react_no_visit: {
    title: "재반응 > 방문은 좀 부담스러워요",
    questions: [
      "방문 자체가 부담인지, 거리/시간이 문제인지 확인",
      "설명만 듣는 상담도 부담스러운지 확인",
    ],
    scripts: [
      "충분히 그렇게 느끼실 수 있어요. 그래서 더 부담 없이 오셔서 듣기만 하셔도 되는 자리로 생각해주시면 됩니다.",
      "바로 결정하셔야 하는 분위기가 아니라 현재 상황에 맞는 방향을 확인해보는 상담이라고 보시면 편합니다.",
    ],
    goal: "방문 부담을 결정 압박이 없는 설명 자리로 전환",
    nextOptions: [
      { id: "visit_soft_close", label: "부담 없는 방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담으로 전환" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  objection_distance: {
    title: "반박 대응 > 거리가 멀어요",
    questions: [
      "실제 이동 부담인지, 아직 확신이 없어서인지 확인",
      "비대면 수업 가능 여부나 전화 상담 선호 여부 확인",
    ],
    scripts: [
      "네, 거리도 분명 중요한 부분이죠. 그래서 더더욱 그냥 오시라고 하기보다, OOO님 상황에서 가장 편한 방식으로 안내드리는 게 중요하다고 생각해요.",
      "거리가 많이 있으시면 꼭 내방만 고집하기보다, 먼저 전화상담으로 과정이랑 지원 가능 여부를 정리해드리고 비대면 수업이나 전화상 원서접수 가능한 방향도 같이 확인해드릴 수 있어요.",
    ],
    goal: "거리 부담을 전화상담/비대면 대안으로 전환",
    nextOptions: [
      { id: "objection_react_no_visit", label: "방문 부담 재반응 멘트" },
      { id: "remote_soft_close", label: "📞 전화 상담으로 전환" },
      { id: "remote_class_info", label: "💻 비대면 수업 안내" },
      { id: "remote_apply_info", label: "📝 전화상 원서접수 가능 여부 안내" },
      { id: "objection_delay", label: "그래도 고민해보겠다고 함" },
    ],
  },

  objection_delay: {
    title: "반박 대응 > 좀 더 생각해볼게요",
    questions: ["무엇이 아직 결정 안 된 요소인지 확인", "열어둔 예약 제안"],
    scripts: [
      "네, 당연히 바로 결정하실 필요는 없으세요. 다만 혼자 정보만 보시는 것보다 한 번 정확히 정리받아보시면 판단은 훨씬 쉬워지실 거예요.",
      "부담 없이 상담만 받아보시고 결정하셔도 되니까, 편한 시간 한 번 잡아드릴까요?",
    ],
    goal: "보류를 완전 이탈로 보내지 않기",
    nextOptions: [
      { id: "objection_react_think", label: "생각해본다는 말에 재반응" },
      { id: "visit_reservation", label: "방문 예약 진행" },
      { id: "remote_consult_reservation", label: "전화 상담 예약 진행" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  check_support: {
    title: "확인 단계 > 지원 여부 체크 필요",
    questions: [
      "카드 유무, 취업 상태, 시작 시점 확인",
      "정확한 부담액 확인 니즈 만들기",
    ],
    scripts: [
      "이 부분은 전화상으로 일반적인 설명은 드릴 수 있지만, 정확한 지원 방향이나 실제 부담액은 직접 보면서 확인하거나 상황에 따라 전화로 세부 체크드리는 게 가장 정확합니다.",
      "괜히 추측으로 안내드리는 것보다 OOO님 기준으로 정확히 체크해드리는 게 맞아요.",
    ],
    goal: "상담 필요성 강화",
    nextOptions: [
      { id: "visit_soft_close", label: "방문 상담 제안" },
      { id: "remote_soft_close", label: "전화 상담 제안" },
      { id: "visit_reservation", label: "방문 예약" },
    ],
  },

  visit_soft_close: {
    title: "클로징 > 부드러운 방문 제안",
    questions: [
      "평일/주말 중 어느 쪽이 편한지 질문",
      "부담 없는 짧은 상담임을 강조",
    ],
    scripts: [
      "제가 방문 상담을 권해드리는 이유는 등록을 강요드리려는 게 아니라, OOO님이 어떤 과정부터 시작하셔야 효율적인지, 시간표는 어떻게 맞출 수 있는지, 지원은 어떤 방향이 가능한지를 한 번에 정확히 잡아드리기 위해서예요.",
      "전화로는 큰 방향 안내는 가능하지만, 직접 오시면 과정 차이, 시간표, 비용, 결과물 예시까지 훨씬 구체적으로 비교해보실 수 있어서 판단하시기가 더 편하실 거예요.",
    ],
    goal: "방문을 부담이 아닌 맞춤 확인 기회로 느끼게 만들기",
    nextOptions: [
      { id: "visit_need_basic", label: "왜 방문이 필요한지 더 설명" },
      { id: "visit_need_compare", label: "방문 시 비교 가능한 점 설명" },
      { id: "visit_reservation", label: "🗓️ 방문 예약 확정" },
      { id: "objection_distance", label: "📍 거리가 멀다고 함" },
      { id: "objection_delay", label: "나중에 생각해보겠다고 함" },
      { id: "objection_family", label: "가족과 상의해야 한다고 함" },
    ],
  },

  visit_need_basic: {
    title: "내방 유도 > 왜 방문 상담이 필요한지",
    questions: [
      "전화 안내만으로 충분한지 확인",
      "맞춤 추천이 필요한 상황인지 확인",
    ],
    scripts: [
      "전화로도 기본적인 안내는 가능하지만, 직접 오시면 OOO님 상황에 맞는 과정, 시간표, 비용 부분까지 훨씬 구체적으로 안내드릴 수 있어요.",
      "같은 과정을 문의하셔도 시작 목적이나 현재 상황에 따라 추천 방향이 달라질 수 있어서, 내방에서 조금 더 세밀하게 봐드리는 게 가장 정확합니다.",
    ],
    goal: "내방의 필요성을 자연스럽게 이해시키기",
    nextOptions: [
      { id: "visit_reservation", label: "방문 예약 진행" },
      { id: "objection_distance", label: "거리가 멀다고 함" },
      { id: "objection_delay", label: "좀 더 생각해보겠다고 함" },
    ],
  },

  visit_need_compare: {
    title: "내방 유도 > 방문 시 비교 가능한 점 설명",
    questions: [
      "무엇이 가장 궁금한지 확인",
      "시설/수업방식/결과물 중 어떤 부분이 중요한지 확인",
    ],
    scripts: [
      "전화상담은 간단 안내 위주라면, 내방상담은 과정 차이, 수업 방식, 결과물 예시까지 직접 보시면서 비교할 수 있어서 훨씬 이해가 잘 되실 거예요.",
      "일단 한 번 오셔서 설명만 들어보셔도 괜찮습니다. 바로 결정하시는 자리가 아니라 OOO님께 맞는 방향이 있는지 확인해보시는 정도로 생각하시면 편하세요.",
    ],
    goal: "내방을 부담 없는 비교/확인 자리로 느끼게 만들기",
    nextOptions: [
      { id: "visit_reservation", label: "방문 예약 진행" },
      { id: "objection_distance", label: "거리가 멀다고 함" },
      { id: "objection_delay", label: "좀 더 생각해보겠다고 함" },
      { id: "remote_soft_close", label: "전화 상담으로 먼저 진행" },
    ],
  },

  remote_soft_close: {
    title: "클로징 > 전화 상담 / 비대면 제안",
    questions: [
      "거리가 부담인지, 일정이 부담인지 확인",
      "전화상담 또는 비대면 수업 설명이 필요한지 확인",
    ],
    scripts: [
      "거리나 일정 때문에 방문이 부담되시면 꼭 무리해서 내방하지 않으셔도 괜찮아요. 먼저 전화상담으로 OOO님 상황에 맞는 과정과 가능 방향부터 정리해드릴 수 있어요.",
      "그리고 과정에 따라 비대면 수업이나 전화상 원서접수가 가능한 방향도 있어서, 먼저 편한 방식으로 안내 받아보시는 게 좋습니다.",
    ],
    goal: "내방이 어려운 고객을 전화상담/비대면으로 연결",
    nextOptions: [
      { id: "remote_consult_reservation", label: "📞 전화 상담 예약 확정" },
      { id: "remote_class_info", label: "💻 비대면 수업 안내" },
      { id: "remote_apply_info", label: "📝 전화상 원서접수 안내" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  remote_class_info: {
    title: "안내 > 비대면 수업 가능 여부",
    questions: [
      "희망 과정이 비대면 운영 가능한지 확인",
      "실시간 수업, 온라인 수강, 병행 가능 여부 확인",
    ],
    scripts: [
      "과정에 따라 비대면 수업이나 병행 가능한 방향이 있을 수 있어서, 꼭 거리 때문에 포기하실 필요는 없으세요.",
      "OOO님이 원하시는 과정 기준으로 온라인이나 비대면 진행이 가능한지 먼저 체크해드리고, 가능하면 그 방향으로도 안내 도와드릴 수 있습니다.",
    ],
    goal: "거리 문제를 수업 운영 방식 대안으로 연결",
    nextOptions: [
      { id: "remote_consult_reservation", label: "전화 상담으로 세부 확인" },
      { id: "remote_apply_info", label: "원서접수 가능 여부 확인" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  remote_apply_info: {
    title: "안내 > 전화상 원서접수 가능 여부",
    questions: [
      "희망 과정과 시작 시점 확인",
      "비대면 또는 전화상 접수 가능한지 확인",
    ],
    scripts: [
      "거리가 멀거나 일정상 방문이 어려우신 분들은 과정에 따라 전화상담 후 원서접수 가능한 방향으로 이어드릴 수도 있어요.",
      "다만 이건 과정과 운영 방식에 따라 달라질 수 있어서, 먼저 OOO님 상황과 희망 과정을 확인한 뒤 가장 편한 방식으로 안내드리는 게 정확합니다.",
    ],
    goal: "전화상 접수 가능성으로 이탈 방지",
    nextOptions: [
      { id: "remote_consult_reservation", label: "전화 상담 예약 진행" },
      { id: "end_followup", label: "추후 연락 여지 남기기" },
    ],
  },

  remote_consult_reservation: {
    title: "🎯 최종 단계 > 전화 상담 예약",
    questions: [
      "통화 가능한 시간대 확인",
      "문자 안내 동의 받기",
      "희망 과정 다시 확인",
    ],
    scripts: [
      "그럼 OOO님 편하신 시간으로 전화상담 일정 잡아드릴게요. 짧게라도 OOO님 상황 기준으로 과정, 시간표, 지원 가능 방향까지 정리해드릴 수 있게 준비해두겠습니다.",
      "예약 잡아드리면 문자로 시간 안내드릴게요. 부담 없이 방향만 확인하신다고 생각하시면 됩니다.",
    ],
    goal: "전화상담 예약 확정",
    nextOptions: [
      { id: "end_remote_success", label: "✅ 전화 상담 예약 완료" },
    ],
  },

  visit_reservation: {
    title: "🎯 최종 단계 > 방문 예약 확정",
    questions: [
      "평일/주말 중 편한 방향 확정",
      "구체 시간 2개 제시 후 선택받기",
      "문자 안내 동의 받기",
    ],
    scripts: [
      "그럼 제가 편하게 보실 수 있는 시간으로 잡아드릴게요. 평일 기준으로는 [화/목 2시], [화/목 4시] 정도가 괜찮고요. 주말도 가능하신 시간대로 한 번 맞춰드릴 수 있어요.",
      "예약 잡아드리면 문자로 위치랑 시간 같이 안내드릴게요. 성함 기준으로 예약만 잡아드리는 거라 부담은 없으세요.",
    ],
    goal: "구체 시간 확정 + 노쇼 방지",
    nextOptions: [{ id: "end_success", label: "✅ 예약 완료" }],
  },

  end_success: {
    title: "상담 완료 > 방문 예약 성공",
    questions: ["문자 확인 요청", "방문 전 궁금한 점 있는지 확인"],
    scripts: [
      "감사합니다. 그럼 예약 도와드리고 문자로 위치랑 시간 안내드리겠습니다.",
      "혹시 오시기 전까지 궁금하신 점 생기시면 편하게 답장 주셔도 되고, 제가 방문 때 OOO님 상황 기준으로 한 번에 정리 도와드릴게요.",
    ],
    goal: "예약 확정 후 안심감 주기",
    nextOptions: [{ id: "root", label: "🔄 처음으로" }],
  },

  end_remote_success: {
    title: "상담 완료 > 전화 상담 예약 성공",
    questions: ["문자 확인 요청", "통화 전 준비할 질문 있는지 확인"],
    scripts: [
      "감사합니다. 그럼 전화상담 일정 잡아드리고 문자로 시간 안내드리겠습니다.",
      "통화 전까지 궁금한 부분이 더 생기시면 같이 정리해서 말씀 주셔도 되고, 상담 때 OOO님 상황에 맞춰 한 번에 방향 잡아드릴게요.",
    ],
    goal: "전화상담 예약 확정 후 안심감 주기",
    nextOptions: [{ id: "root", label: "🔄 처음으로" }],
  },

  end_followup: {
    title: "상담 완료 > 추후 연락 여지 남기기",
    questions: ["재연락 시점 정하기", "마지막으로 한 줄 신뢰 멘트"],
    scripts: [
      "네, 좋습니다. 그럼 너무 급하게 결정하시기보단 한 번 더 생각해보시고요. 제가 괜찮으시면 [요일/시간]쯤 다시 한 번 편하게 연락드려도 괜찮을까요?",
      "그때 OOO님 상황 기준으로 더 맞는 방향 있으면 같이 정리 도와드릴게요.",
    ],
    goal: "끊기지 않는 후속 연결",
    nextOptions: [{ id: "root", label: "🔄 처음으로" }],
  },
};

const constantKnowledge = {
  opening_tip: "첫 질문 전에 반드시 '문의 남겨주신 거 맞으실까요?'로 신뢰 확보",
  talk_tip_1:
    "상대가 말한 핵심어를 바로 반복: '아, 국비지원이 가장 궁금하셨군요.'",
  talk_tip_2: "질문 뒤에는 이유를 붙이기: '반 배정이 달라져서 여쭤봐요.'",
  talk_tip_3: "설명 길게 하지 말고 한 번 말한 뒤 멈추기",
  talk_tip_4:
    "방문 유도는 '오세요'보다 '오시면 정확히 체크해드릴 수 있다'로 표현",
  talk_tip_5:
    "거리가 멀면 내방만 고집하지 말고 전화상담 + 비대면 + 전화상 접수 대안 제시",
  support_tip_1:
    "실제 부담액은 개인 상황, 카드 여부, 지원 유형에 따라 달라질 수 있음",
  support_tip_2:
    "국비가 안 된다고 바로 종료하지 말고 다른 가능 방향과 순서를 같이 안내",
  closing_tip:
    "예약은 열린 질문보다 선택형 질문이 강함: '평일/주말 중 어느 쪽이 편하세요?'",
};
