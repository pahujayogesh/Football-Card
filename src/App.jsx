import { useState } from "react";

import Nav from "./components/Nav";
import SelectOption from "./components/Selectoption";
import "./tailwind.css";
import Main from "./components/Main";

function App() {
  

  return (
    <>
      <Nav />
      <br />
      <SelectOption />
      <br />
      <Main/>
      
    </>
  );
}

export default App;
