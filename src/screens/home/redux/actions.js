export const SET_NAME = "SET_NAME";
export const SET_RADIO_BUTTON = "SET_RADIO_BUTTON";
export const SET_PHONENUMBER = "SET_PHONENUMBER";
export const SET_CHECKBOX = "SET_CHECKBOX";

//reservation
export const ADD_HOSPITAL = "ADD_HOSPITAL";
export const ADD_SCHEDULEDATE = "ADD_SCHEDULEDATE";
export const ADD_SCHEDULETIME = "ADD_SCHEDULETIME";
export const ADD_RESERVATION = "ADD_RESERVATION";
export const ADD_ADDITIONAL_INFO = "ADD_ADDITIONAL_INFO";
export const ADD_VISITORNAME = "ADD_VISITORNAME";
export const ADD_VISITORNUMBER = "ADD_VISITORNUMBER";

export const addHospital = (hospitalName) => {
  return {
    type: ADD_HOSPITAL,
    payload: hospitalName,
  };
};

export const addScheduleDate = (scheduleDate) => {
  return {
    type: ADD_SCHEDULEDATE,
    payload: scheduleDate,
  };
};

export const addScheduleTime = (scheduleTime) => {
  return {
    type: ADD_SCHEDULETIME,
    payload: scheduleTime,
  };
};

export const addAdditionalInfo = (additionalInfo) => {
  return {
    type: ADD_ADDITIONAL_INFO,
    payload: additionalInfo,
  };
};

export const addReservation = () => {
  return {
    type: ADD_RESERVATION,
  };
};
export const setName = (val) => {
  return {
    type: SET_NAME,
    payload: val,
  };
};

export const setRadioButton = (val) => {
  return {
    type: SET_RADIO_BUTTON,
    payload: val,
  };
};
export const setPhoneNumber = (val) => {
  return {
    type: SET_PHONENUMBER,
    payload: val,
  };
};
export const setCheckbox = (val) => {
  return {
    type: SET_CHECKBOX,
    payload: val,
  };
};
