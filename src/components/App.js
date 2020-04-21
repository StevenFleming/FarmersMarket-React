import React from "react";
import Header from "./Header";
import LocationControl from "./Location/LocationControl";
import ProduceControl from "./Produce/ProduceControl";
import TimeStamp from "./Timestamp";
// import SeasonalImage from "./SeasonalImage";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    let currentDate = new Date();
    this.state = {
      today: currentDate,
      todayInt: currentDate.getDay(),
      monthInt: currentDate.getMonth(),
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <hr />
        <div id="content">
          <div class="test">
            <LocationControl todayInt={this.state.todayInt} />
          </div>
          <ProduceControl monthInt={this.state.monthInt} />
          <TimeStamp today={this.state.today} />
          {/* <SeasonalImage /> */}
        </div>
      </React.Fragment>
    );
  }
}

// index.js:1406 Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the App component.

export default App;
