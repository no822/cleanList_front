import {cleaning} from "../types/cleanings";

const bedroomCleanings: Array<cleaning> = [
    {
        id: 'bed1',
        desc: '이불개기',
        difficulty: 'easy',
        priority: 20,
        isDefault: true,
        cleaningTools: [],
        area: 'bedroom'
    },
    {
        id: 'bed2',
        desc: '먼지털기',
        difficulty: 'easy',
        priority: 30,
        isDefault: false,
        cleaningTools: [],
        area: 'bedroom'
    },
    {
        id: 'bed3',
        desc: '옷정리',
        difficulty: 'easy',
        priority: 70,
        isDefault: false,
        cleaningTools: [],
        area: 'bedroom'
    },
    {
        id: 'bed4',
        desc: '물건정리',
        difficulty: 'hard',
        priority: 20,
        isDefault: false,
        cleaningTools: [],
        area: 'bedroom'
    },
    {
        id: 'bed5',
        desc: '이불털기',
        difficulty: 'hard',
        priority: 20,
        isDefault: false,
        cleaningTools: [],
        area: 'bedroom'
    },
    {
        id: 'bed6',
        desc: '청소기 또는 바닥쓸기',
        difficulty: 'easy',
        priority: 50,
        isDefault: false,
        cleaningTools: ['청소기 또는 빗자루'],
        area: 'bedroom'
    },
    {
        id: 'bed7',
        desc: '바닥닦기',
        difficulty: 'hard',
        priority: 60,
        isDefault: false,
        cleaningTools: ['걸레 또는 물청소포'],
        area: 'bedroom'
    },
    {
        id: 'bed8',
        desc: '높은곳 먼지털기',
        difficulty: 'very hard',
        priority: 30,
        isDefault: false,
        cleaningTools: [],
        area: 'bedroom'
    },
    {
        id: 'bed9',
        desc: '침대, 이불커버 세탁',
        difficulty: 'very hard',
        priority: 40,
        isDefault: false,
        cleaningTools: [],
        area: 'bedroom'
    },
    {
        id: 'bed10',
        desc: '구석진 곳 청소',
        difficulty: 'very hard',
        priority: 40,
        isDefault: false,
        cleaningTools: ['빗자루 또는 청소기', '물걸레 또는 청소포'],
        area: 'bedroom'
    },
];


export default bedroomCleanings;
