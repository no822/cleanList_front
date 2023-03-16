import {yesOrNo} from "../types/questions";

export const bathroomquestions: Array<yesOrNo> = [
    {cleaningId: 'bath2', text: '간단하게 배수구를 청소할까요?', difficulty: 'easy'},
    {cleaningId: 'bath4', text: '바닥솔질을 하실건가요?', difficulty: 'easy', additionalCleaning: ['bath3']},
    {cleaningId: 'bath5', text: '벽면솔질을 하실건가요?', difficulty: 'easy', additionalCleaning: ['bath3']},
    {cleaningId: 'bath6', text: '천장 청소를 하실건가요?', difficulty: 'very hard', additionalCleaning: ['bath3']},
    {cleaningId: 'bath7', text: '변기를 청소할까요?', difficulty: 'very hard', additionalCleaning: ['bath3']},
    {cleaningId: 'bath8', text: '세면대를 청소하실건가요?', difficulty: 'very hard', additionalCleaning: ['bath3']},
    {cleaningId: 'bath9', text: '배수구를 청소하실건가요?', difficulty: 'very hard'},
    {cleaningId: 'bath10', text: '곰팡이가 많이 슬어있나요?', difficulty: 'very hard'},
];

