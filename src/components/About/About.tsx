"use client";

import { Button, Image, ImageComponent, ImageFallback } from "@/components/UI";
import Link from "next/link";
import { IconLink } from "../Icons";
import { aboutContent } from "./about.const";

const About = () => {
  return (
    <div>
      <div className="relative h-12 w-full">
        <Image alt="Jonathan Quist" className="bg-transparent">
          <ImageComponent
            src="/images/about.jpeg"
            alt="Me, Jonathan Quist"
            className="aspect-auto object-cover"
            sizes="100%"
            fill
          />
          <ImageFallback>No Image</ImageFallback>
        </Image>
      </div>
      <div>
        {aboutContent.map((section, index) => (
          <div key={index}>
            {section.title && <h1>{section.title}</h1>}
            {section.isQuote ? (
              <blockquote
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            ) : (
              <p dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
          </div>
        ))}
      </div>
      {/* <div>
        <h1>This is me, I'm Jonathan</h1>
        <p>
          This might not come as much of a shock to some of you, but as a fan of
          working creatively, I've come to notice that our projects usually ends
          up becoming something like a small-scaled epic journey, worthy to be
          told, written down or even sung about. It can be one of people, of
          emotions, of ups and downs, of lessons learned and hopefully of time
          well spent. It's my creed that every journey we make ends up being
          enjoyable, at least to some degree. Be it the reason why we do it in
          the first place, who we do it with, or because of the memories we end
          up making.
        </p>
        <h2>Creative philosophy</h2>
        <blockquote>
          What makes a brilliant design isn't just a great idea or an awesome
          result, but the entire journey you take to get there. To me it’s
          important that everyone enjoys themselves even when doing something
          that seems tough.
        </blockquote>
        <h2>In my spare time</h2>
        <p>
          This isn't all that I am, of course. I'm also a real person that
          enjoys a whole bunch of stuff. Be it going out exploring on my bike,
          playing games, spending countless hours organizing something that
          desperately needs it, cooking for friends, or applying myself when
          picking up a new skill, I like to spend the time doing things that
          makes me happy and content. I haven't always been the best at that
          last part, but I'm getting better.
        </p>
        <p>
          Thanks, for taking the time
          <br />~ Jonathan
        </p>
      </div> */}
      <div>
        <Link href="/about">
          <Button className="https://www.figma.com/proto/1TavRYkWcFFXcaGQn6z4cD/Workspace?node-id=1237%3A1806&scaling=contain&page-id=0%3A1&starting-point-node-id=1237%3A1806">
            View Resume <IconLink className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
