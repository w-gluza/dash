import React from "react";

const SVG = ({
  style = {},
  fill = "",
  alt = "",
  width = "100%",
  className = "",
  viewBox = "0 0 60 60",
  onClick
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
    onClick={onClick}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M36 16c0-3.309-2.691-6-6-6s-6 2.691-6 6v5h-5v19h22V21h-5v-5zm-10 0c0-2.206 1.794-4 4-4s4 1.794 4 4v5h-8v-5zm13 7v15H21V23h18z" />
    <path d="M29 32.858V35a1 1 0 1 0 2 0v-2.142c1.72-.447 3-1.999 3-3.858 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.859 1.28 3.411 3 3.858zM30 27c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
    <path d="M30 0C15.112 0 3 12.112 3 27c0 14.109 10.881 25.719 24.691 26.895l-4.398 4.398a.999.999 0 1 0 1.414 1.414l5.999-5.999a1.001 1.001 0 0 0 0-1.416l-5.999-5.999a.999.999 0 1 0-1.414 1.414l4.164 4.164C14.862 50.593 5 39.927 5 27 5 13.215 16.215 2 30 2s25 11.215 25 25c0 6.633-2.57 12.881-7.238 17.593a1 1 0 1 0 1.421 1.408A26.838 26.838 0 0 0 57 27C57 12.112 44.888 0 30 0z" />
  </svg>
);

export default SVG;
