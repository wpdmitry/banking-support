import React from "react";

import { IconProps } from "./models";

function ChatTextIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M10.37 17.875l-.995-3.365h-4.58L3.8 17.875H1L5.526 4h3.208l4.535 13.875h-2.9zM7.052 6.654l-1.671 5.683h3.406L7.117 6.654h-.064zm11.158 9.298c1.22 0 2.196-.808 2.196-1.962v-.778l-2.087.153c-1.102.077-1.69.539-1.69 1.318s.624 1.269 1.581 1.269zM17.353 18c-1.915 0-3.352-1.279-3.352-3.173 0-1.923 1.383-3.01 3.921-3.173l2.485-.164v-.702c0-1.019-.66-1.576-1.744-1.576-.957 0-1.626.538-1.753 1.307h-2.412c.072-2.019 1.79-3.413 4.274-3.413C21.329 7.106 23 8.5 23 10.616v7.259h-2.548V16.24h-.054c-.542 1.106-1.77 1.76-3.045 1.76z"
      />
    </svg>
  );
}

export default ChatTextIcon;
