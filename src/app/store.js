import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "app/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    // category: categoryReducer,
    // news: newsReducer,
    // detail: detailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
