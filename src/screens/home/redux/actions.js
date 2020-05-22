export const SET_NAME = "SET_NAME";
export const SET_RADIO_BUTTON = "SET_RADIO_BUTTON";
export const SET_PHONENUMBER = "SET_PHONENUMBER";
export const SET_CHECKBOX = "SET_CHECKBOX";

export const setName = val => {
  return {
    type: SET_NAME,
    payload: val
  };
};

export const setRadioButton = val => {
  return {
    type: SET_RADIO_BUTTON,
    payload: val
  };
};
export const setPhoneNumber = val => {
  return {
    type: SET_PHONENUMBER,
    payload: val
  };
};
export const setCheckbox = val => {
  return {
    type: SET_CHECKBOX,
    payload: val
  };
};
