// - (생성된 도면이 없는 경우) 각 구역을 생성한 후 배치해서 집 도면을 설정해주세요. 각 구역은 "침실", "주방", "욕실", "베란다" 타입으로 생성할 수 있습니다.
// - (생성된 도면이 있는 경우) 청소할 구역을 선택해주세요.
// - 청소할 구역이 어디인가요? ("침실" | "주방" | "욕실" | "베란다") -> 구역에 맞는 디폴트 "청소" 생성
// - 얼마나 귀찮으세요?? ("엄청 귀찮아.." | "조금 귀찮아.." | "청소좀 해볼까!") -> 난이도 기준으로 필터링, (*질문들도 필터링)
//
// - 계절맞이 청소를 실시할까요? -> yes 선택시 계절청소로 분류된 청소들 필터링
// - 선택하신 ${구역}에 미완료된 청소가 있습니다. 이어서 청소할까요 -> 진행중인 청소리스트 불러오고 질문 종료
// - 청소를 중간에 종료시키는 기능 필요(이 경우 불러오기 동작하지 않음)

import {oneInMore} from "../types/questions";

const preQuestionsData: Array<oneInMore> = [
    {
        target: 'area',
        text: '청소할 구역이 어디인가요?',
        options: ['침실', '욕실', '주방', '베란다'],
        values: ['bedroom', 'bathroom', 'kitchen', 'veranda'],
        difficulty: 'easy',
        area: 'pre'
    },
    {
        target: 'difficulty',
        text: '얼마나 귀찮으세요?',
        options: ['열심히 청소좀 해볼까!', '조금 귀찮은데요?', '엄청 귀찮아요..'],
        values: ['very hard', 'hard', 'easy'],
        difficulty: 'easy',
        area: 'pre'
    },
];

export default preQuestionsData;
