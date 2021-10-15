import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "app/rootSaga";
import CategoryReducer from "./reducer/CategoryReducer";
import PostReducer from "./reducer/PostReducer";
import DetailReducer from "./reducer/DetailReducer";
import AuthReducer from "./reducer/AuthReducer";
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    categoryState: CategoryReducer,
    postState: PostReducer,
    detailState: DetailReducer,
    authState: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
