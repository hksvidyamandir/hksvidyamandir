import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CampusLifeMegaMenu } from "@/components/site/CampusLifeMegaMenu";
import { CAMPUS_LIFE_MEGA_MENU } from "@/lib/campus-life-menu";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => <a href={to} {...props}>{children}</a>,
}));

afterEach(cleanup);

describe("Campus Life mega menu", () => {
  it("segregates Campus Life by the four Vidyas plus welfare and services and switches panels", () => {
    render(<CampusLifeMegaMenu />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(6);
    expect(CAMPUS_LIFE_MEGA_MENU.some((c) => /board|residen|hostel/i.test(c.label))).toBe(false);

    // Initial active panel is Krishi Vidya
    let panel = screen.getByRole("tabpanel");
    expect(within(panel).getByText("Life Skills Education - Organic Farming & Horticulture")).toBeInTheDocument();

    // Switch to Khel Vidya
    fireEvent.mouseEnter(screen.getByRole("tab", { name: /Khel Vidya/ }));
    panel = screen.getByRole("tabpanel");
    expect(within(panel).getByText("Athletics & Archery")).toBeInTheDocument();

    // Switch to Anubhav Vidya
    fireEvent.click(screen.getByRole("tab", { name: /Anubhav Vidya/ }));
    panel = screen.getByRole("tabpanel");
    expect(within(panel).getByText("Robotics, AI & Machine Learning Labs")).toBeInTheDocument();

    // Switch to Samskriti Vidya
    fireEvent.click(screen.getByRole("tab", { name: /Samskriti Vidya/ }));
    panel = screen.getByRole("tabpanel");
    expect(within(panel).getByText("Creative Arts and Design Studio")).toBeInTheDocument();
  });
});
