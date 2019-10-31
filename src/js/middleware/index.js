import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        const foundWords = forbiddenWords.filter(word => {
          return action.payload.title.includes(word);
        });

        if (foundWords.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}

export default forbiddenWordsMiddleware;
