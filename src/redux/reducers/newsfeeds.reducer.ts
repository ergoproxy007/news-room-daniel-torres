import { GET_BY_CATEGORY, TRENDING, TypeActionsNews } from "../actions/newsfeeds/newsfeeds.types.actions";
import { NewsItem } from "../model/data/NewsItem";
import { NewsFeedsState } from "../model/NewsFeedsState";

const initialState: NewsFeedsState = {
  newsItems: Array<NewsItem>()
};
  
export default function (state = initialState, action: TypeActionsNews): NewsFeedsState {
  switch (action.type) {
    case GET_BY_CATEGORY: {
        const newsfeeds = action.payload;
        return {
          ...state,
          newsItems: newsfeeds
        };
    }
    case TRENDING: {
      const newsfeeds = action.payload;
      return {
        ...state,
        newsItems: newsfeeds
      };
  }
    default:
      return state;
  }
}
  