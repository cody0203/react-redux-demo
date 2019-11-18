import { ADD_ARTICLE, DATA_REQUESTED } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  // redux-thunk logic
  // return dispatch =>
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(json => {
  //       dispatch({ type: DATA_LOADED, payload: json });
  //     });

  // Refactor for redux-saga
  return {
    type: DATA_REQUESTED
  };
}
