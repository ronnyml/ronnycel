import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComputer} from '@fortawesome/free-solid-svg-icons';
import { projects } from "@/src/data/data";

const Projects = () => {
  return (
    <div className="flex justify-center py-8 bg-transparent">
      <div className="w-full max-w-7xl px-2 md:px-6">
        <section className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mt-4 mb-6 tracking-tight drop-shadow-lg">Side Projects</h1>
            {projects.map((projectGroup, index) => (
              <div key={index}>
                {Object.entries(projectGroup).map(([category, projectsInCategory]) => (
                  <div key={category}>
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mt-10 mb-6 underline underline-offset-4 decoration-sky-700 drop-shadow">{category}</h2>
                    <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                      {projectsInCategory.map((project, projectIndex) => (
                        <div key={projectIndex} className="block rounded-2xl bg-white backdrop-blur-md border border-neutral-200 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-200">
                          <div
                            className="relative overflow-hidden flex items-center justify-center"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <Image
                              className="mt-2 rounded-t-2xl shadow-xl"
                              src={`/images/projects/${project.image}`}
                              alt={project.title}
                              width={300}
                              height={300} />
                          </div>
                          <div className="p-4">
                            <h5 className="mb-2 text-center text-xl font-bold leading-tight text-zinc-900">
                              {project.title}
                            </h5>
                            <p className="mb-4 text-center text-base text-zinc-700">
                              {project.description}
                            </p>
                            <div className="text-center flex justify-center gap-2">
                            {project.github &&
                              <Link
                                href={project.github.startsWith('http') ? project.github : `https://github.com/ronnyml/${project.github}`}
                                title={project.title}
                                className="p-2"
                                target="_blank"
                                rel="noopener">
                                <FontAwesomeIcon
                                  icon={faGithub}
                                  size="2x"
                                  color="#0d1225" />
                              </Link>
                            }

                            {project.url &&
                              <Link
                                href={project.url}
                                title={project.title}
                                className="p-2"
                                target="_blank"
                                rel="noopener">
                                <FontAwesomeIcon
                                  icon={faComputer}
                                  size="2x"
                                  color="#0d1225" />
                              </Link>
                            }
                            </div>
                          </div>
                      </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </section>
      </div>
    </div>
  )
}

export default Projects;