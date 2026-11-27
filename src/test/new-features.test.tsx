import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AdmissionKitForm } from "@/components/site/AdmissionKitForm";
import { EventsCommunity } from "@/components/site/EventsCommunity";
import { NAV } from "@/lib/site";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, ...props }: { children: React.ReactNode; to: string }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

afterEach(cleanup);

describe("Navigation Co-Curricular rename", () => {
  it("labels the former Campus Life menu item as Co-Curricular", () => {
    expect(NAV.some((g) => g.label === "Co-Curricular" && g.to === "/campus-life")).toBe(true);
    expect(NAV.some((g) => g.label === "Campus Life")).toBe(false);
  });
});

describe("Homepage EventsCommunity tabs", () => {
  it("shows all 5 Event Day tabs and all 7 Celebration tabs", () => {
    render(<EventsCommunity />);

    // Event Day tabs (default folder 0)
    expect(screen.getByRole("tab", { name: "Union Day – Annual Day" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Cultural" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Sports" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Awards & Competitions" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Fairs & Trips" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Fairs & Trips" }));
    expect(screen.getByText(/Science Fairs, Exhibitions & Study Trips/i)).toBeInTheDocument();

    // Switch to Celebration folder
    fireEvent.click(screen.getByRole("tab", { name: "Celebration" }));
    expect(screen.getByRole("tab", { name: "Teachers' Day" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Children's Day" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Gandhi Jayanti" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Independence Day" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Republic Day" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Kannada Rajyotsava" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Festivals & Holidays" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Children's Day" }));
    expect(screen.getByText(/14 November/i)).toBeInTheDocument();
  });
});

describe("Interactive 5-step AdmissionKitForm", () => {
  it("validates Step 1, steps through all 5 stages, and submits with a reference number", () => {
    render(<AdmissionKitForm />);

    // Step 1 validation check
    fireEvent.click(screen.getByRole("button", { name: /Continue to Education/i }));
    expect(screen.getByRole("alert")).toHaveTextContent(/first and last name/i);

    // Fill required Step 1 fields
    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: "Aarav" } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: "Rao" } });
    fireEvent.change(screen.getByLabelText(/Date of birth/i), { target: { value: "2018-04-10" } });
    fireEvent.change(screen.getByLabelText(/Entry class/i), { target: { value: "Grade 3" } });
    fireEvent.change(screen.getByLabelText(/^Permanent address/i), {
      target: { value: "Kengeri, Bengaluru" },
    });
    fireEvent.change(screen.getByLabelText(/Mother full name/i), {
      target: { value: "Meera Rao" },
    });
    fireEvent.change(screen.getByLabelText(/Mother mobile number/i), {
      target: { value: "9876543210" },
    });

    // Advance to Step 2 (Education & Profile)
    fireEvent.click(screen.getByRole("button", { name: /Continue to Education/i }));
    expect(screen.getByText(/Siblings Information/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Add sibling/i }));
    expect(screen.getByPlaceholderText("Sibling name")).toBeInTheDocument();

    // Advance to Step 3 (Health & Vaccines)
    fireEvent.click(screen.getByRole("button", { name: /Continue to Health/i }));
    expect(screen.getByText(/Vaccination Record/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Asthma" }));

    // Advance to Step 4 (Support & Disclosures)
    fireEvent.click(screen.getByRole("button", { name: /Continue to Support/i }));
    expect(screen.getByText(/Support Services Questionnaire/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Kannada" }));

    // Advance to Step 5 (Review & Undertaking)
    fireEvent.click(screen.getByRole("button", { name: /Continue to Undertaking/i }));
    expect(screen.getByText(/Application Summary/i)).toBeInTheDocument();
    expect(screen.getByText("Aarav Rao")).toBeInTheDocument();

    // Complete undertaking & submit
    fireEvent.change(screen.getByLabelText(/Full name of Parent/i), {
      target: { value: "Meera Rao" },
    });
    const checkboxes = screen.getAllByRole("checkbox");
    for (const cb of checkboxes.slice(-4)) {
      fireEvent.click(cb);
    }

    fireEvent.click(screen.getByRole("button", { name: /Complete & generate application/i }));
    expect(screen.getByText(/Admission Kit prepared for Aarav Rao/i)).toBeInTheDocument();
    expect(screen.getByText(/Application Reference · HKS-/i)).toBeInTheDocument();
  });
});
