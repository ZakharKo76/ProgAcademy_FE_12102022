import React from "react";
import Image from "../Image/Image";

function Name(props) {
  const { 0: name, 1: fullname } = props;

  return (
    <>
      <div className="item__header">
        <div className="item__name">
          <h3>{name}&nbsp;:</h3>
        </div>
        <div className="item__name">
          <h3>{fullname}</h3>
        </div>
      </div>
      <Image data={fullname} />
    </>
  );
}

export default Name;
