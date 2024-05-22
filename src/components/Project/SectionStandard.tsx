import React from "react";
import CaseStudyImage from "./CaseStudyImage";
import { getSectionTitle } from "./section.const";
import { Separator } from "../UI";

type ImageProps = {
  src: string;
  alt: string;
  position: string;
};

type Subsection = {
  title: string;
  text: string[];
  images: ImageProps[];
};

type SectionProps = {
  section: Subsection[];
  name: string;
};

const SectionStandard = ({ section, name }: SectionProps) => {
  const title = getSectionTitle(name);

  if (!section) {
    return <div>Missing data</div>;
  }

  return (
    <div id={name}>
      <div className="mb-16 mt-28 flex h-40 w-full items-center justify-center gap-6 bg-primary px-6 py-8 md:h-48 md:rounded-xl md:py-12">
        <div className="w-48 md:w-64">
          <h2 className="text-right text-2xl font-bold uppercase md:text-5xl">
            {title.sectionName}
          </h2>
        </div>
        <Separator orientation="vertical" />
        <div className="w-48 md:w-64">
          <ul className="text-md list-inside list-disc font-bold md:text-xl">
            {title.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-20 md:space-y-12">
        {section.map((subsection, index) => (
          <Subsection key={index} subsection={subsection} />
        ))}
      </div>
    </div>
  );
};

const Subsection = ({ subsection }: { subsection: Subsection }) => {
  const { title, text, images } = subsection;
  const { src, alt, position } = images?.[0] || {};

  let content: (string | JSX.Element)[] = [...text];
  const image = src && alt && <CaseStudyImage src={src} alt={alt} />;

  if (image) {
    if (position === "before") {
      content = [image, ...content];
    } else if (position === "middle" && text.length > 1) {
      content.splice(text.length / 2, 0, image);
    } else if (position === "after") {
      content.push(image);
    }
  }

  return (
    <div className="section space-y-6">
      <h3>{title}</h3>
      {content.map((item, index) => {
        if (typeof item === "string") {
          return <p key={index}>{item}</p>;
        } else {
          return <React.Fragment key={index}>{item}</React.Fragment>;
        }
      })}
    </div>
  );
};

export default SectionStandard;
