import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CampusLifeMegaMenu } from "@/components/site/CampusLifeMegaMenu";
import { CAMPUS_LIFE_MEGA_MENU } from "@/lib/campus-life-menu";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a>,
}));

afterEach(cleanup);

describe("Campus Life mega menu", () => {
  it("lists all 9 non-residential categories from slides 3-12 and switches tick points on hover/click", () => {
    render(<CampusLifeMegaMenu />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(9);
    expect(CAMPUS_LIFE_MEGA_MENU.some((c) => /board|residen|hostel/i.test(c.label))).toBe(false);

    // Initial active panel is Experiential Learning
    let panel = screen.getByRole("tabpanel");
    expect(within(panel).getByText("Virtual Reality (VR) Room")).toBeInTheDocument();

    // Switch to Laboratories
    fireEvent.mouseEnter(screen.getByRole("tab", { name: "Laboratories" }));
    panel = screen.getByRole("tabpanel");
    expect(within(panel).getByText("Artificial Intelligence and Machine Learning Lab")).toBeInTheDocument();

    // Switch to Sports & Physical Education
    fireEvent.click(screen.getByRole("tab", { name: "Sports & Physical Education" }));
    panel = screen.getByRole("tabpanel");
    expect(within(panel).getByText("Athletics & Archery")).toBeInTheDocument();
  });
});
