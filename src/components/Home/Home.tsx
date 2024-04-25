import Link from 'next/link';
import { IconCoffee, IconFile } from '../Icons';
import ProjectList from './ProjectList';
import { Button } from '../UI';

const Home = () => {
  return (
    <div>
      <div>
        <p>Tjo! This is Jonathan's page,</p>
        <p>He's a designer with an extra eye</p>
        <p>for UX, visual design and front-end</p>
      </div>
      <div>
        <Link href="/about">
          <Button>
            Get to know him <IconCoffee className="w-5 h-5" />
          </Button>
        </Link>
      </div>
      <ProjectList />
    </div>
  );
};

export default Home;
