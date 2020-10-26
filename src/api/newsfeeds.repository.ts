import { axiosIntance } from '../config/axios.config';

const limit = (page: number) => `page=${page}`;

export const NewsFeedsRepository = {
    searchNewsFeeds: (page: number) => fetch(`https://api.canillitapp.com/latest/2020-10-26?${limit(page)}`)
    //searchNewsFeeds: (page: number) => axiosIntance.get(`https://api.canillitapp.com/latest/2020-10-26?${limit(page)}`)
};
