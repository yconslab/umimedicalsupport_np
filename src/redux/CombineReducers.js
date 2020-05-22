import { combineReducers } from "redux";

import VisitorInformation from "../screens/home/redux/visitorInformation";

const CombineReducer = combineReducers({
  VisitorInformation: VisitorInformation
});

export default CombineReducer;
