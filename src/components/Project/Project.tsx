import MenuShortcut from '../Menu/MenuShortcut/MenuShortcut';

import nrk1 from '../../lib/case-study/nrk-1.json';
import SectionIntro from './SectionIntro';

const caseStudies = [nrk1];

type ProjectProps = {
  slug: string;
};

const Project = ({ slug }: ProjectProps) => {
  const currentProject = caseStudies.find((project) => project.slug === slug);

  console.log(slug, currentProject);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full flex">
      <div className="w-36">
        <MenuShortcut />
      </div>
      <div className="flex-1">
        <SectionIntro json={currentProject} />
      </div>
    </div>
  );
};

export default Project;
