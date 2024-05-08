"use client";

import { useState } from "react";
import AIChatBox from "./AIChatBox";
import { IconChat } from "../Icons";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <button onClick={() => setChatBoxOpen(true)}>
        <IconChat className="h-4 w-4" />
      </button>

      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
