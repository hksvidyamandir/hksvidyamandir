import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { EarlyYearsPage } from "@/components/site/academics/EarlyYearsPage";

export const Route = createFileRoute("/early-years")({
  head: () =>
    seo(
      "Early Years (Nursery – Grade 2)",
      "Explore Early Years at HKS Vidyamandir: Nursery to Grade 2 play-based, ECCE-aligned and Montessori-inspired foundation with observation-led assessment and no exams.",
      "/early-years",
    ),
  component: EarlyYearsPage,
});
