import { Hint } from "@/components/UI";
import { social } from "./links.const";
import Link from "next/link";

const MenuRightSocial = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="hidden">Social media</h2>
      <p className="text-lg text-foreground/70">You can reach me at:</p>
      <div className="flex gap-2 text-foreground">
        {social.map((item) => (
          <Hint key={item.link} label={item.tooltip}>
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.tooltip}
            >
              <item.Icon className="h-5 w-5 opacity-70 transition-opacity duration-200 hover:opacity-100" />
            </Link>
          </Hint>
        ))}
      </div>
    </div>
  );
};

export default MenuRightSocial;
