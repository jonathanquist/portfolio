import type { Metadata } from "next";
import MenuRight from "@/components/Menu/MenuRight/MenuRight";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Jonathan Quist",
    default: "Welcome",
  },
  description: "Check out my smart porfolio website with a custom AI chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full">
          <div className="flex-1">{children}</div>
          <div className="w-48">
            <MenuRight />
          </div>
        </div>
      </body>
    </html>
  );
}
