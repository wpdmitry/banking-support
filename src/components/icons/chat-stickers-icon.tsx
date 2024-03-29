import React from "react";

import { IconProps } from "./models";

function ChatStickersIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#B2B2B2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        d="M20.995 12.328c.003-.107.005-.214.005-.323 0-2.488-.88-4.612-2.638-6.371C16.607 3.878 14.487 3 12 3s-4.61.878-6.368 2.634C3.877 7.394 3 9.517 3 12.005c0 2.488.877 4.61 2.632 6.366 1.654 1.655 3.63 2.531 5.928 2.629a7.405 7.405 0 0 1-.247-1.936c0-1.982.7-3.672 2.097-5.07 1.397-1.399 3.087-2.098 5.067-2.098.9 0 1.739.144 2.518.432L11.563 21"
      />
    </svg>
  );
}

export default ChatStickersIcon;
