import React from 'react';
import CaseStudyImage from './CaseStudyImage';
import { getSectionTitle } from './section.const';

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
      <div className="flex">
        <div>
          <h2>{title.sectionName}</h2>
        </div>
        <div>
          <ul>
            {title.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>

      {section.map((subsection, index) => (
        <Subsection key={index} subsection={subsection} />
      ))}
    </div>
  );
};

const Subsection = ({ subsection }: { subsection: Subsection }) => {
  const { title, text, images } = subsection;
  const { src, alt, position } = images?.[0] || {};

  let content: (string | JSX.Element)[] = [...text];
  const image = src && alt && <CaseStudyImage src={src} alt={alt} />;

  if (image) {
    if (position === 'before') {
      content = [image, ...content];
    } else if (position === 'middle' && text.length > 1) {
      content.splice(text.length / 2, 0, image);
    } else if (position === 'after') {
      content.push(image);
    }
  }

  return (
    <div>
      <h3>{title}</h3>
      {content.map((item, index) => {
        if (typeof item === 'string') {
          return <p key={index}>{item}</p>;
        } else {
          return <React.Fragment key={index}>{item}</React.Fragment>;
        }
      })}
    </div>
  );
};

export default SectionStandard;
