import { takeEvery, call, put } from "redux-saga/effects";
import { DATA_LOADED, DATA_REQUESTED } from "../constants/action-types";

function* workerSaga() {
  try {
    const data = yield call(getData);
    yield put({ type: DATA_LOADED, payload: data });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
}

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}
