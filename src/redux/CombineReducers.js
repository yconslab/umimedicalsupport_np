import { combineReducers } from "redux";

import VisitorInformation from "../screens/home/redux/visitorInformation";
import ReservationInformation from "../screens/home/redux/reservationInformation";
const CombineReducer = combineReducers({
  VisitorInformation: VisitorInformation,
  ReservationInformation: ReservationInformation,
});

export default CombineReducer;
