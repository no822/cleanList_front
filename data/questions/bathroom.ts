import {yesOrNo} from "../types/questions";

const bathroomquestionsData: Array<yesOrNo> = [
    {cleaningId: 'bath2', text: '간단하게 배수구를 청소할까요?', difficulty: 'easy', area: 'bathroom'},
    {cleaningId: 'bath4', text: '바닥솔질을 하실건가요?', difficulty: 'easy', additionalCleaning: ['bath3'], area: 'bathroom'},
    {cleaningId: 'bath5', text: '벽면솔질을 하실건가요?', difficulty: 'easy', additionalCleaning: ['bath3'], area: 'bathroom'},
    {cleaningId: 'bath6', text: '천장 청소를 하실건가요?', difficulty: 'very hard', additionalCleaning: ['bath3'], area: 'bathroom'},
    {cleaningId: 'bath7', text: '변기를 청소할까요?', difficulty: 'very hard', additionalCleaning: ['bath3'], area: 'bathroom'},
    {cleaningId: 'bath8', text: '세면대를 청소하실건가요?', difficulty: 'very hard', additionalCleaning: ['bath3'], area: 'bathroom'},
    {cleaningId: 'bath9', text: '배수구를 청소하실건가요?', difficulty: 'very hard', area: 'bathroom'},
    {cleaningId: 'bath10', text: '곰팡이가 많이 슬어있나요?', difficulty: 'very hard', area: 'bathroom'},
];

export default bathroomquestionsData;

