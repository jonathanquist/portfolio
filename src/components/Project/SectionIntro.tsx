import React from "react";
import { Card, Image, ImageComponent, ImageFallback } from "../UI";
import { CaseStudyProps } from "./Project";

interface IntroProps {
  json: CaseStudyProps;
}

interface InfoProps {
  title: string;
  content: string;
}

const InfoSection = ({ title, content }: InfoProps) => (
  <div className="md:w-1/4">
    <p className="text-xl font-bold md:mb-2">{title}</p>
    <p>{content}</p>
  </div>
);

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
      <div className="mb-20 flex flex-col gap-12 md:mb-0">
        <div className="hidden flex-col gap-8 px-8 md:flex md:flex-row md:justify-between md:gap-4 md:px-0">
          <InfoSection title="What" content={what} />
          <InfoSection title="Why" content={why} />
          <InfoSection title="How" content={how} />
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
        <div className="px-8">
          <h1 className="text-center text-primary">
            <span className="text-foreground">{title}</span>
          </h1>
        </div>

        <div className="flex flex-col gap-6 px-8 md:hidden">
          <InfoSection title="What" content={what} />
          <InfoSection title="Why" content={why} />
          <InfoSection title="How" content={how} />
        </div>
      </div>

      <div className="section space-y-12">
        <div className="space-y-6">
          <h2 className="hidden">Intro</h2>
          <p>{introText}</p>
        </div>
        <Card className="flex flex-col gap-2 text-center text-xl md:text-3xl">
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
