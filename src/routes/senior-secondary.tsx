import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { SeniorSecondaryPage } from "@/components/site/academics/SeniorSecondaryPage";

export const Route = createFileRoute("/senior-secondary")({
  head: () =>
    seo(
      "Senior Secondary (Grades 11 – 12)",
      "Explore Senior Secondary at HKS Vidyamandir: Grades 11 and 12 CBSE Science and Commerce streams with integrated NEET, JEE, CUET, SAT and IELTS preparation.",
      "/senior-secondary",
    ),
  component: SeniorSecondaryPage,
});
