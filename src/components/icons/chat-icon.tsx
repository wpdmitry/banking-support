import React from "react";

import { IconProps } from "./models";


function ChatIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
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
        <path d="M21.459 5.632a2.99 2.99 0 0 0-2.731-1.999 66.047 66.047 0 0 0-13.513 0c-1.196.14-2.507.826-2.675 2a28.313 28.313 0 0 0 0 9.988c.168 1.175 1.482 1.86 2.675 1.998.896.091 1.438.15 2.334.204v-.002s3.006.493.536 3.885c5.508-1.338 7.39-3.83 7.39-3.83h-.023a65.655 65.655 0 0 0 3.276-.257 2.987 2.987 0 0 0 2.731-1.998 28.22 28.22 0 0 0 0-9.989zM7.857 9.367h8.285M7.857 12.715h8.285" />
      </g>
    </svg>
  );
}

export default ChatIcon;
