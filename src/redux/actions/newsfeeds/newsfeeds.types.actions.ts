import { NewsItem } from "../../model/data/NewsItem";

export const GET_BY_CATEGORY = 'GET_BY_CATEGORY';
export const TRENDING = 'GET_TRENDING';
export const SEARCH = 'SEARCH';
export const ONLY_ONE_SEARCH = 'ONLY_ONE_SEARCH';

interface ActionGetByCategory {
    type: typeof GET_BY_CATEGORY;
    payload: Array<NewsItem>;
}

interface ActionGetTrending {
    type: typeof TRENDING;
    payload: Array<NewsItem>;
}

interface ActionGetSearch {
    type: typeof SEARCH;
    payload: Array<NewsItem>;
}

interface ActionOnlyOneSearch {
    type: typeof ONLY_ONE_SEARCH;
    payload: Array<NewsItem>;
}

export type TypeActionsNews = ActionGetByCategory | ActionGetTrending | ActionGetSearch | ActionOnlyOneSearch
