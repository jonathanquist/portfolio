"use client";

import { Separator } from "@/components/UI";
import MenuRightSocial from "./MenuRightSocial";
import MenuRightPages from "./MenuRightPages";
import AIChatButton from "@/components/AIChat/AIChatButton";
import MenuRightHomeButton from "./MenuRightHomeButton";

const MenuRight = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10 px-8 py-12 md:h-screen md:w-52 md:items-start md:pl-4 md:pr-8">
      <MenuRightHomeButton />
      <Separator className="hidden md:block md:w-20" />
      <MenuRightSocial />
      <Separator className="hidden w-32 md:block md:w-20" />
      <MenuRightPages />
      <Separator className="w-32 md:w-20" />
      <AIChatButton />
    </div>
  );
};

export default MenuRight;
