// courseDetail.js (1/2)
export const courseDetailData = {
  video_detail: {
    title: "영상 / 모션 > 세부 방향 확인",
    questions: [
      "편집 중심인지, 모션그래픽/3D까지 원하는지 확인",
      "유튜브 콘텐츠 제작인지, 취업용 포트폴리오인지 확인",
    ],
    scripts: [
      "영상 쪽도 단순 편집, 유튜브 콘텐츠 제작, 모션그래픽, 3D 활용까지 방향이 나뉘어요.",
      "어떤 결과물을 만들고 싶은지 기준으로 보면 더 정확하게 안내드릴 수 있어요.",
    ],
    goal: "영상/모션 목적에 맞는 세부 노드로 분기",
    nextOptions: [
      { id: "video_youtube", label: "유튜브 / 쇼츠 편집 목적" },
      { id: "video_motion", label: "모션그래픽 중심" },
      { id: "video_c4d", label: "3D 모션 / 시포디까지 관심" },
    ],
  },

  video_youtube: {
    title: "영상 / 모션 > 유튜브 / 쇼츠 편집",
    questions: [
      "채널 운영용인지, 개인 콘텐츠 제작인지 확인",
      "프리미어 위주로 빠르게 결과물을 만들고 싶은지 확인",
    ],
    scripts: [
      "유튜브나 쇼츠는 일단 편집 속도와 완성도가 중요해서 프리미어 기반으로 결과물을 빨리 만들 수 있게 가는 게 좋아요.",
      "필요하면 자막, 썸네일, 짧은 모션 요소까지 같이 연결해서 실전형으로 보실 수 있어요.",
    ],
    goal: "편집 실무/콘텐츠 제작 방향으로 연결",
    nextOptions: [
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
      { id: "remote_soft_close", label: "비대면 안내로 이어가기" },
    ],
  },

  video_motion: {
    title: "영상 / 모션 > 모션그래픽 중심",
    questions: [
      "애프터이펙트 중심 결과물을 원하는지 확인",
      "광고/브랜드 영상 같은 포트폴리오 목적이 있는지 확인",
    ],
    scripts: [
      "모션그래픽은 단순 편집보다 움직임과 연출이 핵심이라 애프터이펙트 중심으로 가는 경우가 많아요.",
      "취업까지 생각하시면 결과물 중심 포트폴리오가 중요해서 과정 구성을 그 기준으로 잡는 게 좋아요.",
    ],
    goal: "모션그래픽 포트폴리오/취업 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
      { id: "end_followup", label: "추후 연락 마무리" },
    ],
  },

  video_c4d: {
    title: "영상 / 모션 > 3D 모션 / C4D 관심",
    questions: [
      "시포디까지 포함한 3D 모션을 원하는지 확인",
      "기초 디자인 툴 경험이 있는지 확인",
    ],
    scripts: [
      "3D 모션까지 생각하시면 편집만이 아니라 시포디 같은 3D 툴까지 연결해서 보는 게 좋아요.",
      "이 경우엔 단순 체험보다 포트폴리오나 취업 방향까지 같이 설계하는 편이 훨씬 효율적이에요.",
    ],
    goal: "3D 모션 취업/포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
      { id: "check_support", label: "국비 / 지원 여부 확인" },
    ],
  },

  excel_detail: {
    title: "엑셀 / OA > 세부 방향 확인",
    questions: [
      "완전 기초인지, 업무 활용인지 확인",
      "함수/문서정리인지, 데이터 정리/보고서 작성인지 확인",
    ],
    scripts: [
      "엑셀은 처음 배우시는 분과 업무에서 바로 써야 하는 분의 수업 방향이 달라요.",
      "현재 필요한 수준을 먼저 확인하면 더 정확하게 맞출 수 있어요.",
    ],
    goal: "엑셀 목적에 맞는 세부 노드로 분기",
    nextOptions: [
      { id: "excel_basic", label: "완전 기초부터 필요" },
      { id: "excel_job", label: "업무 활용이 우선" },
      { id: "excel_data", label: "정리 / 보고 / 데이터 활용" },
    ],
  },

  excel_basic: {
    title: "엑셀 / OA > 완전 기초",
    questions: [
      "컴퓨터 활용 자체가 익숙한지 확인",
      "문서 작성, 표 정리, 기본 함수가 목표인지 확인",
    ],
    scripts: [
      "완전 처음이시면 어려운 기능보다 기본 입력, 표 정리, 꼭 쓰는 함수부터 잡는 게 훨씬 빨라요.",
      "기초가 잡히면 이후 실무 활용도 훨씬 수월해집니다.",
    ],
    goal: "입문자에게 맞는 시작 흐름 연결",
    nextOptions: [
      { id: "job_beginner", label: "입문자 시작 방향 보기" },
      { id: "remote_soft_close", label: "비대면 안내로 이어가기" },
      { id: "end_followup", label: "추후 연락 마무리" },
    ],
  },

  excel_job: {
    title: "엑셀 / OA > 업무 활용 우선",
    questions: [
      "현재 어떤 업무에서 엑셀이 필요한지 확인",
      "보고서/정리/계산/관리 중 무엇이 가장 급한지 확인",
    ],
    scripts: [
      "업무용 엑셀은 시험 대비보다 실제로 자주 쓰는 기능을 바로 적용할 수 있게 배우는 게 중요해요.",
      "현재 업무에서 막히는 부분 기준으로 잡으면 훨씬 효율적으로 배우실 수 있어요.",
    ],
    goal: "업무 활용 중심 흐름으로 연결",
    nextOptions: [
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
      { id: "check_support", label: "국비 / 지원 여부 확인" },
    ],
  },

  excel_data: {
    title: "엑셀 / OA > 데이터 정리 / 보고 활용",
    questions: [
      "보고서 정리, 매출/학생관리, 데이터 정리 중 무엇이 필요한지 확인",
      "지금 당장 실무에 써야 하는 상황인지 확인",
    ],
    scripts: [
      "정리와 보고 쪽이 목적이면 함수만 배우는 것보다 실제 문서 구조를 다루는 방식으로 가는 게 더 도움이 돼요.",
      "실무 적용이 급하면 현재 사용 환경에 맞춰 보는 게 가장 정확합니다.",
    ],
    goal: "실무형 엑셀 활용 흐름으로 연결",
    nextOptions: [
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "remote_soft_close", label: "비대면 안내로 이어가기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
    ],
  },

  ai_detail: {
    title: "AI 활용 > 세부 방향 확인",
    questions: [
      "이미지 생성, 영상 활용, 업무 활용 중 무엇이 목표인지 확인",
      "가볍게 써보고 싶은지, 실무 적용까지 원하는지 확인",
    ],
    scripts: [
      "AI도 이미지 생성, 영상 제작, 문서/업무 활용처럼 방향이 나뉘어서 목표에 따라 과정이 달라져요.",
      "단순 체험인지 실제 활용인지에 따라 안내 방향을 맞춰드릴 수 있어요.",
    ],
    goal: "AI 목적에 맞는 세부 노드로 분기",
    nextOptions: [
      { id: "ai_prompt", label: "AI 기초 / 프롬프트 활용" },
      { id: "ai_image", label: "이미지 제작 중심" },
      { id: "ai_video", label: "영상 / 콘텐츠 활용 중심" },
    ],
  },

  ai_prompt: {
    title: "AI 활용 > 기초 / 프롬프트 활용",
    questions: [
      "처음 써보는 단계인지 확인",
      "업무 보조, 자료 정리, 아이디어 확장이 필요한지 확인",
    ],
    scripts: [
      "AI를 처음 접하시면 툴 하나만 배우는 것보다 어떻게 질문하고 결과를 뽑아내는지부터 잡는 게 중요해요.",
      "이 부분이 잡히면 여러 툴을 써도 훨씬 빠르게 응용하실 수 있어요.",
    ],
    goal: "AI 입문/활용 기초 흐름으로 연결",
    nextOptions: [
      { id: "job_beginner", label: "입문자 시작 방향 보기" },
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "remote_soft_close", label: "비대면 안내로 이어가기" },
    ],
  },

  ai_image: {
    title: "AI 활용 > 이미지 제작 중심",
    questions: [
      "홍보물, 디자인 시안, 콘텐츠 제작 용도인지 확인",
      "기존 디자인 툴과 같이 쓰려는지 확인",
    ],
    scripts: [
      "AI 이미지 쪽은 단순 생성보다 실제 홍보물이나 시안 작업에 어떻게 연결하는지가 중요해요.",
      "디자인 툴과 같이 쓰면 훨씬 실무적으로 활용하실 수 있어요.",
    ],
    goal: "AI 이미지 실무/디자인 활용 흐름으로 연결",
    nextOptions: [
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
      { id: "end_followup", label: "추후 연락 마무리" },
    ],
  },

  ai_video: {
    title: "AI 활용 > 영상 / 콘텐츠 활용",
    questions: [
      "유튜브/쇼츠/홍보영상에 쓰려는지 확인",
      "영상 편집 경험이 있는지 확인",
    ],
    scripts: [
      "AI 영상 활용은 결과물만 보는 것보다 기존 편집 과정에 어떻게 붙는지를 같이 보는 게 중요해요.",
      "콘텐츠 제작 목적이면 편집 흐름과 연결해서 보셔야 훨씬 활용도가 높아요.",
    ],
    goal: "AI 영상/콘텐츠 활용 흐름으로 연결",
    nextOptions: [
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
      { id: "job_change", label: "직무 전환 방향 보기" },
    ],
  },

  web_detail: {
    title: "웹 / IT > 세부 방향 확인",
    questions: [
      "웹디자인인지, 퍼블리싱인지, 프론트엔드/백엔드/풀스택 개발인지 확인",
      "취업/이직 목적 여부 확인",
    ],
    scripts: [
      "웹도 디자인 중심인지, 개발 중심인지에 따라 배우는 내용이 달라져요.",
      "개발 쪽도 프론트엔드, 백엔드, 풀스택처럼 방향이 나뉘어서 목표에 맞춰 준비 방식이 달라질 수 있어요.",
    ],
    goal: "웹/IT 목적에 맞는 세부 노드로 분기",
    nextOptions: [
      { id: "web_design", label: "웹디자인 중심" },
      { id: "web_publishing", label: "퍼블리싱 중심" },
      { id: "web_frontend", label: "프론트엔드 개발 중심" },
      { id: "web_backend", label: "백엔드 개발 중심" },
      { id: "web_fullstack", label: "풀스택 개발 중심" },
    ],
  },

  web_design: {
    title: "웹 / IT > 웹디자인 중심",
    questions: [
      "디자인 툴 위주인지, 웹 결과물 제작까지 원하는지 확인",
      "포트폴리오 제작이 필요한지 확인",
    ],
    scripts: [
      "웹디자인은 단순 툴 사용보다 실제 화면 구성을 만들 수 있어야 해서 결과물 중심으로 보는 게 좋아요.",
      "취업 목적이면 포트폴리오 흐름까지 같이 보는 게 중요합니다.",
    ],
    goal: "웹디자인 포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
      { id: "check_support", label: "국비 / 지원 여부 확인" },
    ],
  },

  web_publishing: {
    title: "웹 / IT > 퍼블리싱 중심",
    questions: [
      "HTML/CSS/JS 중심으로 배우고 싶은지 확인",
      "디자인 시안을 코드로 구현하는 게 목표인지 확인",
    ],
    scripts: [
      "퍼블리싱은 화면을 실제 웹으로 구현하는 역할이라 구조와 마크업, 스타일링 흐름을 제대로 잡는 게 중요해요.",
      "기초를 정확히 잡으면 이후 프론트엔드로 확장하기도 훨씬 수월합니다.",
    ],
    goal: "웹 퍼블리싱 실무/입문 흐름으로 연결",
    nextOptions: [
      { id: "job_beginner", label: "입문자 시작 방향 보기" },
      { id: "job_change", label: "직무 전환 방향 보기" },
      { id: "remote_soft_close", label: "비대면 안내로 이어가기" },
    ],
  },

  web_frontend: {
    title: "웹 / IT > 프론트엔드 개발 중심",
    questions: [
      "자바스크립트/리액트 등 개발 중심 목표인지 확인",
      "취업/이직을 목표로 포트폴리오가 필요한지 확인",
    ],
    scripts: [
      "프론트엔드는 단순 웹 제작보다 실제 동작하는 화면을 만드는 개발 영역이라 구조적으로 배우는 게 중요해요.",
      "취업까지 생각하시면 기술 학습과 포트폴리오를 같이 보는 방향이 좋습니다.",
    ],
    goal: "프론트엔드 취업/이직 흐름으로 연결",
    nextOptions: [
      { id: "job_change", label: "직무 전환 방향 보기" },
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
    ],
  },

  web_backend: {
    title: "웹 / IT > 백엔드 개발 중심",
    questions: [
      "서버, 데이터베이스, API 개발 쪽에 관심이 있는지 확인",
      "비전공 입문인지, 개발 경험이 조금 있는지 확인",
    ],
    scripts: [
      "백엔드는 화면보다 서버 구조, 데이터 처리, API 흐름을 다루는 개발 영역이라 논리적인 구조 이해가 중요해요.",
      "처음 시작하셔도 가능하지만, 목적이 취업인지 실무 확장인지에 따라 준비 방향은 다르게 잡는 게 좋아요.",
    ],
    goal: "백엔드 개발 취업/이직 흐름으로 연결",
    nextOptions: [
      { id: "job_beginner", label: "입문자 시작 방향 보기" },
      { id: "job_change", label: "직무 전환 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
    ],
  },

  web_fullstack: {
    title: "웹 / IT > 풀스택 개발 중심",
    questions: [
      "프론트엔드와 백엔드를 모두 다루는 방향을 원하는지 확인",
      "빠른 취업보다 폭넓은 개발 역량 확보가 목표인지 확인",
    ],
    scripts: [
      "풀스택은 화면과 서버를 함께 다루는 방향이라 범위가 넓은 대신 전체 구조를 이해하기 좋다는 장점이 있어요.",
      "다만 배워야 할 범위가 넓어서 현재 수준과 목표를 기준으로 학습 흐름을 설계하는 게 중요합니다.",
    ],
    goal: "풀스택 개발 취업/포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_beginner", label: "입문자 시작 방향 보기" },
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
    ],
  },

  design_edit: {
    title: "시각 / 편집디자인 > 세부 방향 확인",
    questions: [
      "포토샵/일러스트 기초가 필요한지 확인",
      "편집디자인, 브랜딩, 실무 제작 중 우선순위 확인",
    ],
    scripts: [
      "시각/편집은 기초 툴부터 잡는지, 결과물 중심으로 가는지에 따라 시작점이 달라져요.",
      "어떤 방향이 더 필요한지에 따라 과정 흐름을 맞춰드릴 수 있어요.",
    ],
    goal: "시각/편집 목적에 맞는 세부 노드로 분기",
    nextOptions: [
      { id: "design_edit_basic", label: "기초 툴부터 필요" },
      { id: "design_edit_print", label: "편집 / 인쇄물 중심" },
      { id: "design_edit_branding", label: "브랜딩 / 포트폴리오 중심" },
    ],
  },

  design_edit_basic: {
    title: "시각 / 편집디자인 > 기초 툴부터 필요",
    questions: [
      "디자인을 처음 시작하는지 확인",
      "포토샵/일러스트 기본기를 우선으로 원하는지 확인",
    ],
    scripts: [
      "처음 시작하시면 결과물 욕심보다 포토샵, 일러스트 기본기를 먼저 잡는 게 훨씬 중요해요.",
      "기초가 잡혀야 이후 편집디자인이나 브랜딩 결과물도 제대로 만들 수 있어요.",
    ],
    goal: "디자인 입문 흐름으로 연결",
    nextOptions: [
      { id: "job_beginner", label: "입문자 시작 방향 보기" },
      { id: "remote_soft_close", label: "비대면 안내로 이어가기" },
      { id: "end_followup", label: "추후 연락 마무리" },
    ],
  },

  design_edit_print: {
    title: "시각 / 편집디자인 > 편집 / 인쇄물 중심",
    questions: [
      "포스터, 브로슈어, 카드뉴스 같은 편집물이 목표인지 확인",
      "실무 제작 경험이 필요한지 확인",
    ],
    scripts: [
      "편집디자인은 예쁜 작업보다 정보 정리와 전달력이 중요해서 실무형 결과물을 기준으로 배우는 게 좋아요.",
      "실제 제작물이 필요한 분들께는 이 방향이 훨씬 맞습니다.",
    ],
    goal: "편집디자인 실무 흐름으로 연결",
    nextOptions: [
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
      { id: "check_support", label: "국비 / 지원 여부 확인" },
    ],
  },

  design_edit_branding: {
    title: "시각 / 편집디자인 > 브랜딩 / 포트폴리오 중심",
    questions: [
      "브랜드 결과물이나 취업용 포트폴리오가 필요한지 확인",
      "기초 툴 경험이 어느 정도 있는지 확인",
    ],
    scripts: [
      "브랜딩 쪽은 단순 툴 사용보다 기획 의도와 결과물 완성도를 같이 보여주는 게 중요해요.",
      "취업이나 포트폴리오가 목표라면 결과물 중심으로 준비하는 방향이 맞아요.",
    ],
    goal: "브랜딩 포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
      { id: "end_followup", label: "추후 연락 마무리" },
    ],
  },

  // courseDetail.js (2/2)
  interior_detail: {
    title: "건축 / 인테리어 > 세부 방향 확인",
    questions: [
      "공간 설계, CAD/스케치업, 3ds Max, 포트폴리오 중 무엇이 목표인지 확인",
      "비전공 입문인지, 취업/이직 목표인지 확인",
    ],
    scripts: [
      "인테리어는 감각만 보는 게 아니라 공간 이해, 설계 표현, 실무 툴 활용이 같이 들어가요.",
      "현재 상황에 맞춰 가장 필요한 시작점을 먼저 잡는 게 중요해요.",
    ],
    goal: "인테리어 목적에 맞는 세부 노드로 분기",
    nextOptions: [
      { id: "interior_detail_space", label: "공간 / 실내디자인 기초" },
      { id: "interior_detail_cad", label: "CAD / 스케치업 실무툴" },
      { id: "interior_detail_3dmax", label: "3ds Max 공간 표현 / 모델링" },
      { id: "interior_detail_portfolio", label: "취업 / 포트폴리오 중심" },
    ],
  },

  interior_detail_space: {
    title: "건축 / 인테리어 > 공간 / 실내디자인 기초",
    questions: [
      "전공이 없는 입문자인지 확인",
      "공간 구성 감각과 기초 표현이 필요한지 확인",
    ],
    scripts: [
      "비전공으로 시작하시면 바로 실무 툴보다 공간 보는 기준과 기본 표현부터 잡는 게 더 중요해요.",
      "이 부분이 잡혀야 이후 CAD나 스케치업도 훨씬 잘 들어옵니다.",
    ],
    goal: "인테리어 입문 흐름으로 연결",
    nextOptions: [
      { id: "job_beginner", label: "입문자 시작 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
      { id: "check_support", label: "국비 / 지원 여부 확인" },
    ],
  },

  interior_detail_cad: {
    title: "건축 / 인테리어 > CAD / 스케치업 실무툴",
    questions: [
      "도면 작업이나 실무 툴 활용이 급한지 확인",
      "업무 보완인지 취업 준비인지 확인",
    ],
    scripts: [
      "CAD나 스케치업은 실무에서 바로 쓰는 경우가 많아서 현재 필요한 용도에 맞춰 배우는 게 가장 중요해요.",
      "특히 업무 보완이나 이직 준비라면 툴 활용 중심으로 보시는 게 효율적이에요.",
    ],
    goal: "인테리어 실무 툴 활용 흐름으로 연결",
    nextOptions: [
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "job_change", label: "직무 전환 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
    ],
  },

  interior_detail_3dmax: {
    title: "건축 / 인테리어 > 3ds Max 공간 표현 / 모델링",
    questions: [
      "실내 투시도, 공간 연출, 3D 결과물 제작이 필요한지 확인",
      "인테리어 취업용 결과물이나 포트폴리오 목적이 있는지 확인",
    ],
    scripts: [
      "3ds Max는 인테리어에서 공간을 입체적으로 표현하고 결과물 완성도를 높이는 데 많이 활용되는 툴이에요.",
      "단순 툴 사용보다 실제 공간 연출과 결과물 제작까지 연결해서 보는 게 훨씬 중요합니다.",
    ],
    goal: "인테리어 3D 결과물/포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
    ],
  },

  interior_detail_portfolio: {
    title: "건축 / 인테리어 > 취업 / 포트폴리오 중심",
    questions: [
      "취업 또는 이직 목표가 명확한지 확인",
      "현재 툴 경험이나 작업물이 있는지 확인",
    ],
    scripts: [
      "취업 목적이면 단순 툴 학습보다 결과물 완성도와 포트폴리오 구성이 훨씬 중요해요.",
      "현재 수준에 맞춰 필요한 과목 흐름을 잡는 게 가장 정확합니다.",
    ],
    goal: "인테리어 취업/포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "job_change", label: "직무 전환 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
    ],
  },

  cg_detail: {
    title: "CG / 3D > 세부 방향 확인",
    questions: [
      "모델링, 애니메이션, 영상/VFX 중 어떤 목표인지 확인",
      "취미인지 취업/포트폴리오인지 확인",
    ],
    scripts: [
      "CG는 같은 3D라도 모델링, 애니메이션, 영상 활용 쪽이 전부 달라서 목표를 먼저 확인하는 게 중요해요.",
      "어떤 결과물을 원하시는지 기준으로 잡으면 훨씬 정확합니다.",
    ],
    goal: "CG 목적에 맞는 세부 노드로 분기",
    nextOptions: [
      { id: "cg_detail_modeling", label: "3D 모델링 중심" },
      { id: "cg_detail_animation", label: "애니메이션 중심" },
      { id: "cg_detail_vfx", label: "영상 / VFX 활용 중심" },
    ],
  },

  cg_detail_modeling: {
    title: "CG / 3D > 3D 모델링 중심",
    questions: [
      "기초 모델링부터 시작할지, MAYA 기반으로 깊게 갈지 확인",
      "오브젝트 제작, 캐릭터/배경 제작 중 무엇에 더 관심이 있는지 확인",
    ],
    scripts: [
      "3D 모델링은 처음에는 형태를 만드는 기본기가 중요하고, 이후 목표에 따라 툴과 방향이 더 세분화돼요.",
      "특히 MAYA는 모델링뿐 아니라 애니메이션 쪽까지 확장되는 경우가 많아서 목적에 맞게 보는 게 중요해요.",
    ],
    goal: "3D 모델링 세부 방향으로 연결",
    nextOptions: [
      { id: "cg_modeling_basic", label: "모델링 기초 / 입문 중심" },
      { id: "cg_modeling_maya", label: "MAYA 중심으로 배우기" },
    ],
  },

  cg_modeling_basic: {
    title: "CG / 3D > 모델링 기초 / 입문 중심",
    questions: [
      "툴 입문이 필요한지 확인",
      "오브젝트 제작, 배경 제작 같은 기본 모델링이 목표인지 확인",
    ],
    scripts: [
      "모델링 입문은 형태를 만드는 기본기와 툴 조작 흐름을 같이 잡는 게 중요해요.",
      "기초가 잡히면 이후 애니메이션이나 영상 활용 방향으로도 충분히 넓혀갈 수 있어요.",
    ],
    goal: "3D 모델링 입문/활용 흐름으로 연결",
    nextOptions: [
      { id: "job_beginner", label: "입문자 시작 방향 보기" },
      { id: "skill_work_use", label: "실무 활용 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
    ],
  },

  cg_modeling_maya: {
    title: "CG / 3D > MAYA 중심으로 배우기",
    questions: [
      "MAYA 기반 모델링/애니메이션 쪽 취업 목표가 있는지 확인",
      "포트폴리오 제작까지 생각하고 있는지 확인",
    ],
    scripts: [
      "MAYA는 CG 분야에서 모델링과 애니메이션 쪽으로 많이 연결되는 핵심 툴 중 하나라서, 취업 방향과 함께 보는 경우가 많아요.",
      "단순히 툴만 배우기보다 결과물과 포트폴리오까지 연결해서 준비하는 게 훨씬 유리합니다.",
    ],
    goal: "MAYA 기반 취업/포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "job_change", label: "직무 전환 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
    ],
  },

  cg_detail_animation: {
    title: "CG / 3D > 애니메이션 중심",
    questions: [
      "캐릭터/모션 작업에 관심이 있는지 확인",
      "취업용 포트폴리오 목표가 있는지 확인",
    ],
    scripts: [
      "3D 애니메이션은 툴만 다루는 것보다 움직임 이해와 결과물 연출이 중요해요.",
      "취업까지 생각하시면 포트폴리오 중심으로 준비하는 게 훨씬 중요합니다.",
    ],
    goal: "3D 애니메이션 포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "visit_reservation", label: "방문 예약 진행" },
      { id: "end_followup", label: "추후 연락 마무리" },
    ],
  },

  cg_detail_vfx: {
    title: "CG / 3D > 영상 / VFX 활용 중심",
    questions: [
      "영상 합성, 3D 활용 영상 제작이 목표인지 확인",
      "모션그래픽과 함께 보고 싶은지 확인",
    ],
    scripts: [
      "영상용 3D나 VFX는 단순 모델링보다 실제 영상 결과물에 어떻게 붙는지가 중요해요.",
      "이 방향은 취업이나 실무 포트폴리오와 연결해서 보는 게 훨씬 좋습니다.",
    ],
    goal: "영상/3D 실무 포트폴리오 흐름으로 연결",
    nextOptions: [
      { id: "job_portfolio", label: "포트폴리오 방향 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
      { id: "job_change", label: "직무 전환 방향 보기" },
    ],
  },
};

export default courseDetailData;
