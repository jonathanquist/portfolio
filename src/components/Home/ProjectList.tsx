import Link from 'next/link';
import { Button } from '../UI';
import nrk1 from '../../lib/case-study/nrk-1.json';

const list = [
  {
    id: 'nrk-1',
    title: 'Handy website for a Horse Club, part 1',
    href: '/projects/handy-website-for-a-horse-club-part-1',
    file: nrk1,
  },
  {
    id: 'reel',
    title: 'Reel',
    href: '/reel',
    file: false,
  },
];

const ProjectList = () => {
  return (
    <div className="flex flex-col">
      <div>PROJECTS</div>
      <div className="flex">
        {list.map((project) => (
          <Link href={project.href} key={project.id}>
            <Button>{project.title}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
