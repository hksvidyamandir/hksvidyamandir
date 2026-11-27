import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText, Mail, Phone, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/blocks";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";
import {
  DISCLOSURE_DOCUMENT_SECTIONS,
  GENERAL_INFORMATION,
  MANDATORY_SUMMARY,
} from "@/lib/mandatory-disclosure";

export const Route = createFileRoute("/mandatory-public-disclosure")({
  head: () =>
    seo(
      "Mandatory Public Disclosure",
      "Official CBSE Mandatory Public Disclosure (Appendix-IX) for HKS Vidyamandir: general school information, affiliation details, statutory documents, academics, staff and infrastructure.",
      "/mandatory-public-disclosure",
    ),
  component: MandatoryPublicDisclosurePage,
});

const SECTION_ANCHORS = [
  { id: "general", code: "A", label: "General information" },
  { id: "documents", code: "B", label: "Documents & information" },
  { id: "academics", code: "C", label: "Result & academics" },
  { id: "staff", code: "D", label: "Staff (teaching)" },
  { id: "infrastructure", code: "E", label: "School infrastructure" },
] as const;

function MandatoryPublicDisclosurePage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Editorial Header & Official Summary Ledger */}
      <section className="border-b border-border bg-background">
        <div className="container-site pt-12 pb-14 md:pt-16 md:pb-18">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-navy">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Mandatory Public Disclosure</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-medium text-muted-foreground">
                CBSE Appendix-IX · Education for a better tomorrow
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-[-0.015em] text-navy md:text-5xl">
                Mandatory Public Disclosure
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
                Statutory school particulars, CBSE affiliation details, safety certifications,
                academic records, teaching staff and campus infrastructure information published in
                accordance with Central Board of Secondary Education norms.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 lg:col-span-4 lg:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => window.print()}
                className="h-10 rounded-lg border-border bg-card px-4 text-sm font-medium text-navy hover:bg-muted"
              >
                <Printer className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Print disclosure
              </Button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 border-b border-navy/40 pb-1 text-sm font-medium text-navy transition-colors hover:border-navy"
              >
                School office contact
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4 md:gap-8">
            {MANDATORY_SUMMARY.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="font-display text-2xl font-medium tabular-nums text-navy md:text-3xl">
                  {item.value}
                </dt>
                <dd className="text-sm font-medium text-navy">{item.label}</dd>
                <dd className="text-xs text-muted-foreground">{item.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. Section Jump Navigation */}
      <nav
        aria-label="Disclosure sections"
        className="sticky top-20 z-30 border-b border-border bg-card/95 backdrop-blur lg:top-24"
      >
        <div className="container-site flex items-center gap-6 overflow-x-auto py-0 md:gap-9">
          {SECTION_ANCHORS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="flex shrink-0 items-center gap-2 border-b-2 border-transparent py-4 text-sm text-muted-foreground transition-colors hover:border-navy hover:text-navy"
            >
              <span className="font-mono text-xs font-medium text-navy">{sec.code}.</span>
              <span>{sec.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* 3. Section A: General Information */}
      <section id="general" className="scroll-mt-36 border-b border-border bg-card py-14 md:py-20">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium text-muted-foreground">Section A</p>
            <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
              General Information
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Core school identification, CBSE affiliation credentials, leadership and official
              communication channels.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-xs font-medium text-muted-foreground">
                  <th className="w-24 whitespace-nowrap px-6 py-4">Sl. No.</th>
                  <th className="w-[36%] px-6 py-4">Information</th>
                  <th className="px-6 py-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card text-sm">
                {GENERAL_INFORMATION.map((row) => (
                  <tr key={row.slNo} className="align-top transition-colors hover:bg-muted/25">
                    <td className="px-6 py-4 font-mono text-xs tabular-nums text-muted-foreground">
                      {row.slNo}
                    </td>
                    <td className="px-6 py-4 font-medium text-navy">{row.label}</td>
                    <td className="px-6 py-4 text-foreground">
                      {row.href ? (
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                          <a
                            href={row.href}
                            className="font-medium text-navy underline-offset-4 hover:text-cta hover:underline"
                          >
                            {row.value}
                          </a>
                          {row.secondaryValue && row.secondaryHref && (
                            <>
                              <span aria-hidden="true" className="text-border">
                                |
                              </span>
                              <a
                                href={row.secondaryHref}
                                className="font-medium text-navy underline-offset-4 hover:text-cta hover:underline"
                              >
                                {row.secondaryValue}
                              </a>
                            </>
                          )}
                        </div>
                      ) : (
                        <span className="tabular-nums">{row.value}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Sections B, C, D, E: Document & Information Tables */}
      <div className="divide-y divide-border bg-background">
        {DISCLOSURE_DOCUMENT_SECTIONS.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-36 py-14 md:py-20 ${idx % 2 === 1 ? "bg-card" : "bg-background"}`}
          >
            <div className="container-site">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="font-mono text-xs font-medium text-muted-foreground">
                    Section {section.code}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-medium text-navy md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {section.subtitle}
                  </p>
                </div>
                <p className="font-mono text-xs tabular-nums text-muted-foreground">
                  {String(section.items.length).padStart(2, "0")}{" "}
                  {section.items.length === 1 ? "record" : "records"}
                </p>
              </div>

              <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border bg-muted/40 text-xs font-medium text-muted-foreground">
                      <th className="w-24 whitespace-nowrap px-6 py-4">Sl. No.</th>
                      <th className="px-6 py-4">{section.columnLabel}</th>
                      <th className="w-72 whitespace-nowrap px-6 py-4 text-right">Uploaded Document</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm">
                    {section.items.map((item) => (
                      <tr
                        key={item.title}
                        className="align-middle transition-colors hover:bg-muted/25"
                      >
                        <td className="px-6 py-4 font-mono text-xs tabular-nums text-muted-foreground">
                          {item.slNo}
                        </td>
                        <td className="px-6 py-4 font-medium text-navy">{item.title}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-right">
                          {item.documentUrl ? (
                            <a
                              href={item.documentUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-navy-foreground"
                            >
                              <FileText className="h-3.5 w-3.5" strokeWidth={1.5} />
                              <span>View PDF</span>
                              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                            </a>
                          ) : (
                            <div className="inline-flex items-center gap-4 text-xs">
                              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                                <FileText className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                                <span>Upload pending</span>
                              </span>
                              <Link
                                to="/contact"
                                className="font-medium text-navy underline-offset-4 hover:text-cta hover:underline"
                              >
                                Request copy
                              </Link>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 5. Verification & School Office Note */}
      <section className="border-t border-border bg-card py-12">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-navy">
              Need an attested copy or verification of any disclosure document?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Original statutory certificates and academic records are available for inspection at
              the HKS Vidyamandir administrative office ({SITE.hours}).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-navy">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 transition-colors hover:border-navy"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              <span>{SITE.phone}</span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 transition-colors hover:border-navy"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              <span>{SITE.email}</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
