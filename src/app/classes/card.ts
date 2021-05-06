export interface Card {
    name: string;
    rarity: string;
    type: string;
    subtypes: string[];
    cost: number;
    power: number;
    health: number;
    set: Set;
    soulSummon: number;
    soulTrap: number;
    text: string;
    attributes: string[];
    keywords?: string[];
    unique: boolean;
    imageUrl: string;
    id: string;
    collectible?: boolean
}

export interface Set {
    id: string;
    name: string;
    _self: string;
}