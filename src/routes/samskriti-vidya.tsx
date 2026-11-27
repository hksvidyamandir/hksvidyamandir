import { createFileRoute } from "@tanstack/react-router";
import { SamskritiVidyaPage } from "@/components/site/vidya/SamskritiVidyaPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/samskriti-vidya")({
  head: () =>
    seo(
      "Samskriti Vidya — Culture, Arts, Languages & Heritage",
      "Samskriti Vidya at HKS Vidyamandir: music, dance, theatre, art, English/Hindi/Kannada, twelve-month festival calendar, Karnataka crafts and Annual Day.",
      "/samskriti-vidya",
    ),
  component: SamskritiVidyaPage,
});
