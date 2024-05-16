"use client";

import { Image, ImageComponent, ImageFallback } from "@/components/UI";
import { images } from "./images.const";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Reel = () => {
  const [visible, setVisible] = useState(new Array(images.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisible((prevVisible) => {
            const newVisible = [...prevVisible];
            newVisible[index] = true;
            return newVisible;
          });
        }
      });
    });

    const imgElements = document.querySelectorAll(".reel-image");

    imgElements.forEach((img, index) => {
      observer.observe(img);
    });

    return () => {
      imgElements.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, [visible]);

  return (
    <div className="flex w-full flex-col items-center gap-16">
      {images.map((image, index) => (
        <Link
          href={image.src}
          target="_blank"
          key={image.id}
          className={cn(
            "reel-image transition duration-500",
            visible[index] ? "opacity-100" : "translate-y-40 opacity-0",
          )}
        >
          <Image alt={image.alt} className="w-fit bg-transparent">
            <ImageComponent
              src={image.src}
              alt={image.alt}
              className="h-auto max-h-[600px] w-full object-contain"
              width={0}
              height={0}
              loading="lazy"
              sizes="100vw"
            />
            <ImageFallback>{image.alt}</ImageFallback>
          </Image>
        </Link>
      ))}
    </div>
  );
};

export default Reel;
