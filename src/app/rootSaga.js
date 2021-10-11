import { all, put, call, takeEvery } from "@redux-saga/core/effects";
import { requestCategory } from "api/api";
import {
  GET_CATEGORY_LOADING,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
} from "./action/type";

export function* getCategory(payload) {
  try {
    const response = yield call(requestCategory, payload);
    yield put({ type: GET_CATEGORY_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_CATEGORY_ERROR, payload: err });
  }
}
export const watchGetUser = takeEvery(GET_CATEGORY_LOADING, getCategory);

export default function* rootSaga() {
  yield watchGetUser;
}
