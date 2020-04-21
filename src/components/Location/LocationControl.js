import React from "react";
import PropTypes from "prop-types";
import LocationInfo from "./LocationInfo";

const masterLocationInfo = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

class LocationControl extends React.Component {
  constructor(props) {
    super(props);
    // Default state
    this.state = {
      today: new Date(), // Tue Apr 21 2020
    };
    this.getInfo();
    // *** TODO: eventually move this to App.js
    // *** make Timestamp a functional component
  }

  getInfo = () => {
    this.setState({
      todayInt: this.state.today.getDay(),
    });
  };

  render() {
    // then currentlyVisibleState = <LocationInfo day={this.todayInt} />
    console.log(this.state.todayInt);

    let currentlyVisibleState = masterLocationInfo[this.state.todayInt];

    return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
  }
}

export default LocationControl;

// this.setState(prevState => {
//   formVisibleOnPage: !prevState.formVisibleOnPage
// });

// class TicketControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//     };
//   }

//   render() {
//     let currentlyVisibleState = null;
//     if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewTicketForm />;
//     } else {
//       currentlyVisibleState = <TicketList />;
//     }
//     return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
//   }
// }
