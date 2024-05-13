{
  /* <div className="relative h-12 w-full">
        <Image alt="Logo" className="bg-transparent">
          <ImageComponent
            src="/images/logo_name.png"
            alt="Logo"
            className="aspect-auto object-contain"
            sizes="100%"
            fill
          />
          <ImageFallback>Jonathan Quist</ImageFallback>
        </Image>
      </div> */
}

import { Hint } from "@/components/UI";
import Link from "next/link";

const MenuRightHomeButton = () => {
  return (
    <div>
      <Hint label="Home">
        <Link href="/" className="font-caviar text-3xl lowercase text-primary">
          Jonathan
        </Link>
      </Hint>
    </div>
  );
};

export default MenuRightHomeButton;
