// todo: 도면이 있는지 여부에 따라 분기하기
//   (생성된 도면이 없는 경우) 각 구역을 생성한 후 배치해서 집 도면을 설정해주세요. 각 구역은 "침실", "주방", "욕실", "베란다" 타입으로 생성할 수 있습니다.
//   (생성된 도면이 있는 경우) 청소할 구역을 선택해주세요.

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
