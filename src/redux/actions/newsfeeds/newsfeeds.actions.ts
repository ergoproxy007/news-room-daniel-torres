import { GET_BY_CATEGORY, ONLY_ONE_SEARCH, SEARCH, TRENDING, TypeActionsNews } from './newsfeeds.types.actions';
import { NewsItem } from '../../model/data/NewsItem';
import { CanillitappRepository } from '../../../api/canillitapp.repository';

export const getListNewsFeeds = (newsItem: Array<NewsItem>): TypeActionsNews => {
    return {
        type: GET_BY_CATEGORY,
        payload: newsItem
    };
}

/**
  * get newsfeeds by category id.
  * @param {number} id - category id.
  * @return {Array<NewsItem>} - category newsfeeds.
*/
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

export const trending = (newsItem: Array<NewsItem>): TypeActionsNews => {
    return {
        type: TRENDING,
        payload: newsItem
    };
}

/**
  * get trending newsfeeds by specific categories, like coronavirus, cuarentena, activista, etc.
  * @param {number} today - string date for find newsfeed.
  * @param {number} count - records count.
  * @return {NewsItem[]} - category newsfeeds.
*/
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

export const searchPhrase = (newsItem: Array<NewsItem>): TypeActionsNews => {
    return {
        type: SEARCH,
        payload: newsItem
    };
}

/**
  * get newsfeeds by specific phrase, using the Search component.
  * @param {string} phrase - text necesary for the search.
  * @return {Array<NewsItem>} - all newsfeeds by phrase.
*/
export const searchPhrasePromiseAsync = (phrase: string) => {
    return (dispatch: any) => {
        return new Promise((resolve, reject) => {
            CanillitappRepository.searchPhrase(phrase)
            .then((response) => response.json())
            .then((response) => {
                dispatch(searchPhrase(response));
                resolve(response);
            })
            .catch(error => {
                console.log(error);
                reject(error); 
            })
        });
    }
}

/**
  * get one News when activated select click event.
  * @param {Array<NewsItem>} newsItem - one item is received as a list.
*/
export const onlyOneSearchAsync = (newsItem: Array<NewsItem>) => {
    return (dispatch: any) => {
        dispatch({
            type: ONLY_ONE_SEARCH,
            payload: newsItem
        });
    }
}