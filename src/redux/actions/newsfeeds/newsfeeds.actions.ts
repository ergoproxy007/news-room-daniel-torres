import { FIRST_TEN_NEWS, LIST_ALL_NEWS, TypeActionsNews } from './newsfeeds.types.actions';
import { NewsItem } from '../../model/data/NewsItem';
import { NewsFeedsRepository } from '../../../api/newsfeeds.repository';

export const getListNewsFeeds = (newsItem: Array<NewsItem>): TypeActionsNews => {
    console.log('getFirstTenNews: ' + newsItem);
    return {
        type: FIRST_TEN_NEWS,
        payload: newsItem
    };
}

export const getListNewsFeedsAsync = (page: number) => {
    if (page === -1) {
        return null;
    }
    return (dispatch: any) => {
        NewsFeedsRepository.searchNewsFeeds(page)
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
