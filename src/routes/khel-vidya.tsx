import { createFileRoute } from "@tanstack/react-router";
import { KhelVidyaPage } from "@/components/site/vidya/KhelVidyaPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/khel-vidya")({
  head: () =>
    seo(
      "Khel Vidya — Sports, Fitness & Physical Education",
      "Khel Vidya at HKS Vidyamandir: professional coaching across 24 outdoor, indoor and Olympic-style sports, yoga, meditation, Sports Day and a full PE curriculum.",
      "/khel-vidya",
    ),
  component: KhelVidyaPage,
});
