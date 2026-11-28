import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HeroEnquiryCard } from "@/components/site/CroEnquiryBanner";
import { CbseCurriculumPage } from "@/components/site/academics/CbseCurriculumPage";
import { EarlyYearsPage } from "@/components/site/academics/EarlyYearsPage";
import { PrimaryPage } from "@/components/site/academics/PrimaryPage";
import { HighSchoolPage } from "@/components/site/academics/HighSchoolPage";
import { SeniorSecondaryPage } from "@/components/site/academics/SeniorSecondaryPage";
import { CompetitiveExamsPage } from "@/components/site/academics/CompetitiveExamsPage";

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

describe("HeroEnquiryCard and 6 Bespoke Academic Pages", () => {
  it("validates and submits HeroEnquiryCard with reference code", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<HeroEnquiryCard context="Early Years" defaultGrade="Nursery" />);

    fireEvent.click(screen.getByRole("button", { name: /Request Callback & Fee Guide/i }));
    expect(screen.getByRole("alert")).toHaveTextContent(/parent or guardian name/i);

    fireEvent.change(screen.getByLabelText(/Parent \/ Guardian Name/i), {
      target: { value: "Priya Rao" },
    });
    fireEvent.change(screen.getByLabelText(/Mobile \/ WhatsApp/i), {
      target: { value: "9845012345" },
    });
    fireEvent.change(screen.getByLabelText(/Student's Name/i), {
      target: { value: "Aarav Rao" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Request Callback & Fee Guide/i }));

    expect(screen.getByText(/Enquiry received \(HKS-/i)).toBeInTheDocument();
    expect(openSpy).toHaveBeenCalledTimes(1);
  });

  it("renders CBSE Curriculum with interactive DOB Stage Finder and Growth Pathway", () => {
    render(<CbseCurriculumPage />);
    expect(screen.getByText("A CBSE journey from first steps to graduation")).toBeInTheDocument();

    const dobInput = screen.getByLabelText(/Child's date of birth/i);
    fireEvent.change(dobInput, { target: { value: "2015-05-10" } });
    expect(screen.getByText(/Age on 1 June 2026: 11 years/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Explore Middle School/i }).length).toBeGreaterThanOrEqual(2);

    fireEvent.click(screen.getByRole("tab", { name: /Reflect and grow/i }));
    expect(screen.getByText(/set new goals and go again/i)).toBeInTheDocument();
  });

  it("renders Early Years with Montessori Shelf and Readiness Checklist", () => {
    render(<EarlyYearsPage />);
    expect(screen.getByText("Small discoveries. A strong beginning.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Sandpaper letters" }));
    expect(screen.getByRole("heading", { name: "Sandpaper letters" })).toBeInTheDocument();

    const checks = screen.getAllByRole("checkbox");
    expect(screen.getByText("0 of 8")).toBeInTheDocument();
    fireEvent.click(checks[0]!);
    fireEvent.click(checks[1]!);
    fireEvent.click(checks[2]!);
    fireEvent.click(checks[3]!);
    expect(screen.getByText("4 of 8")).toBeInTheDocument();
    expect(screen.getByText(/A great start/i)).toBeInTheDocument();
  });

  it("renders Primary School with Theme Web and Grade 3/4/5 tabs", () => {
    render(<PrimaryPage />);
    expect(screen.getByText("Where curiosity becomes confidence")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Our city" }));
    expect(screen.getByText(/Read a Bengaluru metro map/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Grade 5" }));
    expect(screen.getByText(/Decimals, data and simple graphs/i)).toBeInTheDocument();
  });

  it("renders High School with Grade 6-10 Roadmap and Ten Bagless Days flip cards", () => {
    render(<HighSchoolPage />);
    expect(screen.getByText("Deeper understanding. Independent thinking.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Grade 10" }));
    expect(screen.getByRole("heading", { name: "Board ready" })).toBeInTheDocument();

    const potteryBtn = screen.getByRole("button", { name: /Pottery:/i });
    fireEvent.click(potteryBtn);
    expect(potteryBtn).toHaveAttribute("aria-pressed", "true");
  });

  it("renders Senior Secondary with interactive 4-question Stream Finder quiz", () => {
    render(<SeniorSecondaryPage />);
    expect(screen.getByText("Focused pathways to universities and careers")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Biology and Chemistry" }));
    fireEvent.click(screen.getByRole("button", { name: "Experiments and how living things work" }));
    fireEvent.click(screen.getByRole("button", { name: "Medicine or health" }));
    fireEvent.click(screen.getByRole("button", { name: "Abroad" }));

    expect(screen.getByText("A good place to start")).toBeInTheDocument();
    expect(screen.getByText(/NEET and CUET, plus SAT and IELTS or TOEFL/i)).toBeInTheDocument();
  });

  it("renders Competitive Exams with International Test Explorer", () => {
    render(<CompetitiveExamsPage />);
    expect(screen.getByText("Preparing champions, early and confidently")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "IELTS" }));
    expect(
      screen.getByText(/widely used for study in the UK, Australia, Canada/i),
    ).toBeInTheDocument();
  });
});
