import { Image, ImageComponent, ImageFallback } from "../UI";

type ImageProps = {
  src: string;
  alt: string;
};

const CaseStudyImage = ({ src, alt }: ImageProps) => (
  <div>
    <Image alt={alt}>
      <ImageComponent
        src={src}
        alt={alt}
        className="h-auto w-full object-contain"
        width={0}
        height={0}
        sizes="100vw"
      />
      <ImageFallback>{alt}</ImageFallback>
    </Image>
  </div>
);

export default CaseStudyImage;
