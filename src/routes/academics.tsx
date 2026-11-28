import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { CbseCurriculumPage } from "@/components/site/academics/CbseCurriculumPage";

export const Route = createFileRoute("/academics")({
  head: () =>
    seo(
      "CBSE Curriculum — Nursery to Grade 12",
      "Explore the CBSE academic programme at HKS Vidyamandir: Early Years, Primary, Middle, High School and Senior Secondary with integrated NEET/JEE foundation.",
      "/academics",
    ),
  component: CbseCurriculumPage,
});
