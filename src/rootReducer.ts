import { combineReducers } from "redux";
import { tabReducer } from "./redux/tab/reducer";

const rootReducer = combineReducers({
    tab: tabReducer,
});
export default rootReducer;