import React from "react";

const BullseyeLogo = () => {
  return (
    <svg
      width="1124"
      height="935"
      viewBox="0 0 1324 1085"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: -50,
        top: -30,
        zIndex: 0,
        opacity: 0.1,
      }}
    >
      <g filter="url(#filter0_d_25_7)">
        <path
          d="M1154 542.5C1154 813.948 933.724 1034 662 1034C390.276 1034 170 813.948 170 542.5C170 271.052 390.276 51 662 51C933.724 51 1154 271.052 1154 542.5Z"
          fill="#40465A"
        />
      </g>
      <ellipse cx="660" cy="540.5" rx="301" ry="302.5" fill="#1B1F2D" />
      <ellipse cx="658.5" cy="541" rx="159.5" ry="159" fill="#40465A" />
      <defs>
        <filter
          id="filter0_d_25_7"
          x="166"
          y="51"
          width="992"
          height="991"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_25_7"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_25_7"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BullseyeLogo;
