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
                "block w-20 rounded-md px-2 py-1 font-bold uppercase transition",
                path === page.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:scale-110 hover:bg-primary/25 hover:text-primary-foreground",
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
