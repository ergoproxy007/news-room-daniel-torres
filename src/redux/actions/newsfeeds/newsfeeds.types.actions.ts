import { NewsItem } from "../../model/data/NewsItem";

export const GET_BY_CATEGORY = 'GET_BY_CATEGORY';
export const TRENDING = 'GET_TRENDING';
export const LIST_ALL_NEWS = 'LIST_ALL_NEWS';

interface ActionGetByCategory {
    type: typeof GET_BY_CATEGORY;
    payload: NewsItem[];
}

interface ActionGetTrending {
    type: typeof TRENDING;
    payload: NewsItem[];
}

export type TypeActionsNews = ActionGetByCategory | ActionGetTrending
