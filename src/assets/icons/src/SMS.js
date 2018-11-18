import React from "react";

const SVG = ({
  style = {},
  fill = "",
  width = "100%",
  className = "",
  viewBox = "0 0 539.077 539.077",
  onClick
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    onClick={onClick}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M78.615 494.154c-1.448 0-2.906-.285-4.299-.855-4.201-1.733-6.931-5.835-6.931-10.375v-78.615H33.692C15.113 404.308 0 389.194 0 370.615v-292c0-18.579 15.113-33.692 33.692-33.692h471.692c18.579 0 33.692 15.113 33.692 33.692v292c0 18.579-15.113 33.692-33.692 33.692H173.112l-86.556 86.556c-2.15 2.15-5.023 3.291-7.941 3.291zM33.692 67.385c-6.197 0-11.231 5.034-11.231 11.231v292c0 6.186 5.034 11.231 11.231 11.231h44.923c6.208 0 11.231 5.023 11.231 11.231v62.734l70.675-70.675c2.106-2.106 4.957-3.29 7.941-3.29h336.923c6.186 0 11.231-5.045 11.231-11.231v-292c0-6.197-5.045-11.231-11.231-11.231H33.692z" />
    <path d="M190.923 247.077c-12.382 0-22.462-10.079-22.462-22.462 0-12.382 10.079-22.462 22.462-22.462 12.382 0 22.462 10.079 22.462 22.462s-10.08 22.462-22.462 22.462zM370.615 247.077c-12.393 0-22.462-10.079-22.462-22.462 0-12.382 10.068-22.462 22.462-22.462s22.462 10.079 22.462 22.462-10.068 22.462-22.462 22.462zM280.769 247.077c-12.382 0-22.462-10.079-22.462-22.462 0-12.382 10.079-22.462 22.462-22.462 12.393 0 22.462 10.079 22.462 22.462s-10.068 22.462-22.462 22.462z" />
  </svg>
);

export default SVG;
