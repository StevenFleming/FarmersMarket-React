import React from "react";
import PropTypes from "prop-types";

function LocationInfo(props) {
  return (
    <React.Fragment>
      <h4>Current Day: {props.day}</h4>
      <p>Market Hours: {props.hours}</p>
      <p>Location: {props.location}</p>
      <p>Booth: {props.booth}</p>
      <hr />
    </React.Fragment>
  );
}

LocationInfo.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
};

export default LocationInfo;
