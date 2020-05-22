import React from "react";

const DateConversionWithDot = dateString => {
  const replaceDateWithDot = dateString.toString().replace(/-/g, ".");
  return replaceDateWithDot;
};

export default DateConversionWithDot;
