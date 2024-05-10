import Link from "next/link";
import { IconCoffee, IconFile } from "../Icons";
import ProjectList from "./ProjectList";
import { Button } from "../UI";

const Home = () => {
  return (
    <div>
      <div>
        <p>Tjo! This is Jonathan&apos;s page,</p>
        <p>He&apos;s a designer with an extra eye</p>
        <p>for UX, visual design and front-end</p>
      </div>
      <div>
        <Link href="/about">
          <Button>
            Get to know him <IconCoffee className="h-5 w-5" />
          </Button>
        </Link>
      </div>
      <ProjectList />
    </div>
  );
};

export default Home;
