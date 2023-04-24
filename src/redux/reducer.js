import { createStore } from "redux";
import rootReducer from "./store";

const store = createStore(rootReducer);

export default store;