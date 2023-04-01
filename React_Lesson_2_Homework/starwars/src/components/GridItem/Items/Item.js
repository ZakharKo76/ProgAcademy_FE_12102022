import React from "react";
import Name from "./Name/Name";

function Item(props) {
  if (props[0] === "name") {
    return <Name {...props} />;
  } else if (props[0] !== "name" && props[0] !== "url") {
    return (
      <div className="item__body">
        <div className="item__title">{props[0].split("_").join(" ")} : </div>
        <div className="item__value">{props[1]} </div>
      </div>
    );
  } else {
    return (
      <div className="item__button">
        <a href={props[1]} type="button" className="button">
          See more...
        </a>
      </div>
    );
  }
}

export default Item;
