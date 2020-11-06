//import { axiosIntance } from '../config/axios.config';
//const limit = (page: number) => `page=${page}`;

export const CanillitappRepository = {
    //searchNewsFeeds: (page: number) => axiosIntance.get(`https://api.canillitapp.com/latest/2020-10-26?${limit(page)}`)
    searchNewsFeeds: (id: number) => fetch(`https://api.canillitapp.com/news/category/${id}`),
    trending: (today: string, count: number) => fetch(`https://api.canillitapp.com/trending/${today}/${count}`)
};
