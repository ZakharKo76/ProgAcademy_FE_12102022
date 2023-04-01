import React from "react";
import Images from "../../../../data/Images";
import "./image.css"

function Image(props) {
  const name = Object.values(props).toString();
  return (
    <div className="item__image">
      <img src={Images[name]} alt="hghg" />
    </div>
  );
}

export default Image;
