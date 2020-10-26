import { NewsItem } from "../../model/data/NewsItem";

export const FIRST_TEN_NEWS = 'FIRST_TEN_NEWS';
export const LIST_ALL_NEWS = 'LIST_ALL_NEWS';

interface ActionFirstTenNews {
    type: typeof FIRST_TEN_NEWS;
    payload: NewsItem[];
}

export type TypeActionsNews = ActionFirstTenNews
