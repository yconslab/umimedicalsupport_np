import {
  ADD_HOSPITAL,
  ADD_SCHEDULEDATE,
  ADD_SCHEDULETIME,
  ADD_RESERVATION,
  ADD_ADDITIONAL_INFO,
  SET_NAME,
  SET_PHONENUMBER,
  SET_RADIO_BUTTON,
  SET_CHECKBOX,
} from "./actions";
import Reservation from "../../../models/Reservation";

const INITAL_STATE = {
  hospital: "",
  scheduleDate: "",
  scheduleTime: "",
  additionalInfo: "",
  visitorName: "",
  visitorNumber: "",
  reservations: [],
  checkbox: false,
  selectedRadioButton: "대리 접수입니다.",
};

export default (state = INITAL_STATE, actions) => {
  switch (actions.type) {
    case SET_RADIO_BUTTON: {
      return {
        ...state,
        selectedRadioButton: actions.payload,
      };
    }
    case SET_CHECKBOX: {
      return {
        ...state,
        checkbox: actions.payload,
      };
    }
    case ADD_HOSPITAL: {
      return {
        ...state,
        hospital: actions.payload,
      };
    }
    case ADD_SCHEDULEDATE: {
      return {
        ...state,
        scheduleDate: actions.payload,
      };
    }
    case ADD_SCHEDULETIME: {
      return {
        ...state,
        scheduleTime: actions.payload,
      };
    }

    case ADD_ADDITIONAL_INFO: {
      return {
        ...state,
        additionalInfo: actions.payload,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        visitorName: actions.payload,
      };
    }

    case SET_PHONENUMBER: {
      return {
        ...state,
        visitorNumber: actions.payload,
      };
    }
    case ADD_RESERVATION: {
      const newReservation = new Reservation(
        new Date().toString(),
        state.hospital,
        state.scheduleDate,
        // state.scheduleTime,
        state.additionalInfo,
        state.visitorName,
        state.visitorNumber,
        true
      );
      return {
        ...state,
        reservations:
          state.hospital &&
          state.scheduleDate &&
          // state.scheduleTime &&
          state.visitorName &&
          state.visitorNumber
            ? state.reservations.concat(newReservation)
            : state.reservations,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
