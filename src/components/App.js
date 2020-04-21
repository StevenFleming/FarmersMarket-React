import React from "react";
import Header from "./Header";
import LocationControl from "./Location/LocationControl";
// import ProduceControl from "./Produce/ProduceControl";
// import Timestamp from "./Timestamp";
// import SeasonalImage from "./SeasonalImage";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Default state
    let currentDate = new Date();
    this.state = {
      today: currentDate, // Tue Apr 21 2020
      todayInt: currentDate.getDay(),
    };
    // console.log(this.state.todayInt);
  }

  // getInfo = () => {
  //   this.setState({
  //     todayInt: 3,
  //   });
  // };

  render() {
    // this.getInfo();
    // console.log(this.state.todayInt);
    return (
      <React.Fragment>
        <Header />
        <hr />
        <h1>{this.state.todayInt.toString()}</h1>
        <LocationControl todayInt={this.state.todayInt} />
        {/* <ProduceControl />
        <Timestamp />
        <SeasonalImage /> */}
      </React.Fragment>
    );
  }
}

// index.js:1406 Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the App component.

export default App;
