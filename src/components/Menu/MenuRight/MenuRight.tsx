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
    <div className="sticky right-0 top-0 flex h-screen w-full flex-col items-start gap-6 bg-background py-12 pl-4 pr-8">
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
