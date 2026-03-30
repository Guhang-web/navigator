export const rootData = {
  root: {
    title: "📞 1단계: 도입 및 첫 응대",
    questions: [
      "성함 확인 및 문의 남긴 내용이 맞는지 확인",
      "지금 통화 가능하신지 먼저 체크",
      "문의 이유가 비용/시간표/국비/취업/실무 중 어디에 가까운지 확인",
    ],
    scripts: [
      "안녕하세요, SBS아카데미컴퓨터아트학원 안산점 OOO멘토입니다. OOO님께서 [문의과정] 관련해서 문의 남겨주셔서 확인차 연락드렸어요. 지금 잠깐 통화 가능하실까요?",
      "감사합니다. 문의 주시는 분들도 보시면 궁금하신 포인트가 조금씩 다 다르시더라고요. 수강료나 시간표를 먼저 보시는 분도 계시고, 국비지원이나 취업 방향부터 확인하시는 분도 있어서요. OOO님은 이번 문의 주신 이유가 어떤 쪽에 가장 가까우세요?",
    ],
    goal: "상대가 내 상황에 맞춰 안내받는다고 느끼게 만들고, 자연스럽게 상담 주도권을 확보하기",
    nextOptions: [
      { id: "purpose_fee", label: "💰 수강료가 가장 궁금함" },
      { id: "purpose_schedule", label: "🕒 시간표가 가장 궁금함" },
      { id: "purpose_support", label: "🏛️ 국비지원/내배카가 가장 궁금함" },
      { id: "purpose_job", label: "🎯 취업/이직 목적" },
      { id: "purpose_skill", label: "📚 실무 보충/자기계발 목적" },
      { id: "purpose_parent", label: "👨‍👩‍👧 학부모/보호자 문의" },
      { id: "purpose_just_ask", label: "🤔 그냥 문의만 해봄 / 아직 고민 중" },
      { id: "objection_busy", label: "📞 지금 통화 어려움 / 추후 연락 희망" },
    ],
  },
};