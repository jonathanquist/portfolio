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
        <div className="custom-scroll h-screen w-full overflow-y-scroll">
          <div className="flex w-full flex-col items-start justify-start lg:items-center">
            <div className="3xl:max-w-8xl w-full py-12 pl-12 pr-64 lg:max-w-2xl lg:px-12 xl:max-w-3xl 2xl:max-w-5xl">
              {children}
            </div>
          </div>
          <div className="fixed right-0 top-0 z-50 w-fit">
            <MenuRight />
          </div>
        </div>
      </body>
    </html>
  );
}
