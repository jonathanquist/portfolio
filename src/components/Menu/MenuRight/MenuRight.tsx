"use client";

import {
  Image,
  ImageComponent,
  ImageFallback,
  Separator,
} from "@/components/UI";
import MenuRightSocial from "./MenuRightSocial";
import MenuRightPages from "./MenuRightPages";
import AIChatButton from "@/components/AIChat/AIChatButton";
import MenuRightHomeButton from "./MenuRightHomeButton";

const MenuRight = () => {
  return (
    <div className="flex h-screen w-full flex-col items-start gap-6 py-12 pl-4 pr-8">
      <MenuRightHomeButton />
      <Separator className="w-20" />
      <MenuRightSocial />
      <Separator className="w-20" />
      <MenuRightPages />
      <Separator className="w-20" />
      <AIChatButton />
    </div>
  );
};

export default MenuRight;
