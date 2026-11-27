import { createFileRoute } from "@tanstack/react-router";
import { KrishiVidyaPage } from "@/components/site/vidya/KrishiVidyaPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/krishi-vidya")({
  head: () =>
    seo(
      "Krishi Vidya — Organic Farming, Horticulture & Sustainability",
      "Krishi Vidya at HKS Vidyamandir: organic farming, horticulture, Bengaluru seasonal gardening, composting and environmental science woven into the weekly timetable, Nursery to Grade 12.",
      "/krishi-vidya",
    ),
  component: KrishiVidyaPage,
});
