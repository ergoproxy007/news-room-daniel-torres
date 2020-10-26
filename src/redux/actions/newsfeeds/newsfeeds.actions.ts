import { GET_BY_CATEGORY, TRENDING, TypeActionsNews } from './newsfeeds.types.actions';
import { NewsItem } from '../../model/data/NewsItem';
import { NewsFeedsRepository } from '../../../api/newsfeeds.repository';

export const getListNewsFeeds = (newsItem: Array<NewsItem>): TypeActionsNews => {
    return {
        type: GET_BY_CATEGORY,
        payload: newsItem
    };
}

export const getListNewsFeedsAsync = (id: number) => {
    return (dispatch: any) => {
        NewsFeedsRepository.searchNewsFeeds(id)
            .then((response) => response.json())
            .then((response) => {
                dispatch(getListNewsFeeds(response));
            })
            .catch(error => {
                console.log(error);
            })
    }
    /* Axios not working
    return (dispatch: any) => {
        NewsFeedsRepository.searchNewsFeeds(page)
        .then(response => {
            dispatch(getListNewsFeeds(response.data));
        })
        .catch(error => {
            console.log(error);
        })
    }
    */
}

export const trending = (newsItem: any): TypeActionsNews => {
    return {
        type: TRENDING,
        payload: newsItem
    };
}

export const trendingAsync = (today: string, count: number) => {
    return (dispatch: any) => {
        NewsFeedsRepository.trending(today, count)
            .then((response) => response.json())
            .then((response) => {
                const news = response.news as any;
                const newsfeeds = [] as NewsItem[];
                newsfeeds.push(...news.coronavirus);
                newsfeeds.push(...news.activista);
                newsfeeds.push(...news.autos);
                newsfeeds.push(...news.decreto);
                newsfeeds.push(...news.activista);
                newsfeeds.push(...news.Venezuela);
                dispatch(trending(newsfeeds));
            })
            .catch(error => {
                console.log(error);
            })
    }
}
