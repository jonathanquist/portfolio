import React from "react";
import { Button, Card, Image, ImageComponent, ImageFallback } from "../UI";
import { CaseStudyProps } from "./Project";
import Link from "next/link";
import { IconCoffee, IconFile, IconLink } from "../Icons";

interface IntroProps {
  json: CaseStudyProps;
}

const SectionOutro = ({ json }: IntroProps) => {
  const { "url-prototype": prototype, "url-deck": deck } = json;

  if (!prototype || !deck) {
    return <div>Missing data</div>;
  }

  return (
    <div id="outro" className="section space-y-12 py-20">
      <div>
        <p className="text-center text-muted">
          For a more, please check out the linked resources below
        </p>
      </div>
      <div className="flex justify-center gap-16 text-3xl">
        <Link href={deck} className="flex flex-col items-center gap-2">
          <Button
            variant="ghost"
            className="h-fit bg-background transition duration-200 hover:bg-primary"
          >
            <IconFile className="h-64 w-64 text-foreground" />
          </Button>
          <span className="text-foreground">Project Slide Deck</span>
        </Link>
        <Link href={prototype} className="flex flex-col items-center gap-2">
          <Button
            variant="ghost"
            className="h-fit bg-background transition duration-200 hover:bg-primary"
          >
            <IconLink className="h-64 w-64 text-foreground" />
          </Button>
          <span className="text-foreground">Project Slide Deck</span>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center text-muted">
          I thank you for taking your time. If this piqued your interest, then
          don&apos;t hesitate to get in touch
        </p>
      </div>
      <div className="text-center">
        <Link href="mailto:jonathan.quist@outlook.com?subject=Let's%20talk!">
          <Button size="lg">
            Let&apos;s talk! <IconCoffee className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SectionOutro;
