import {cleaning} from "../types/cleanings";

export const bathroomCleanings: Array<cleaning> = [
    {
        id: 'bath1',
        desc: '물뿌리기',
        difficulty: 'easy',
        priority: 20,
        isDefault: true,
        cleaningTools: [],
        area: 'bathroom'
    },
    {
        id: 'bath2',
        desc: '배수구 뜨거운물 붓기',
        difficulty: 'easy',
        priority: 30,
        isDefault: false,
        cleaningTools: ['뜨거운물'],
        area: 'bathroom'
    },
    {
        id: 'bath3',
        desc: '세정제 칠하기',
        difficulty: 'easy',
        priority: 40,
        isDefault: false,
        cleaningTools: ['세정제'],
        area: 'bathroom'
    },
    {
        id: 'bath4',
        desc: '바닥솔질',
        difficulty: 'hard',
        priority: 60,
        isDefault: false,
        cleaningTools: ['청소용솔'],
        area: 'bathroom'
    },
    {
        id: 'bath5',
        desc: '벽면솔질',
        difficulty: 'hard',
        priority: 60,
        isDefault: false,
        cleaningTools: ['청소용솔'],
        area: 'bathroom'
    },
    {
        id: 'bath6',
        desc: '천장청소',
        difficulty: 'very hard',
        priority: 60,
        isDefault: false,
        cleaningTools: ['청소용솔'],
        area: 'bathroom'
    },
    {
        id: 'bath7',
        desc: '변기청소',
        difficulty: 'hard',
        priority: 70,
        isDefault: false,
        cleaningTools: ['세정제', '청소용솔'],
        area: 'bathroom'
    },
    {
        id: 'bath8',
        desc: '세면대청소',
        difficulty: 'very hard',
        priority: 70,
        isDefault: false,
        cleaningTools: ['세정제', '청소용솔'],
        area: 'bathroom'
    },
    {
        id: 'bath9',
        desc: '배수구 청소',
        difficulty: 'very hard',
        priority: 80,
        isDefault: false,
        cleaningTools: ['끓인물', '베이킹소다'],
        area: 'bathroom'
    },
    {
        id: 'bath10',
        desc: '곰팡이 제거',
        difficulty: 'very hard',
        priority: 80,
        isDefault: false,
        cleaningTools: ['곰팡이제거제'],
        area: 'bathroom'
    },
];
