import About from "@/components/Pages/About/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "A quick introduction to who I am and what I do",
};

export default function Page() {
  return <About />;
}
