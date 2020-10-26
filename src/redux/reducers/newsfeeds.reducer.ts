import { FIRST_TEN_NEWS, LIST_ALL_NEWS, TypeActionsNews } from "../actions/newsfeeds/newsfeeds.types.actions";
import { NewsItem } from "../model/data/NewsItem";
import { NewsFeedsState } from "../model/NewsFeedsState";

const initialState: NewsFeedsState = {
  newsItem: Array<NewsItem>()
};
  
export default function (state = initialState, action: TypeActionsNews): NewsFeedsState {
  switch (action.type) {
    case FIRST_TEN_NEWS: {
        const newsfeeds = action.payload;
        return {
          ...state,
          newsItem: newsfeeds
        };
    }
    default:
      return state;
  }
}
  