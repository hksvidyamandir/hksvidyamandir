import { createFileRoute } from "@tanstack/react-router";
import { COCURRICULAR_PAGES } from "@/lib/cocurricular-pages-data";
import { seo } from "@/lib/seo";
import { CoCurricularSubpage } from "@/components/site/cocurricular/CoCurricularSubpage";

const page = COCURRICULAR_PAGES["sports"]!;

export const Route = createFileRoute("/sports")({
  head: () => seo(page.seoTitle, page.seoDescription, "/sports"),
  component: SportsRoute,
});

function SportsRoute() {
  return <CoCurricularSubpage data={page} />;
}
