import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import DropDown from "./React questions/DropDown";
import Accordion from "./React questions/Accordion";

function App() {
  return (
    <>
      {/* <Navbar />
     <div style={{ padding: "80px 20px" }}>
        <h2>Instagram Responsive Navbar</h2>
      </div>
      <Feed />*/}
      <DropDown />
      <Accordion />
    </>
  );
}

export default App;
