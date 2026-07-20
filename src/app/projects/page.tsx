import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/data/data";

export default function Projects() {
  return (
    <section className="page-shell page-section">
      <h1 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        Side Projects
      </h1>
      <div className="mt-12 space-y-20">
        {projects.map((group, index) =>
          Object.entries(group).map(([category, items]) => {
            const headingId = `category-${index}`;
            return (
              <section key={category} aria-labelledby={headingId}>
                <div className="mb-7 flex items-center gap-5">
                  <h2
                    id={headingId}
                    className="text-xl font-semibold tracking-tight text-white sm:text-2xl"
                  >
                    {category}
                  </h2>
                  <div className="h-px flex-1 bg-zinc-800" aria-hidden />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </section>
            );
          }),
        )}
      </div>
    </section>
  );
}
