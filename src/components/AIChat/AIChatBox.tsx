"use client";

import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";

import Link from "next/link";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { IconChat, IconClose, IconSend, IconTrash } from "../Icons";
import { Button } from "../UI";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // const scrollToBottom = () =>
  //     scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <div className="flex h-[600px] flex-col rounded border-2 border-dashed bg-background shadow-xl">
        <Button
          size="icon"
          variant="ghost"
          onClick={onClose}
          className="mb-1 ms-auto block"
        >
          <IconClose className="h-4 w-4" />
        </Button>
        <div
          ref={scrollRef}
          className="custom-scroll mt-3 h-full overflow-y-auto px-3"
        >
          {messages.map((message, index) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                id: "loading",
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}

          {error && (
            <ChatMessage
              message={{
                id: "error",
                role: "assistant",
                content: "Something went wrong. Please try again!",
              }}
            />
          )}

          {!error && messages.length === 0 && (
            <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
              <IconChat className="h-16 w-16 text-foreground/25" />
              <p className="text-lg font-medium">
                Send a message to start the AI chat!
              </p>
              <p>
                You can ask the chatbot any question about me and it will try
                its best to answer based on what is available on this page.
              </p>
              <p className="text-sm text-muted-foreground">
                A heartfelt thanks to{" "}
                <Link
                  href="https://www.youtube.com/c/codinginflow?sub_confirmation=1"
                  className="font-bold text-primary hover:underline"
                >
                  <span className="text-foreground">
                    Coding in Flow YouTube channel
                  </span>
                </Link>{" "}
                without which this would not have been possible.
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="m-3 flex items-center gap-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="text-foreground"
            title="Clear chat"
            onClick={() => setMessages([])}
          >
            <IconTrash className="h-6 w-6" />
          </Button>
          <input
            type="text"
            value={input}
            ref={inputRef}
            onChange={handleInputChange}
            placeholder="Say something..."
            className="grow rounded-md bg-secondary px-3 py-2 text-background placeholder:text-background/70 focus:outline-muted"
          />
          <Button
            size="icon"
            variant="ghost"
            type="submit"
            className="text-foreground disabled:opacity-50"
            title="Submit"
            // disabled={isLoading || input.length === 0}
            disabled={input.length === 0 || input.trim() === ""}
          >
            <IconSend className="h-6 w-6" />
          </Button>
        </form>
      </div>
    </div>
  );
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";
  return (
    <div
      className={cn(
        "mb-3 flex items-center tracking-wide",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && (
        <IconChat className="mr-2 h-4 w-4 flex-none text-secondary" />
      )}
      <div
        className={cn(
          "rounded-md px-3 py-2",
          isAiMessage ? "bg-primary" : "bg-secondary text-background",
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="font-bold text-primary hover:underline"
              >
                <span className="text-foreground" />
              </Link>
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
