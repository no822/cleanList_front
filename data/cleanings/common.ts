import {cleaning} from "../types/cleanings";

const commonCleanings: Array<cleaning> = [
    {
        id: 'c1',
        desc: '환기하기',
        difficulty: 'easy',
        priority: 1,
        isDefault: true,
        cleaningTools: [],
        area: 'common'
    },
    {
        id: 'c2',
        desc: '세탁하기',
        difficulty: 'hard',
        priority: 10,
        isDefault: false,
        cleaningTools: [],
        area: 'common'
    },
    {
        id: 'c3',
        desc: '빨래널기',
        difficulty: 'hard',
        priority: 100,
        isDefault: false,
        cleaningTools: [],
        area: 'common'
    },
    {
        id: 'c4',
        desc: '빨래개기',
        difficulty: 'hard',
        priority: 100,
        isDefault: false,
        cleaningTools: [],
        area: 'common'
    },
    {
        id: 'c5',
        desc: '빨래수납',
        difficulty: 'hard',
        priority: 100,
        isDefault: false,
        cleaningTools: [],
        area: 'common'
    },
    {
        id: 'c6',
        desc: '현관바닥청소',
        difficulty: 'hard',
        priority: 100,
        isDefault: false,
        cleaningTools: [],
        area: 'common'
    },
    {
        id: 'c7',
        desc: '쓰레기버리기',
        difficulty: 'hard',
        priority: 100,
        isDefault: false,
        cleaningTools: [],
        area: 'common'
    },
    {
        id: 'c8',
        desc: '분리수거',
        difficulty: 'hard',
        priority: 100,
        isDefault: false,
        cleaningTools: [],
        area: 'common'
    },
    {
        id: 'c9',
        desc: '창문청소',
        difficulty: 'very hard',
        priority: 100,
        isDefault: false,
        cleaningTools: [],
        area: 'common'
    },
];

export default commonCleanings;
