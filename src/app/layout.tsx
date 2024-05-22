import type { Metadata } from "next";
import MenuRight from "@/components/Menu/MenuRight/MenuRight";

import "./font.css";
import "./globals.css";
import FooterSocial from "@/components/Footer/FooterSocial";

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
        <div className="custom-scroll flex h-screen w-full flex-col overflow-y-scroll">
          <div className="z-50 w-full md:fixed md:right-0 md:top-0 md:w-fit">
            <MenuRight />
          </div>
          <div className="flex w-full flex-col items-start justify-start lg:items-center">
            <div className="3xl:max-w-8xl w-full pb-20 md:py-12 md:pl-12 md:pr-64 lg:max-w-2xl lg:px-12 xl:max-w-4xl 2xl:max-w-5xl">
              {children}
            </div>
          </div>
          <footer className="md:hidden">
            <FooterSocial />
          </footer>
        </div>
      </body>
    </html>
  );
}
