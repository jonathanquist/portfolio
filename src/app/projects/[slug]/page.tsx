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
  const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post: { slug: any }) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <Project slug={params.slug} />;
}
