import Link from "next/link";
import { Button } from "../../UI";
import nrk1 from "../../../lib/case-study/nrk-1.json";
import Image from "next/image";

const list = [
  {
    id: "nrk-1",
    title: "Handy website for a Horse Club, part 1",
    href: "/projects/handy-website-for-a-horse-club-part-1",
    file: nrk1,
  },
  {
    id: "reel",
    title: "Reel",
    href: "/reel",
  },
];

const ProjectList = () => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h2 className="uppercase">Projects</h2>
      <div className="flex w-full flex-col gap-8 xl:flex-row">
        {list.map((project) => {
          if (!project.file) {
            return (
              <Link
                href={project.href}
                key={project.id}
                className="w-full xl:w-1/2"
              >
                <Button
                  size="card"
                  grow={true}
                  className="bg-[url(/images/preview_reel.png)] bg-center"
                >
                  <p className="text-wrap px-4 py-6 text-foreground drop-shadow-white">
                    {project.title}
                  </p>
                </Button>
              </Link>
            );
          }

          const { "img-preview": imgPrev } = project.file;
          return (
            <Link
              href={project.href}
              key={project.id}
              className="w-full xl:w-1/2"
            >
              <Button
                size="card"
                grow={true}
                style={{
                  backgroundImage: `url(${imgPrev})`,
                }}
                className="bg-center"
              >
                <p className="text-wrap px-4 py-6 text-foreground drop-shadow-white">
                  {project.title}
                </p>
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
