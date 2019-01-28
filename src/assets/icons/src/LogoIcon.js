import React from "react";

const SVG = ({
  style = {},
  fill = "",
  alt = "",
  width = "100%",
  className = "",
  viewBox = "0 0 150.9 149.2"
}) => (
  <svg
    alt={alt}
    fill={fill}
    style={style}
    width={width}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M75.1 75.2s-.7 33.5-29.7 44.3c0 0 17.4 26.5 36.4 22.7 19.9-4.1 27.5-21.9 29.7-30.4 2.3-9.6-3.6-32.8-36.4-36.6z" />
    <path d="M72.8 75.1s-33.5-.7-44.3-29.7c0 0-26.5 17.4-22.7 36.4 4.1 19.9 21.9 27.5 30.4 29.7 9.5 2.3 32.7-3.6 36.6-36.4z" />
    <path d="M72.8 72.8s.7-33.5 29.7-44.3c0 0-17.4-26.5-36.4-22.7-19.9 4.1-27.5 21.9-29.6 30.5C34.1 45.7 40 69 72.8 72.8z" />
    <path d="M75.5 72.9s33.5.7 44.3 29.7c0 0 26.5-17.4 22.7-36.4-4.1-19.9-21.9-27.5-30.4-29.7-9.5-2.3-32.8 3.7-36.6 36.4z" />
  </svg>
);

export default SVG;
