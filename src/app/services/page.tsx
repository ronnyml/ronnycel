import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRobot,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faCode,
    title: "Full Stack Development",
    description:
      "Web and mobile application development from frontend to backend, built with modern technologies and a focus on performance, reliability, and maintainability.",
  },
  {
    icon: faRobot,
    title: "AI Engineering",
    description:
      "Generative AI solutions, including large language models, automation, and intelligent systems tailored to practical business needs.",
  },
  {
    icon: faChalkboardTeacher,
    title: "Technical Consulting",
    description:
      "Training, mentoring, and pragmatic guidance on software development, architecture, and engineering practices for teams and individuals.",
  },
];

export default function ServicesPage() {
  return (
    <section className="page-shell page-section">
      <h1 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        Services
      </h1>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="card card-hover flex min-h-80 flex-col items-center p-7 text-center sm:p-8"
          >
            <span className="grid h-20 w-20 place-items-center rounded-2xl bg-indigo-50 text-indigo-600">
              <FontAwesomeIcon icon={service.icon} className="h-9 w-9" />
            </span>
            <h2 className="mt-8 text-xl font-semibold tracking-tight text-zinc-950">
              {service.title}
            </h2>
            <p className="mt-4 flex-1 text-justify leading-7 text-zinc-600">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
