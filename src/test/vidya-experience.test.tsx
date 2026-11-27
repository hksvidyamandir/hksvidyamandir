import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { KrishiVidyaPage } from "@/components/site/vidya/KrishiVidyaPage";
import { KhelVidyaPage } from "@/components/site/vidya/KhelVidyaPage";
import { AnubhavVidyaPage } from "@/components/site/vidya/AnubhavVidyaPage";
import { SamskritiVidyaPage } from "@/components/site/vidya/SamskritiVidyaPage";

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

afterEach(cleanup);

describe("Four bespoke Vidya co-curricular pages", () => {
  it("renders Krishi Vidya with interactive Season Wheel and Grade Finder", () => {
    render(<KrishiVidyaPage />);
    expect(screen.getByText("Nature becomes the classroom")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: "Zaid" }));
    expect(screen.getByText(/Zaid: summer season/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: /Grades 6 – 8/i }));
    expect(screen.getByText("Applied ecology")).toBeInTheDocument();
  });

  it("renders Khel Vidya with 24-sport arena filter and calm breathing widget", () => {
    render(<KhelVidyaPage />);
    expect(screen.getByText("Every child finds their game")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Olympic-style/i }));
    expect(screen.getByRole("heading", { name: "Archery" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Cricket" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Try one minute of calm breathing/i }));
    expect(screen.getByText("Breathe in")).toBeInTheDocument();
  });

  it("renders Anubhav Vidya with interactive 9-zone floor plan and lemonade stall simulator", () => {
    render(<AnubhavVidyaPage />);
    expect(screen.getByText("Learning you can step inside")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: /Astronomy & Space Zone/i }));
    expect(screen.getByText(/Telescope and sky-watching sessions/i)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/Selling price per cup/i), { target: { value: "40" } });
    expect(screen.getByText(/Profit ₹/i)).toBeInTheDocument();
  });

  it("renders Samskriti Vidya with 3-language welcome, festival year and Karnataka crafts", () => {
    render(<SamskritiVidyaPage />);
    expect(screen.getByText("Roots that give children wings")).toBeInTheDocument();
    expect(screen.getByText("Channapatna toys")).toBeInTheDocument();
    expect(screen.getByText("Yakshagana")).toBeInTheDocument();
    expect(screen.getByText("Kannada Rajyotsava")).toBeInTheDocument();
  });
});
