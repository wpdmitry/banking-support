import React from "react";

import { IconProps } from "./models";

function ChatSendIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M19.975 13.235c1.365-.682 1.368-1.786 0-2.47L4.93 3.246c-1.365-.682-2.195.1-1.853 1.758l1.005 4.863c.12.584.64 1.107 1.176 1.169l5.94.689c1.312.152 1.312.398 0 .55l-5.94.69c-.53.06-1.057.59-1.176 1.168l-1.005 4.863c-.341 1.653.485 2.441 1.853 1.758l15.045-7.52z"
      />
    </svg>
  );
}

export default ChatSendIcon;
