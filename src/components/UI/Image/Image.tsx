import React, { createContext, useContext, useState } from "react";
import NextImage, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { Hint } from "../Hint/Hint";

interface ImgProps {
  children: React.ReactNode;
  alt: string;
  className?: string;
}

interface ImageComponentProps extends Omit<ImageProps, "src"> {
  src: string | undefined;
  alt: string;
  className?: string;
}

interface FallbackProps {
  children: React.ReactNode;
  className?: string;
}

// Create a context for the image load state
const ImageLoadContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

function Image({ children, alt, className }: ImgProps) {
  const [imageSuccessfullyLoaded, setImageSuccessfullyLoaded] = useState(true);

  // Provide the image load state to child components
  return (
    <ImageLoadContext.Provider
      value={[imageSuccessfullyLoaded, setImageSuccessfullyLoaded]}
    >
      <Hint label={alt}>
        <div
          className={cn(
            "relative flex h-full items-center justify-center overflow-hidden rounded-md bg-neutral-200",
            className,
          )}
        >
          {children}
        </div>
      </Hint>
    </ImageLoadContext.Provider>
  );
}

function ImageComponent({
  src,
  alt,
  className,
  ...props
}: ImageComponentProps) {
  // Use the image load state from context
  const imageLoadState = useContext(ImageLoadContext);
  if (!imageLoadState) {
    throw new Error("ImageComponent must be used within an Image component");
  }
  const [imageSuccessfullyLoaded, setImageSuccessfullyLoaded] = imageLoadState;

  if (!src || !imageSuccessfullyLoaded) {
    return null;
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      placeholder="empty"
      onError={() => {
        setImageSuccessfullyLoaded(false);
      }}
      className={cn(className)}
      {...props}
    />
  );
}

function ImageFallback({ children, className }: FallbackProps) {
  // Use the image load state from context
  const imageLoadState = useContext(ImageLoadContext);
  if (!imageLoadState) {
    throw new Error("ImageFallback must be used within an Image component");
  }
  const [imageSuccessfullyLoaded] = imageLoadState;

  // Only render if the image did not load successfully
  if (imageSuccessfullyLoaded) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { Image, ImageComponent, ImageFallback };
