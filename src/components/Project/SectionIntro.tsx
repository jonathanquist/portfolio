import React from 'react';

interface IntroProps {
  json: any;
}

const SectionIntro = ({ json }: IntroProps) => {
  return <div>{json.title}</div>;
};

export default SectionIntro;
