import { Image, ImageComponent, ImageFallback } from '../UI';

type ImageProps = {
  src: string;
  alt: string;
};

const CaseStudyImage = ({ src, alt }: ImageProps) => (
  <div>
    <Image>
      <ImageComponent
        src={src}
        alt={alt}
        className="object-contain w-full h-auto"
        width={0}
        height={0}
        sizes="100vw"
      />
      <ImageFallback>{alt}</ImageFallback>
    </Image>
  </div>
);

export default CaseStudyImage;
