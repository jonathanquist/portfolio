"use client";

import { Hint } from "@/components/UI";
import { social } from "../Menu/MenuRight/links.const";
import Link from "next/link";

const FooterSocial = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 border-t-2 border-dashed border-background bg-secondary px-8 pb-16 pt-10 text-background">
      <h2 className="hidden">Social media</h2>
      <p className="text-xl">You can reach me at:</p>
      <div className="flex gap-6 md:gap-1">
        {social.map((item) => (
          <Hint key={item.link} label={item.tooltip}>
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.tooltip}
            >
              <item.Icon className="h-12 w-12 rounded-sm border border-dashed border-background p-2 opacity-70 transition-opacity duration-200 hover:border-foreground hover:opacity-100 md:h-7 md:w-7" />
            </Link>
          </Hint>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
