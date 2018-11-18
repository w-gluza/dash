import React from "react";

const SVG = ({
    style = {},
    fill = "",
    width = "100%",
    className = "",
    viewBox = "0 0 483.2 137.06",
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
            <path fill="#00acc1" d="M69.69 69.71s-.67 33.43-29.74 44.28c0 0 17.43 26.54 36.41 22.68 19.95-4.05 27.54-21.91 29.67-30.42 2.4-9.46-3.55-32.71-36.34-36.54z" />
            <path fill="#00acc1" d="M67.34 69.69s-33.47-.68-44.28-29.74c0 0-26.53 17.43-22.68 36.41 4.06 19.94 21.91 27.53 30.43 29.66 9.46 2.37 32.7-3.54 36.53-36.33z" />
            <path fill="#00acc1" d="M67.36 67.34s.68-33.47 29.75-44.28c0 0-17.44-26.54-36.42-22.68-20 4.06-27.53 21.91-29.66 30.43-2.37 9.46 3.55 32.7 36.33 36.53z" />
            <path fill="#00acc1" d="M70.09 67.49s33.47.65 44.34 29.75c0 0 26.53-17.44 22.67-36.42-4.06-20-21.92-27.53-30.42-29.67-9.52-2.36-32.76 3.55-36.59 36.34z" />
            <path fill="#00acc1" d="M232.79 87.91h-29.16v-7l23.07.12a12.17 12.17 0 0 0 0-24.34h-23.07v-7.32h29.16a12.17 12.17 0 0 0 0-24.33h-42.35a12.15 12.15 0 0 0-11.38 11.7s-.15 62.77-.15 63.34a12.17 12.17 0 0 0 12.17 12.17h41.71a12.17 12.17 0 0 0 0-24.33z" />
            <path fill="#cfd8dc" d="M402.12 12.41a12.17 12.17 0 0 0-24.34.21v36.31h-20.9V12.62a12.16 12.16 0 0 0-24.32-.21V61.5a12.15 12.15 0 0 0 12.14 11.79h33.05v26.85a12.17 12.17 0 0 0 24.34 0l.03-87.73z" />
            <path fill="#00acc1" d="M311.24 87.95h-23.56l34.86-43.6A12.15 12.15 0 0 0 313.65 25h-47.41a12.16 12.16 0 0 0 0 24.31h25.19L256.15 93.5a12.15 12.15 0 0 0 10.06 18.8h45a12.17 12.17 0 1 0 0-24.34z" />
            <path fill="#00acc1" d="M483.2 35.01a12.16 12.16 0 0 0-24.28-1.06l.19 43.27a11.4 11.4 0 0 1-22.79-.3v-42.2a12.16 12.16 0 0 0-24.31 0l.06 42.5a35.57 35.57 0 0 0 71.13-.51v-41.7z" />

        </svg>
    );

export default SVG;
