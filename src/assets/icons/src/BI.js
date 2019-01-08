import React from "react";

const SVG = ({
  style = {},
  fill = "",
  alt = "",
  width = "100%",
  className = "",
  viewBox = "0 0 492 492"
}) => (
  <svg
    alt={alt}
    fill={fill}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M286 1.4c-5.5 0-9.9 4.4-9.9 9.9v196.1c0 5.5 4.4 9.9 9.9 9.9h196.1c5.5 0 9.9-4.4 9.9-9.9 0-50.3-18.3-98.7-51.6-136.4C401.3 26.8 345 1.4 286 1.4zm9.9 196.1v-176c49.7 2.7 96.5 25.2 129.7 62.7 27.9 31.5 44.1 71.5 46.4 113.3H295.9z" />
    <path d="M443.7 268.7c0-5.5-4.4-9.9-9.9-9.9h-202V56.7c0-5.5-4.4-9.9-9.9-9.9C99.5 46.8 0 146.3 0 268.7 0 391 99.5 490.6 221.9 490.6S443.7 391 443.7 268.7zM221.9 470.8c-111.4 0-202.1-90.7-202.1-202.1C19.8 160.6 105.1 72 212 66.8v201.8c0 5.5 4.4 9.9 9.9 9.9h201.8c-5.2 106.9-93.7 192.3-201.8 192.3z" />
    />
  </svg>
);

export default SVG;