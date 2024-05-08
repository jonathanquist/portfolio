"use client";

import MenuShortcut from "../Menu/MenuShortcut/MenuShortcut";
import nrk1 from "../../lib/case-study/nrk-1.json";
import SectionIntro from "./SectionIntro";
import SectionStandard from "./SectionStandard";

const caseStudies = [nrk1];

export type CaseStudyProps = (typeof caseStudies)[0];

type ProjectProps = {
  slug: string;
};

const Project = ({ slug }: ProjectProps) => {
  const currentProject = caseStudies.find((project) => project.slug === slug);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  const {
    "section-understanding-user": understandingUser,
    "section-starting-design": startingDesign,
    "section-refining-design": refiningDesign,
    "section-going-forward": goingForward,
  } = currentProject;

  return (
    <div className="flex w-full">
      <div className="w-36">
        <MenuShortcut />
      </div>
      <div className="flex-1">
        <SectionIntro json={currentProject} />
        <SectionStandard
          section={understandingUser}
          name="understanding-user"
        />
        <SectionStandard section={startingDesign} name="starting-design" />
        <SectionStandard section={refiningDesign} name="refining-design" />
        <SectionStandard section={goingForward} name="going-forward" />
      </div>
    </div>
  );
};

export default Project;
