import { rootData } from "./root.js";
import { purposeData } from "./purpose.js";
import { fieldData } from "./field.js";
import { detailData } from "./detail.js";
import { objectionData } from "./objection.js";
import { actionData } from "./action.js";
import { courseDetailData } from "./courseDetail.js";

import { recontactRootData } from "./recontactRoot.js";
import { recontactPurposeData } from "./recontactPurpose.js";
import { recontactObjectionData } from "./recontactObjection.js";
import { recontactActionData } from "./recontactAction.js";

export const callData = {
  ...rootData,
  ...purposeData,
  ...fieldData,
  ...detailData,
  ...courseDetailData,
  ...objectionData,
  ...actionData,

   ...recontactRootData,
  ...recontactPurposeData,
  ...recontactObjectionData,
  ...recontactActionData,
};

export const constantKnowledge = {
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
