import { Metadata } from "next";
import Project from "@/components/Project/Project";

export const metadata: Metadata = {
  title: {
    template: "%s | Case Study",
    default: "Project",
  },
  description: "A quick introduction to who I am and what I do",
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Project slug={params.slug} />
    </div>
  );
}
