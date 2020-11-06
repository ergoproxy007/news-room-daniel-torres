import { NewsItem } from "./data/NewsItem";

export interface NewsFeedsState {
    newsItems: Array<NewsItem>,
    isSearch: boolean
}
