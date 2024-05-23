import { Metadata } from "next";
import Reel from "@/components/Pages/Reel/Reel";

export const metadata: Metadata = {
  title: "Reel",
  description: "A collection of my favorite work",
};

export default function Page() {
  return <Reel />;
}
