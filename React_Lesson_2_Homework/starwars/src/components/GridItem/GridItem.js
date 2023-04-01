import React from "react";
import "./index.css";
import Item from "./Items/Item";
import { need } from "../../data/need";

function GridItem(props) {
  const data = Object.keys(props)
    .map((key) => [key, props[key]])
    .filter((item) => need.includes(item[0]));
  return (
    <div className="grid__item">
      {data.map((item, id) => (
        <Item {...item} key={Math.random().toFixed(6) * 1000000 + id} />
      ))}
    </div>
  );
}
export default GridItem;
