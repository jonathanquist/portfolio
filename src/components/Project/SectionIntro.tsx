import React from "react";
import { Image, ImageComponent, ImageFallback } from "../UI";
import { CaseStudyProps } from "./Project";

interface IntroProps {
  json: CaseStudyProps;
}

const SectionIntro = ({ json }: IntroProps) => {
  const {
    slug,
    title,
    "img-hero": imgHero,
    "section-intro": sectionIntro,
  } = json;
  const {
    what,
    why,
    how,
    "intro-text": introText,
    hypothesis,
    role,
  } = sectionIntro;

  if (!slug || !title || !imgHero || !sectionIntro) {
    return <div>Missing data</div>;
  }

  return (
    <div id="intro">
      <div className="flex">
        <div>
          <p>What</p>
          <p>{what}</p>
        </div>
        <div>
          <p>Why</p>
          <p>{why}</p>
        </div>
        <div>
          <p>How</p>
          <p>{how}</p>
        </div>
      </div>
      <div className="px-64">
        <Image alt={title}>
          <ImageComponent
            src={imgHero}
            alt={title}
            className="h-auto w-full object-contain"
            width={0}
            height={0}
            sizes="100vw"
          />
          <ImageFallback>{slug}</ImageFallback>
        </Image>
      </div>
      <div>
        <h1>{title}</h1>
        <h2 className="hidden">Intro</h2>
        <p>{introText}</p>
        <blockquote>{hypothesis}</blockquote>
        <h3>My Role</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default SectionIntro;
