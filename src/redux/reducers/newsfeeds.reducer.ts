import { GET_BY_CATEGORY, TRENDING, SEARCH, ONLY_ONE_SEARCH, TypeActionsNews } from "../actions/newsfeeds/newsfeeds.types.actions";
import { NewsItem } from "../model/data/NewsItem";
import { NewsFeedsState } from "../model/NewsFeedsState";

const initialState: NewsFeedsState = {
  newsItems: Array<NewsItem>(),
  isSearch: false
};
  
export default function (state = initialState, action: TypeActionsNews): NewsFeedsState {
  switch (action.type) {
    case GET_BY_CATEGORY: {
        const newsfeeds = action.payload;
        return {
          ...state,
          newsItems: newsfeeds,
          isSearch: false
        };
    }
    case TRENDING: {
      const newsfeeds = action.payload;
      return {
        ...state,
        newsItems: newsfeeds,
        isSearch: false
      };
    }
    case SEARCH: {
      const newsfeeds = action.payload;
      return {
        ...state,
        newsItems: newsfeeds,
        isSearch: true
      }
    }
    case ONLY_ONE_SEARCH: {
      const newsfeeds = action.payload;
      return {
        ...state,
        newsItems: newsfeeds,
        isSearch: true
      }
    }
    default:
      return state;
  }
}
  