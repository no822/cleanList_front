export type difficulty = 'very hard' | 'hard' | 'easy';
export type areaType = 'common' | 'bedroom' | 'bathroom' | 'kitchen' | 'veranda';

type checked = {
    isChecked?: boolean;
};

export type cleaning = checked & {
    id: string;
    difficulty: difficulty;
    priority: number;
    isDefault: boolean;
    cleaningTools: Array<string>;
    desc: string;
    area: areaType;
};
