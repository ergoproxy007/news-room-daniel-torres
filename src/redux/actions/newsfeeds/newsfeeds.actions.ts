import { GET_BY_CATEGORY, TRENDING, TypeActionsNews } from './newsfeeds.types.actions';
import { NewsItem } from '../../model/data/NewsItem';
import { CanillitappRepository } from '../../../api/canillitapp.repository';

export const getListNewsFeeds = (newsItem: Array<NewsItem>): TypeActionsNews => {
    return {
        type: GET_BY_CATEGORY,
        payload: newsItem
    };
}

export const getListNewsFeedsAsync = (id: number) => {
    return (dispatch: any) => {
        CanillitappRepository.searchNewsFeeds(id)
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
        CanillitappRepository.searchNewsFeeds(page)
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
        CanillitappRepository.trending(today, count)
            .then((response) => response.json())
            .then((response) => {
                const news = response.news as any;
                const newsfeeds = [] as NewsItem[];
                if (news.coronavirus) {
                    newsfeeds.push(...news.coronavirus);
                }
                if (news.cuarentena) {
                    newsfeeds.push(...news.cuarentena);
                }
                if (news.activista) {
                    newsfeeds.push(...news.activista);
                }
                if (news.autos) {
                    newsfeeds.push(...news.autos);
                }
                if (news.decreto) {
                    newsfeeds.push(...news.decreto);
                }
                if (news.Venezuela) {
                    newsfeeds.push(...news.Venezuela);
                }
                dispatch(trending(newsfeeds));
            })
            .catch(error => {
                console.log(error);
            })
    }
}
