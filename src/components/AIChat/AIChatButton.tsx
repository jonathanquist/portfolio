"use client";

import { useState } from "react";
import AIChatBox from "./AIChatBox";
import { IconChat } from "../Icons";
import { Button } from "../UI";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setChatBoxOpen(true)}
        className="fixed bottom-8 right-8 mt-auto flex h-20 w-20 flex-col items-center justify-center gap-0 rounded-full bg-primary shadow-md"
      >
        <IconChat className="h-4 w-4" /> Chatbot
      </Button>

      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
