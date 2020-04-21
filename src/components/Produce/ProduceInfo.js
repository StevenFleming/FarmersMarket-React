import React from "react";
import PropTypes from "prop-types";

function ProduceInfo(props) {
  return (
    <React.Fragment>
      <h3>{props.month} Produce</h3>
      <ul>
        {props.selection.map((produce) => (
          <li>{produce}</li>
        ))}
      </ul>
      <hr />
    </React.Fragment>
  );
}

ProduceInfo.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProduceInfo;
