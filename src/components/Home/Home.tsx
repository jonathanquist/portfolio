import Link from "next/link";
import { IconCoffee, IconFile } from "../Icons";
import ProjectList from "./ProjectList";
import { Button, Card, Separator } from "@/components/UI";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="hidden">Front page</h1>
      <Card className="flex w-full flex-col items-start gap-2 text-5xl font-bold">
        <p>Tjo! This is Jonathan&apos;s portfolio,</p>
        <p>I&apos;m a designer/developer with an extra eye</p>
        <p>for UX, visual design and front-end</p>
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
