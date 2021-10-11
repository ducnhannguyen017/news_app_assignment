import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "app/rootSaga";

import CategoryReducer from './reducer/CategoryReducer'
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    categoryState: CategoryReducer,
    // news: newsReducer,
    // detail: detailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
