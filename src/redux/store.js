// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import Insert from "./reducer";

const store = createStore(Insert);

export default store;
