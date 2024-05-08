"use client";

import { Image, ImageComponent, ImageFallback } from "@/components/UI";
import MenuRightSocial from "./MenuRightSocial";
import MenuRightPages from "./MenuRightPages";
import AIChatButton from "@/components/AIChat/AIChatButton";

const MenuRight = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-12 w-full">
        <Image alt="Logo" className="bg-transparent">
          <ImageComponent
            src="/images/logo_name.png"
            alt="Logo"
            className="aspect-auto object-contain"
            sizes="100%"
            fill
          />
          <ImageFallback>Jonathan Quist</ImageFallback>
        </Image>
      </div>
      <MenuRightSocial />
      <MenuRightPages />
      <AIChatButton />
    </div>
  );
};

export default MenuRight;
