"use client";

import MenuShortcut from "../Menu/MenuShortcut/MenuShortcut";
import nrk1 from "../../lib/case-study/nrk-1.json";
import SectionIntro from "./SectionIntro";
import SectionStandard from "./SectionStandard";
import SectionOutro from "./SectionOutro";

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
    <>
      <div className="fixed left-8 top-1/2 hidden w-36 -translate-y-1/2 lg:block">
        <MenuShortcut />
      </div>
      <div className="flex w-full">
        <div className="w-full md:flex-1">
          <SectionIntro json={currentProject} />
          <SectionStandard
            section={understandingUser}
            name="understanding-user"
          />
          <SectionStandard section={startingDesign} name="starting-design" />
          <SectionStandard section={refiningDesign} name="refining-design" />
          <SectionStandard section={goingForward} name="going-forward" />
          <SectionOutro json={currentProject} />
        </div>
      </div>
    </>
  );
};

export default Project;
