import { combineReducers } from "redux";

import ReservationInformation from "../screens/home/redux/reservationInformation";
const CombineReducer = combineReducers({
  ReservationInformation: ReservationInformation,
});

export default CombineReducer;
