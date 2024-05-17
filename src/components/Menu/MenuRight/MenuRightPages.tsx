import { Hint } from "@/components/UI";
import { pages, social } from "./links.const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MenuRightPages = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <ul className="flex flex-col gap-2 ">
        {pages.map((page) => (
          <li key={page.path} className="w-full">
            <Link
              href={page.path}
              className={cn(
                "block w-24 rounded-md border-2 border-dashed px-3 py-1 text-lg font-bold uppercase tracking-wider transition",
                path === page.path
                  ? " border-primary text-foreground"
                  : " border-background text-foreground/70 hover:border-border hover:text-foreground",
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
