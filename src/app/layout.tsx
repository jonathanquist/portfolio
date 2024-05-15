import type { Metadata } from "next";
import MenuRight from "@/components/Menu/MenuRight/MenuRight";

import "./font.css";
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
        <div className="custom-scroll flex w-full overflow-y-scroll">
          <div className="flex flex-1 flex-col items-end justify-start">
            <div className="w-full max-w-5xl px-12 py-12">{children}</div>
          </div>
          <div className="sticky top-0">
            <MenuRight />
          </div>
        </div>
      </body>
    </html>
  );
}
