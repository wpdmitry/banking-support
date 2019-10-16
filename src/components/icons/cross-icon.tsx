import React from "react";

import { IconProps } from "./models";

function CrossIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      >
        <path d="M15.738 5.838l-9.9 9.9M15.738 15.738l-9.9-9.9" />
      </g>
    </svg>
  );
}

export default CrossIcon;
