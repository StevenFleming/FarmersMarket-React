import React from "react";

function LocationInfo(props) {
  // props.day == this.today.getDay() aka Tuesday
  // display the properties of the masterLocation Obj that coresponds to Tuesday
  return (
    <React.Fragment>
      <h4>{props.day}</h4>
      <p>{props.hours}</p>
      <p>{props.location}</p>
      <p>{props.booth}</p>
      <hr />
    </React.Fragment>
  );
}

export default LocationInfo;
