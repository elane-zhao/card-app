import { Card } from "./card";

export interface CardsResponse {
    cards: Card[];
    _pageSize: number;
    _totalCount: number;
}