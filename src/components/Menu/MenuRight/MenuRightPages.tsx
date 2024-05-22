import { Hint } from "@/components/UI";
import { pages, social } from "./links.const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MenuRightPages = () => {
  const path = usePathname();

  return (
    <div>
      <ul className="flex flex-row gap-10 sm:gap-12 md:flex-col md:gap-2 ">
        {pages.map((page) => (
          <li key={page.path} className="w-fit">
            <Link
              href={page.path}
              className={cn(
                "block rounded-md border-2 border-dashed px-3 py-1 text-lg font-bold uppercase tracking-wider transition md:w-32",
                path === page.path
                  ? "border-primary text-foreground"
                  : "border-border/70 text-foreground/70 hover:border-border hover:text-foreground md:border-background",
              )}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuRightPages;
