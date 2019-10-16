import React from "react";

import { IconProps } from "./models";

function DisclosureIcon(props: IconProps) {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" {...props}>
      <g fill="none" fillRule="evenodd" opacity=".9">
        <circle cx="17.5" cy="17.5" r="17.5" fill="#EEE" />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeWidth="1.4"
          d="M18 12h5v5M18 22h-5v-5"
        />
      </g>
    </svg>
  );
}

export default DisclosureIcon;
