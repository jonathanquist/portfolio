"use client";

import { Image, ImageComponent, ImageFallback } from "@/components/UI";
import { images } from "./images.const";

const Reel = () => {
  return (
    <div className="h-screen w-full">
      {images.map((image) => (
        <div key={image.id} className="">
          <Image alt={image.alt} className="w-full bg-transparent">
            <ImageComponent
              src={image.src}
              alt={image.alt}
              className="h-auto w-full object-contain"
              width={0}
              height={0}
              sizes="100vw"
            />
            <ImageFallback>{image.alt}</ImageFallback>
          </Image>
        </div>
      ))}
    </div>
  );
};

export default Reel;
