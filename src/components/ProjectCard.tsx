import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "@/src/interfaces/project.interface";

export default function ProjectCard({ project }: { project: Project }) {
  const githubUrl = project.github.startsWith("http")
    ? project.github
    : `https://github.com/ronnyml/${project.github}`;

  return (
    <article className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <Image
          src={`/images/projects/${project.image}`}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
          {project.description}
        </p>
        <div className="mt-6 flex gap-2 border-t border-zinc-100 pt-4">
          {project.github && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
              aria-label={`View ${project.title} source code`}
              title="View source code"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </Link>
          )}
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 hover:text-indigo-600"
              aria-label={`Visit ${project.title}`}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              Visit
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
