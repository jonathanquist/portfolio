import React from "react";
import { Card, Image, ImageComponent, ImageFallback } from "../UI";
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
    <div id="intro" className="space-y-12">
      <div className="flex justify-between">
        <div className="w-1/4">
          <p className="mb-2 font-bold">What</p>
          <p>{what}</p>
        </div>
        <div className="w-1/4">
          <p className="mb-2 font-bold">Why</p>
          <p>{why}</p>
        </div>
        <div className="w-1/4">
          <p className="mb-2 font-bold">How</p>
          <p>{how}</p>
        </div>
      </div>
      <div className="">
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
      <div className="section space-y-12">
        <h1 className="text-center text-primary">
          <span className="text-foreground">{title}</span>
        </h1>
        <div className="space-y-6">
          <h2 className="hidden">Intro</h2>
          <p>{introText}</p>
        </div>
        <Card className="flex flex-col gap-2 text-center text-3xl">
          <span className="font-bold">Hypothesis</span>

          {hypothesis}
        </Card>
        <div className="space-y-6">
          <h3>My Role</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionIntro;
