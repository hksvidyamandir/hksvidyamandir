import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { COCURRICULAR_PAGES } from "@/lib/cocurricular-pages-data";
import { CoCurricularSubpage } from "@/components/site/cocurricular/CoCurricularSubpage";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

class Obs {
  observe() {}
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal("IntersectionObserver", Obs);
vi.stubGlobal("ResizeObserver", Obs);
window.matchMedia ??= (() => ({
  matches: false,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
})) as never;

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Co-Curricular Subpages (26 pages from hks-site_(1).zip) and Interactive Widgets", () => {
  it("contains all 26 expected co-curricular route pages", () => {
    const required = [
      "sports",
      "experiential-learning",
      "immersive-discovery-zones",
      "creative-speech-enterprise",
      "laboratories",
      "core-science-math-labs",
      "technology-ai-maker-labs",
      "olympiad-preparation",
      "olympiad-tracks",
      "international-olympiads-mun",
      "outdoor-sports",
      "indoor-wellness-olympic-sports",
      "national-exams",
      "international-exams",
      "student-development",
      "leadership-life-skills",
      "clubs-arts-expression",
      "student-welfare",
      "learning-campus-infrastructure",
      "health-support-safety",
      "events-achievements",
      "celebrations-exhibitions-trips",
      "recognition-tours-initiatives",
      "additional-services",
      "after-school-camps-care",
      "enrichment-parent-sessions",
    ];
    for (const slug of required) {
      expect(COCURRICULAR_PAGES[slug]).toBeDefined();
      expect(COCURRICULAR_PAGES[slug]!.h1.length).toBeGreaterThan(3);
    }
  });

  it("renders Sports page with unified HeroEnquiryCard, bespoke animated scene, campus photos and 24-sport filter", () => {
    render(<CoCurricularSubpage data={COCURRICULAR_PAGES["sports"]!} />);
    expect(screen.getByText("Strong bodies, sharp minds")).toBeInTheDocument();
    expect(screen.getByText("Admissions Enquiry 2026–27")).toBeInTheDocument();

    // Real campus photography section & at-a-glance highlight cards
    expect(screen.getByText("Active movement built into the school week")).toBeInTheDocument();
    expect(screen.getByText("24 disciplines")).toBeInTheDocument();

    // Accessible Pause / Play toggle for persistent SVG vector animation
    const pauseBtn = screen.getByRole("button", { name: "Pause animation" });
    expect(pauseBtn).not.toHaveAttribute("aria-pressed");
    fireEvent.click(pauseBtn);
    expect(screen.getByRole("button", { name: "Play animation" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Wellness/i }));
    expect(screen.getByRole("heading", { name: "Yoga" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Cricket" })).not.toBeInTheDocument();
  });

  it("renders Technology, AI and Maker Labs with programmable robot grid", () => {
    render(<CoCurricularSubpage data={COCURRICULAR_PAGES["technology-ai-maker-labs"]!} />);
    expect(screen.getByText("Technology, AI and maker laboratories")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Forward" }));
    fireEvent.click(screen.getByRole("button", { name: "Turn right" }));
    expect(screen.getAllByText("Forward").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("Right")).toBeInTheDocument();
  });

  it("renders Creative, Speech and Enterprise with interactive debate motion spinner and enterprise wheel", () => {
    render(<CoCurricularSubpage data={COCURRICULAR_PAGES["creative-speech-enterprise"]!} />);
    expect(screen.getByText("Creative, speech and enterprise centres")).toBeInTheDocument();

    const firstMotion = screen.getByText(/Homework should be optional in primary school/i);
    expect(firstMotion).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Spin a new motion/i }));
    expect(screen.getByText(/Every school should have a vegetable garden/i)).toBeInTheDocument();
  });

  it("renders Experiential Learning with tabbed zones/labs switcher and comparison matrix", () => {
    render(<CoCurricularSubpage data={COCURRICULAR_PAGES["experiential-learning"]!} />);
    expect(screen.getByText("Experiential learning and laboratories")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Laboratories" }));
    expect(screen.getByRole("heading", { name: "Robotics Lab" })).toBeInTheDocument();
  });
});
