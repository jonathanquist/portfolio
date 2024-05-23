"use client";

import { Button, Image, ImageComponent, ImageFallback } from "@/components/UI";
import { images } from "./images.const";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconOpen } from "../../Icons";

const isTouchDevice = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(pointer: coarse)").matches;
  }
  return false;
};

const Reel = () => {
  const [visible, setVisible] = useState(new Array(images.length).fill(false));
  const [currentImage, setCurrentImage] = useState<string>("");
  const [isTouch, setIsTouch] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (isTouch === undefined) {
      return;
    }

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
  }, [visible, isTouch]);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-8 px-8 md:gap-16">
      {isTouch
        ? images.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "reel-image transition duration-500",
                visible[index] ? "opacity-100" : "translate-y-40 opacity-0",
              )}
            >
              <button
                onClick={() =>
                  setCurrentImage(currentImage !== image.id ? image.id : "")
                }
              >
                <Image
                  alt={image.alt}
                  className="w-fit bg-transparent shadow-xl"
                >
                  <ImageComponent
                    src={image.src}
                    alt={image.alt}
                    className="h-auto max-h-[600px] w-full object-contain"
                    width={0}
                    height={0}
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="100vw"
                    priority={index < 3}
                  />
                  <ImageFallback>{image.alt}</ImageFallback>
                </Image>
              </button>
              {currentImage === image.id && (
                <div className="flex flex-col items-center justify-between gap-4 rounded-b-lg border-2 border-t-0 border-dashed border-secondary p-8 md:flex-row">
                  <p className="font-bold">{image.alt}</p>
                  <Link href={image.src} target="_blank">
                    <Button>
                      Open <IconOpen className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ))
        : images.map((image, index) => (
            <Link
              href={image.src}
              target="_blank"
              key={image.id}
              className={cn(
                "reel-image group relative transition duration-500",
                visible[index] ? "opacity-100" : "translate-y-40 opacity-0",
              )}
            >
              <Image alt={image.alt} className="w-fit bg-transparent shadow-xl">
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

              <div className="absolute right-0 top-0 z-50 hidden items-center justify-center rounded-bl-md bg-background/40 p-4 text-secondary group-hover:flex">
                <IconOpen className="h-4 w-4" />
              </div>
            </Link>
          ))}
    </div>
  );
};

export default Reel;
