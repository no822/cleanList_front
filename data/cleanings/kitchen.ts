import {cleaning} from "../types/cleanings";

const kitchenCleanings: Array<cleaning> = [
    {
        id: 'kitchen1',
        desc: '설거지',
        difficulty: 'easy',
        priority: 20,
        isDefault: false,
        cleaningTools: ['주방세제'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen2',
        desc: '수세미열탕소독',
        difficulty: 'easy',
        priority: 21,
        isDefault: false,
        cleaningTools: ['뜨거운물'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen3',
        desc: '싱크대청소',
        difficulty: 'easy',
        priority: 30,
        isDefault: false,
        cleaningTools: ['베이킹소다'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen4',
        desc: '바닥쓸기',
        difficulty: 'easy',
        priority: 50,
        isDefault: false,
        cleaningTools: ['빗자루 또는 청소기'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen5',
        desc: '바닥닦기',
        difficulty: 'hard',
        priority: 60,
        isDefault: false,
        cleaningTools: ['물걸레 또는 청소포'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen6',
        desc: '전자레인지 청소',
        difficulty: 'hard',
        priority: 70,
        isDefault: false,
        cleaningTools: ['물걸레 또는 청소포'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen7',
        desc: '음식물쓰레기 버리기',
        difficulty: 'hard',
        priority: 80,
        isDefault: false,
        cleaningTools: ['음식물 쓰레기 봉투'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen8',
        desc: '오븐청소',
        difficulty: 'very hard',
        priority: 70,
        isDefault: false,
        cleaningTools: ['물걸레 또는 청소포'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen9',
        desc: '가스레인지 청소',
        difficulty: 'very hard',
        priority: 70,
        isDefault: false,
        cleaningTools: ['물걸레 또는 청소포'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen10',
        desc: '식기세척기 청소',
        difficulty: 'very hard',
        priority: 70,
        isDefault: false,
        cleaningTools: ['물걸레 또는 청소포'],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen11',
        desc: '배수구 청소',
        difficulty: 'very hard',
        priority: 70,
        isDefault: false,
        cleaningTools: [],
        area: 'bathroom',
        isChecked: false
    },
    {
        id: 'kitchen12',
        desc: '냉장고 청소',
        difficulty: 'very hard',
        priority: 70,
        isDefault: false,
        cleaningTools: ['물걸레 또는 청소포'],
        area: 'bathroom',
        isChecked: false
    },
];

export default kitchenCleanings;
