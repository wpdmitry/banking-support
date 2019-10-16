import { useState, useEffect } from "react";

import ChatService, { Sticker } from "../../services/chat-service";

function useStickers() {
  const [stickers, setStickers] = useState<Sticker[]>([]);

  useEffect(() => {
    ChatService.createService()
      .getStickers()
      .then(setStickers);
  }, []);

  return { stickers };
}

export default useStickers;
