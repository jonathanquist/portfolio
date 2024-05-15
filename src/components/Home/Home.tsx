import Link from "next/link";
import { IconCoffee, IconFile } from "../Icons";
import ProjectList from "./ProjectList";
import { Button, Card, Separator } from "@/components/UI";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="hidden">Front page</h1>
      <Card className="flex w-full flex-col items-start gap-2 bg-secondary p-10 text-5xl font-bold text-secondary-foreground">
        <p>Tjo! This is Jonathan&apos;s page,</p>
        <p>He&apos;s a designer with an extra eye</p>
        <p>for UX, visual design and front-end</p>
      </Card>
      <div>
        <Link href="/about">
          <Button size="lg">
            Get to know him <IconCoffee className="h-5 w-5" />
          </Button>
        </Link>
      </div>
      <Separator />
      <ProjectList />
    </div>
  );
};

export default Home;
