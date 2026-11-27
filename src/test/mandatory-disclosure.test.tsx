import { describe, expect, it } from "vitest";
import {
  DISCLOSURE_DOCUMENT_SECTIONS,
  GENERAL_INFORMATION,
  MANDATORY_SUMMARY,
} from "@/lib/mandatory-disclosure";

describe("Mandatory Public Disclosure data", () => {
  it("contains all 7 General Information rows with affiliation 830417 and school code 45340", () => {
    expect(GENERAL_INFORMATION).toHaveLength(7);
    expect(GENERAL_INFORMATION.find((r) => r.label === "Affiliation No.")?.value).toBe("830417");
    expect(GENERAL_INFORMATION.find((r) => r.label === "School Code")?.value).toBe("45340");
    expect(GENERAL_INFORMATION.find((r) => r.label === "Principal Name & Qualification")?.value).toContain("Dr. Gouri S. V.");
  });

  it("includes all 4 document disclosure sections (B, C, D, E) and all 15 statutory items", () => {
    expect(DISCLOSURE_DOCUMENT_SECTIONS.map((s) => s.code)).toEqual(["B", "C", "D", "E"]);
    const totalDocs = DISCLOSURE_DOCUMENT_SECTIONS.reduce((acc, s) => acc + s.items.length, 0);
    expect(totalDocs).toBe(15);
  });

  it("contains zero residential or boarding copy", () => {
    const forbidden = /\b(boarding|boarder|hostel|dormitory|dorm|warden|day scholar|residential)\b/i;
    const serialized = JSON.stringify({
      MANDATORY_SUMMARY,
      GENERAL_INFORMATION,
      DISCLOSURE_DOCUMENT_SECTIONS,
    });
    expect(serialized).not.toMatch(forbidden);
  });
});
