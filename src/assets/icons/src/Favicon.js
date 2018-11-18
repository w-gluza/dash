import React from "react";

const SVG = ({
  style = {},
  fill = "",
  width = "100%",
  className = "",
  viewBox = "0 0 143.3 142.2"
}) => (
  <svg
    style={style}
    width={width}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M71.7 72S71 105.4 42 116.3c0 0 17.4 26.5 36.4 22.7 19.9-4.1 27.5-21.9 29.7-30.4 2.3-9.5-3.6-32.8-36.4-36.6z" />
    <path d="M69.3 72S35.8 71.3 25 42.3c0 0-26.5 17.4-22.7 36.4 4.1 19.9 21.9 27.5 30.4 29.7 9.6 2.3 32.8-3.7 36.6-36.4z" />
    <path d="M69.4 69.6s.7-33.5 29.8-44.3c0 0-17.4-26.5-36.4-22.7-20.1 4.1-27.6 22-29.8 30.5-2.3 9.4 3.6 32.7 36.4 36.5z" />
    <path d="M72.1 69.8s33.5.7 44.3 29.8c0 0 26.5-17.4 22.7-36.4-4.1-20-21.9-27.5-30.4-29.7-9.5-2.4-32.8 3.5-36.6 36.3z" />
    />
  </svg>
);

export default SVG;
