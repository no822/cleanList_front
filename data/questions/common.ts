import {yesOrNo} from "../types/questions";

export const commonQuestions: Array<yesOrNo> = [
    {cleaningId: 'c2', text: '세탁할 빨래가 있습니까?', additionalCleaning: ['c3', 'c4', 'c5'], difficulty: 'hard' },
    {cleaningId: 'c3', text: '세탁이 끝난 빨래가 있습니까?', additionalCleaning: ['c4', 'c5'], difficulty: 'hard'},
    {cleaningId: 'c4', text: '다 마른 빨래가 있습니까?', additionalCleaning: ['c5'], difficulty: 'hard'},
    {cleaningId: 'c6', text: '오랜만에 현관바닥 청소를 할까요?', difficulty: 'hard' },
    {cleaningId: 'c7', text: '청소 후 버려야할 쓰레기가 있습니까?', difficulty: 'hard'},
    {cleaningId: 'c8', text: '오늘이 분리수거 날인가요?', difficulty: 'hard'},
    {cleaningId: 'c9', text: '창문이 더러운가요?', difficulty: 'very hard'},
];

