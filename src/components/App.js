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

  handleTomorrowCheck = () => {
    if (this.state.todayInt === 6) {
      this.setState({ todayInt: 0 })
    } else {
      this.setState({ todayInt: this.state.todayInt + 1 });
    }
  }

  handleYesterdayCheck = () => {
    if (this.state.todayInt === 0) {
      this.setState({ todayInt: 6 })
    } else {
      this.setState({ todayInt: this.state.todayInt - 1 });
    }
  }

  handleNextMonthCheck = () => {
    if (this.state.monthInt === 11) {
      this.setState({ monthInt: 0 })
    } else {
      this.setState({ monthInt: this.state.monthInt + 1 });
    }
  }

  handleLastMonthCheck = () => {
    if (this.state.monthInt === 0) {
      this.setState({ monthInt: 11 })
    } else {
      this.setState({ monthInt: this.state.monthInt - 1 });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <hr />
        <div id="content">
          <div>
            <LocationControl todayInt={this.state.todayInt} onYesterdayClick={this.handleYesterdayCheck} onTomorrowClick={this.handleTomorrowCheck} />
          </div>
          <div>
            <ProduceControl monthInt={this.state.monthInt} onNextMonthClick={this.handleNextMonthCheck} onLastMonthClick={this.handleLastMonthCheck} />
          </div>
          <div>
            <TimeStamp today={this.state.today} />
          </div>
          {/* <SeasonalImage /> */}
        </div>
      </React.Fragment>
    );
  }
}

// index.js:1406 Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the App component.

export default App;
