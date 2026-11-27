import { createFileRoute } from "@tanstack/react-router";
import { AnubhavVidyaPage } from "@/components/site/vidya/AnubhavVidyaPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/anubhav-vidya")({
  head: () =>
    seo(
      "Anubhav Vidya — Experiential Learning, 13 Labs & Innovation",
      "Anubhav Vidya at HKS Vidyamandir: nine experiential learning zones, thirteen laboratories, Olympiads, business simulations and field journeys from Nursery to Grade 12.",
      "/anubhav-vidya",
    ),
  component: AnubhavVidyaPage,
});
