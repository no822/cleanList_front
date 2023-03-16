import {cleaning} from "../types/cleanings";

export const kitchenCleanings: Array<cleaning> = [
    {
        id: 'veranda1',
        desc: '물건정리',
        difficulty: 'easy',
        priority: 20,
        isDefault: false,
        cleaningTools: ['주방세제'],
        area: 'bathroom'
    },
    {
        id: 'veranda2',
        desc: '바닥쓸기',
        difficulty: 'hard',
        priority: 30,
        isDefault: false,
        cleaningTools: ['빗자루 또는 청소기'],
        area: 'bathroom'
    },
    {
        id: 'veranda3',
        desc: '바닥닦기',
        difficulty: 'hard',
        priority: 40,
        isDefault: false,
        cleaningTools: ['물걸레 또는 청소포'],
        area: 'bathroom'
    },
];
