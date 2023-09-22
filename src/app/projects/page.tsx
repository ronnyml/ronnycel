import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComputer} from '@fortawesome/free-solid-svg-icons';
import { projects } from "@/src/data/data";

const Projects = () => {
  return (
    <div className="flex justify-center py-6">
      <div className="w-10/12">
        <section className="flex flex-col">
          <h1 className="text-3xl text-zinc-950 font-bold text-center mt-4 mb-3">Side Projects</h1>
            {projects.map((projectGroup, index) => (
              <div key={index}>
                {Object.entries(projectGroup).map(([category, projectsInCategory]) => (
                  <div key={category}>
                    <h2 className="text-2xl underline font-bold mt-4 mb-4">{category}</h2>
                    <div className="mt-1 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {projectsInCategory.map((project, projectIndex) => (
                        <div key={projectIndex} className="block rounded-lg bg-white border border-neutral-300 dark:bg-neutral-700">
                          <div
                            className="relative overflow-hidden flex items-center justify-center"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <Image
                              className="mt-2 rounded-t-lg shadow-xl"
                              src={`/images/projects/${project.image}`}
                              alt=""
                              width={300}
                              height={300} />
                          </div>
                          <div className="p-2">
                            <h5 className="mb-2 text-center text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              {project.title}
                            </h5>
                            <p className="mb-4 text-center text-base text-neutral-600 dark:text-neutral-200">
                              {project.description}
                            </p>
                            <div className="text-center">
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
                                  color="#000" />
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
                                  color="#000" />
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