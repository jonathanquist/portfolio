import { Metadata } from "next";
import Project from "@/components/Pages/Project/Project";

export const metadata: Metadata = {
  title: {
    template: "%s | Case Study",
    default: "Project",
  },
  description: "A quick introduction to who I am and what I do",
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const projects = [
    {
      slug: "handy-website-for-a-horse-club-part-1",
    },
  ];

  return projects.map((projects: { slug: any }) => ({
    slug: projects.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <Project slug={params.slug} />;
}
