import React from "react";
import "../Styled/Numbers.css";

const Numbers = ({ value }) => {
  const formattedValue =
    value < 0
      ? `-${Math.abs(value)
          .toString()
          .padStart(2, "0")}`
      : value.toString().padStart(3, "0");

  return <div className="Numbers">
    {formattedValue}
  </div>;
};

export default Numbers;
