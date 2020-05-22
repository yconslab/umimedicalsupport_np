import {
  SET_CHECKBOX,
  SET_NAME,
  SET_PHONENUMBER,
  SET_RADIO_BUTTON
} from "./actions";

const INITAL_STATE = {
  name: "",
  selectedRadioButton: "대리 접수입니다.",
  phoneNumber: "",
  checkbox: false
};

export default (state = INITAL_STATE, actions) => {
  switch (actions.type) {
    case SET_NAME: {
      return {
        ...state,
        name: actions.payload
      };
    }
    case SET_RADIO_BUTTON: {
      return {
        ...state,
        selectedRadioButton: actions.payload
      };
    }
    case SET_PHONENUMBER: {
      return {
        ...state,
        phoneNumber: actions.payload
      };
    }
    case SET_CHECKBOX: {
      return {
        ...state,
        checkbox: actions.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
