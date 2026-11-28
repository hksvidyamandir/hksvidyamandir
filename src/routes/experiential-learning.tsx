import { createFileRoute } from "@tanstack/react-router";
import { COCURRICULAR_PAGES } from "@/lib/cocurricular-pages-data";
import { seo } from "@/lib/seo";
import { CoCurricularSubpage } from "@/components/site/cocurricular/CoCurricularSubpage";

const page = COCURRICULAR_PAGES["experiential-learning"]!;

export const Route = createFileRoute("/experiential-learning")({
  head: () => seo(page.seoTitle, page.seoDescription, "/experiential-learning"),
  component: ExperientialLearningRoute,
});

function ExperientialLearningRoute() {
  return <CoCurricularSubpage data={page} />;
}
