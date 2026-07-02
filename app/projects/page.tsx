import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectsGrid } from "@/components/projects-grid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of NORDHAUS interior design projects across residential, renovation, and commercial work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Interiors we've had the privilege to shape"
        subtitle="A selection of recent residential, renovation, and commercial projects across the Nordics."
      />
      <section className="container pb-28">
        <ProjectsGrid projects={projects} />
      </section>
    </>
  );
}
