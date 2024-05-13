"use client";

import { Image, ImageComponent, ImageFallback } from "@/components/UI";
import MenuRightSocial from "./MenuRightSocial";
import MenuRightPages from "./MenuRightPages";
import AIChatButton from "@/components/AIChat/AIChatButton";
import MenuRightHomeButton from "./MenuRightHomeButton";

const MenuRight = () => {
  const hrClass = "w-20 border-muted/20";

  return (
    <div className="sticky right-0 top-0 flex h-screen flex-col items-start gap-6 bg-background py-12 pl-4 pr-8">
      <MenuRightHomeButton />
      <hr className={hrClass} />
      <MenuRightSocial />
      <hr className={hrClass} />
      <MenuRightPages />
      <hr className={hrClass} />
      <AIChatButton />
    </div>
  );
};

export default MenuRight;
