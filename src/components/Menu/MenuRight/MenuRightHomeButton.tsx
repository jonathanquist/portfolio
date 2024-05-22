import { Hint } from "@/components/UI";
import Link from "next/link";

const MenuRightHomeButton = () => {
  return (
    <div>
      <Hint label="Home">
        <Link
          href="/"
          className="flex font-caviar text-5xl lowercase text-primary sm:text-6xl md:text-3xl"
        >
          Jonathan <span className="block font-caviar md:hidden">:Quist</span>
        </Link>
      </Hint>
    </div>
  );
};

export default MenuRightHomeButton;
