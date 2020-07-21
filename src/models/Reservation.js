class Reservation {
  constructor(
    id,
    hospitalName,
    selectionDate,
    // selectionTime,
    additionalInfo,
    visitorName,
    visitorNumber,
    matchStatus
  ) {
    this.id = id;
    this.hospitalName = hospitalName;
    this.selectionDate = selectionDate;
    // this.selectionTime = selectionTime;
    this.additionalInfo = additionalInfo;
    this.visitorName = visitorName;
    this.visitorNumber = visitorNumber;
    this.matchStatus = matchStatus;
  }
}

export default Reservation;
