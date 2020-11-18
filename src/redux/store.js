import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import rootReducer from "./rootReducer";
import persistedReducer from "./rootReducer";

const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));
const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
