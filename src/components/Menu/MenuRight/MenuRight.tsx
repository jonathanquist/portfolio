'use client';

import { Image, ImageComponent, ImageFallback } from '@/components/UI';
import MenuRightSocial from './MenuRightSocial';
import MenuRightPages from './MenuRightPages';

const MenuRight = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full relative h-12">
        <Image className="bg-transparent">
          <ImageComponent
            src="/images/logo_name.png"
            alt="Logo"
            className="object-contain aspect-auto"
            sizes="100%"
            fill
          />
          <ImageFallback>Jonathan Quist</ImageFallback>
        </Image>
      </div>
      <MenuRightSocial />
      <MenuRightPages />
    </div>
  );
};

export default MenuRight;
