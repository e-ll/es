import React from "react";

function Icon(props) {
  const {logoUrl} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="91"
      height="50"
      fill="none"
      viewBox="0 0 91 50"
    >
      <g filter="url(#filter0_d)">
        <rect width="82.082" height="41.041" x="4" fill="#fff" rx="10"></rect>
      </g>
      <path
        fill="url(#pattern0)"
        d="M21.811 1.549H67.49799999999999V38.717999999999996H21.811z"
      ></path>
      <defs>
        <filter
          id="filter0_d"
          width="90.082"
          height="49.041"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00174 0 0 .00215 -.186 -.125)"
            xlinkHref="#image0"
          ></use>
        </pattern>
        <image
          id="image0"
          width="800"
          height="566"
          xlinkHref={logoUrl}
        ></image>
      </defs>
    </svg>
  );
}

export default Icon;
