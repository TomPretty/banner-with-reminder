import React from "react";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";

function App() {
  return (
    <div>
      <Banner1 copy={{ header: "This is Banner1", body: "This is it's body" }} />
      <Banner2 copy={{ header: "This is Banner2", body: "This is it's body" }} />
    </div>
  );
}

export default App;
