import { Hint } from "@/components/UI";
import { social } from "./links.const";
import Link from "next/link";

const MenuRightSocial = () => {
  return (
    <div className="hidden flex-col gap-1 md:flex">
      <h2 className="hidden">Social media</h2>
      <p className="text-lg text-foreground/70">You can reach me at:</p>
      <div className="flex gap-4 text-foreground md:gap-1">
        {social.map((item) => (
          <Hint key={item.link} label={item.tooltip}>
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.tooltip}
            >
              <item.Icon className="h-10 w-10 rounded-sm border border-dashed border-background p-1 opacity-70 transition-opacity duration-200 hover:border-foreground hover:opacity-100 md:h-7 md:w-7" />
            </Link>
          </Hint>
        ))}
      </div>
    </div>
  );
};

export default MenuRightSocial;
