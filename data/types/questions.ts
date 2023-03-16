import {difficulty} from "./cleanings";

type basicQuestion = {
    text: string,
    difficulty: difficulty
};

// 특정 청소를 추가하는 질문
// if (answer) 일때 cleaningId인 청소를 추가
export type yesOrNo = basicQuestion & {
    cleaningId: string;
    answer?: boolean; // 해당 청소를 추가할 것인지 여부
    additionalCleaning?: Array<string>;
};

// 청소 영역을 선택(= 청소영역을 기준으로 필터링), 난이도 설정(=난이도를 기준으로 필터링)
// target 필드의 값이 answer 이 같은 청소를 추가
export type oneInMore = basicQuestion & {
    target: 'area' | 'difficulty';
    answer?: string; // 청소영역이나 난이도
    options: Array<string>;
    values: Array<string>;
};

// 청소도구 선택(= 해당 청소도구와 연관된 청소들만 필터링)
// cleaningTools에 answer에 있는 값들이 있는 청소들을 추가
export type moreInMore = basicQuestion & {
    answer?: Array<string>; // 청소도구들
};


