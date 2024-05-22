import Link from "next/link";
import { IconCode, IconCoffee, IconEdit, IconFile, IconUsers } from "../Icons";
import ProjectList from "./ProjectList";
import { Button, Card, Separator } from "@/components/UI";

const Home = () => {
  const iconClass = "h-6 w-6 md:h-8 md:w-8 xl:h-14 xl:w-14";
  const listClass =
    "flex flex-col items-center gap-2 text-2xl md:text-3xl xl:text-4xl";

  return (
    <div className="flex flex-col items-center gap-16 px-8">
      <h1 className="hidden">Front page</h1>
      <Card className="flex w-full flex-col items-start gap-6 text-3xl font-bold md:gap-4 md:text-3xl xl:gap-10 xl:text-5xl">
        <p>Tjo! This is Jonathan&apos;s portfolio</p>
        <p>A designer & developer with focus on</p>
        <Separator className="bg-background/40" />
        <ul className="flex w-full items-center justify-between">
          <li className={listClass}>
            <IconUsers className={iconClass} />
            UX
          </li>
          <Separator
            orientation="vertical"
            className="h-10 bg-background/40 xl:h-16"
          />

          <li className={listClass}>
            <IconEdit className={iconClass} />
            Visual Design
          </li>
          <Separator
            orientation="vertical"
            className="h-10 bg-background/40 xl:h-16"
          />
          <li className={listClass}>
            <IconCode className={iconClass} />
            Frontend
          </li>
        </ul>
      </Card>
      <div>
        <Link href="/about">
          <Button size="lg">
            Get to know me <IconCoffee className="h-5 w-5" />
          </Button>
        </Link>
      </div>
      <Separator />
      <ProjectList />
    </div>
  );
};

export default Home;
