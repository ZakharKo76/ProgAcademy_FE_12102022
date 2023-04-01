import React from "react";
import { data } from "../../data/data";
import GridItem from "../GridItem/GridItem";

function App() {
  return (
    <>
      {data.map((item, id) => (
        <GridItem {...item} key={Math.random().toFixed(4) * 1000 + id} />
      ))}
    </>
  );
}

export default App;
