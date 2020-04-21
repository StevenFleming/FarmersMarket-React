import React from "react";

function TimeStamp(props) {
  return (
    <React.Fragment>
      <h1> {props.today.toDateString()} </h1>
    </React.Fragment>
  );
}

export default TimeStamp;
