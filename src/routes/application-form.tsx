import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { AdmissionKitForm } from "@/components/site/AdmissionKitForm";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/application-form")({
  head: () =>
    seo(
      "Application Form — Students Admission Kit 2026-27",
      "Complete the 5-step HKS Vidyamandir Students Admission Kit Form online for Nursery to Grade 12: learner profile, academic history, health record, support services and parents' undertaking.",
      "/application-form",
    ),
  component: ApplicationFormPage,
});

function ApplicationFormPage() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. Calm Editorial Header */}
      <section className="border-b border-border bg-background">
        <div className="container-site pt-10 pb-12 md:pt-14 md:pb-14">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="transition-colors hover:text-navy">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/admissions" className="transition-colors hover:text-navy">
              Admissions
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-navy">Application Form</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-medium text-muted-foreground">
                Admissions 2026–27 · Interactive 5-step online application
              </p>
              <h1 className="mt-3 font-display text-4xl font-medium leading-[1.08] tracking-[-0.015em] text-navy md:text-5xl">
                Students Admission Kit Form
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Complete your child&apos;s learner profile, parent and guardian details, academic
                background, health and vaccination record, support services questionnaire and
                parents&apos; undertaking online.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 lg:col-span-4 lg:justify-end">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-cta"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                Admissions overview
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium text-navy transition-colors hover:border-navy/30"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                Admissions desk
              </a>
            </div>
          </div>
        </div>

        {/* Hairline At-a-Glance Strip */}
        <div className="border-t border-border bg-card">
          <div className="container-site grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
            <div className="py-5 pr-4 md:px-6 md:first:pl-0">
              <p className="font-display text-2xl font-medium text-navy">5 steps</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Profile, academics, health, services &amp; consent
              </p>
            </div>
            <div className="py-5 pl-4 md:px-6">
              <p className="font-display text-2xl font-medium text-navy">Nursery – Grade 12</p>
              <p className="mt-0.5 text-xs text-muted-foreground">CBSE Affiliation No. 830417</p>
            </div>
            <div className="py-5 pr-4 md:px-6">
              <p className="font-display text-2xl font-medium text-navy">10 – 12 mins</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Estimated completion time with reference ID
              </p>
            </div>
            <div className="py-5 pl-4 md:px-6 md:last:pr-0">
              <p className="text-sm font-medium text-navy">Policies</p>
              <div className="mt-1 flex flex-wrap gap-3 text-xs font-medium text-muted-foreground">
                <Link
                  to="/terms-and-conditions"
                  className="underline underline-offset-4 transition-colors hover:text-navy"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  to="/privacy-policy"
                  className="underline underline-offset-4 transition-colors hover:text-navy"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive 5-Step Admission Kit Form */}
      <section className="py-12 md:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-4xl">
            <AdmissionKitForm />
          </div>
        </div>
      </section>
    </div>
  );
}
