"use client";

import { useState } from "react";
import AIChatBox from "./AIChatBox";
import { IconChat } from "../Icons";
import { Button } from "../UI";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setChatBoxOpen(true)} className="w-full">
        <IconChat className="h-4 w-4" /> Chatbot
      </Button>

      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
