import { Image, ImageComponent, ImageFallback } from '@/components/UI';
import { images } from './images.const';

const Reel = () => {
  return (
    <div className="w-full h-screen">
      {images.map((image) => (
        <div key={image.id} className="">
          <Image className="bg-transparent w-full">
            <ImageComponent
              src={image.src}
              alt={image.alt}
              className="object-contain w-full h-auto"
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
