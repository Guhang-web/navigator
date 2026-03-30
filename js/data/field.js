// field.js
export const fieldData = {

  
  field_video: {
    title: "분야 선택 > 영상 / 모션",
    questions: [
      "편집 중심인지, 모션그래픽 중심인지 확인",
      "취미/입문인지, 취업/포트폴리오인지 확인",
    ],
    scripts: [
      "영상 쪽도 방향이 나뉘어서요. 편집 위주로 보시는지, 모션그래픽이나 3D까지 생각하고 계신지 먼저 보면 더 정확하게 안내드릴 수 있어요.",
      "가볍게 시작하시는 건지, 취업이나 포트폴리오까지 목표가 있으신지에 따라 추천 과정이 달라질 수 있어요.",
    ],
    goal: "영상/모션 세부 분기로 연결",
    nextOptions: [
      { id: "video_detail", label: "영상 / 모션 세부 확인" },
      { id: "check_support", label: "국비 / 지원 여부 먼저 확인" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
    ],
  },

  field_web: {
    title: "분야 선택 > 웹 / IT",
    questions: [
      "디자인 중심인지, 코딩 중심인지 확인",
      "처음 시작인지, 이직/실무 활용인지 확인",
    ],
    scripts: [
      "웹도 디자인 쪽으로 보시는지, 코딩 쪽으로 보시는지에 따라 과정 구성이 달라져요.",
      "입문 단계인지, 취업이나 실무 전환이 목표인지 먼저 보면 더 정확하게 안내드릴 수 있어요.",
    ],
    goal: "웹/IT 세부 분기로 연결",
    nextOptions: [
      { id: "web_detail", label: "웹 / IT 세부 확인" },
      { id: "check_support", label: "국비 / 지원 여부 먼저 확인" },
      { id: "remote_soft_close", label: "전화 / 비대면 안내로 이어가기" },
    ],
  },

  field_excel: {
    title: "분야 선택 > 엑셀 / OA",
    questions: [
      "업무 활용인지, 자격/기초 보완인지 확인",
      "현재 사용하는 수준이 어느 정도인지 확인",
    ],
    scripts: [
      "엑셀은 완전 기초부터 시작하시는지, 아니면 현재 업무에서 바로 써야 하는지에 따라 수업 방향이 많이 달라져요.",
      "어떤 용도로 배우시려는지 먼저 확인하면 더 맞는 방향으로 안내드릴 수 있어요.",
    ],
    goal: "엑셀 세부 분기로 연결",
    nextOptions: [
      { id: "excel_detail", label: "엑셀 / OA 세부 확인" },
      { id: "skill_work_use", label: "실무 활용 방향 먼저 보기" },
      { id: "remote_soft_close", label: "전화 / 비대면 안내로 이어가기" },
    ],
  },

  field_ai: {
    title: "분야 선택 > AI 활용",
    questions: [
      "이미지/영상 생성인지, 업무 활용인지 확인",
      "단순 체험인지, 실무 적용인지 확인",
    ],
    scripts: [
      "AI도 이미지 생성, 영상 활용, 업무 자동화처럼 보는 방향이 조금씩 달라요.",
      "가볍게 써보는 수준인지, 실제 업무나 취업까지 연결해서 배우고 싶은지 먼저 보면 좋습니다.",
    ],
    goal: "AI 세부 분기로 연결",
    nextOptions: [
      { id: "ai_detail", label: "AI 세부 확인" },
      { id: "skill_work_use", label: "실무 활용 방향 먼저 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
    ],
  },

  field_visual_edit: {
    title: "분야 선택 > 시각 / 편집디자인",
    questions: [
      "포토샵/일러스트 기초가 필요한지 확인",
      "편집디자인, 브랜딩, 실무 제작 중 무엇이 우선인지 확인",
    ],
    scripts: [
      "시각/편집 쪽은 기초 툴부터 잡는지, 편집디자인이나 브랜딩처럼 결과물 중심으로 가는지에 따라 흐름이 달라져요.",
      "어떤 쪽이 더 필요하신지 확인해서 맞는 과정으로 안내드릴게요.",
    ],
    goal: "시각/편집 세부 분기로 연결",
    nextOptions: [
      { id: "design_edit", label: "시각 / 편집 세부 확인" },
      { id: "job_portfolio", label: "취업 / 포트폴리오 방향 먼저 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
    ],
  },

  field_interior: {
    title: "분야 선택 > 건축 / 인테리어",
    questions: [
      "실내공간 설계인지, 실무 툴(CAD/스케치업) 중심인지 확인",
      "전공/비전공, 취업/이직 여부 확인",
    ],
    scripts: [
      "인테리어 쪽도 공간 설계 감각을 보는지, 아니면 CAD나 스케치업 같은 실무 툴 중심인지에 따라 시작점이 달라져요.",
      "현재 상황에 맞춰서 가장 필요한 쪽부터 안내드릴게요.",
    ],
    goal: "인테리어 세부 분기로 연결",
    nextOptions: [
      { id: "interior_detail", label: "인테리어 세부 확인" },
      { id: "check_support", label: "국비 / 지원 여부 먼저 확인" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
    ],
  },

  field_cg: {
    title: "분야 선택 > CG / 3D",
    questions: [
      "모델링, 애니메이션, 영상/VFX 중 무엇이 목표인지 확인",
      "취미인지 취업/포트폴리오인지 확인",
    ],
    scripts: [
      "CG는 모델링, 애니메이션, 영상용 3D처럼 세부 방향이 나뉘어서 먼저 목표를 확인하는 게 중요해요.",
      "어느 쪽을 생각하고 계신지에 따라 과정 구성이 완전히 달라질 수 있어요.",
    ],
    goal: "CG 세부 분기로 연결",
    nextOptions: [
      { id: "cg_detail", label: "CG / 3D 세부 확인" },
      { id: "job_portfolio", label: "취업 / 포트폴리오 방향 먼저 보기" },
      { id: "visit_soft_close", label: "방문 상담으로 이어가기" },
    ],
  },
};

export default fieldData;