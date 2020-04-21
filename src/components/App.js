import React from "react";
import Header from "./Header";
import LocationControl from "./Location/LocationControl";
// import ProduceControl from "./Produce/ProduceControl";
// import Timestamp from "./Timestamp";
// import SeasonalImage from "./SeasonalImage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <LocationControl />
      {/* <ProduceControl />
      <Timestamp />
      <SeasonalImage /> */}
    </React.Fragment>
  );
}

export default App;
