import Image from "next/image";
import { skills } from "@/src/data/data";

export default function About() {
  return (
    <section className="page-shell page-section">
      <div className="mx-auto mb-10 w-full max-w-xs">
        <div className="card p-3">
          <Image
            src="/images/profile.png"
            alt="Profile photo of Ronny Yabar Aizcorbe"
            width={560}
            height={560}
            priority
            className="aspect-square w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <h1 className="mb-10 text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        About Me
      </h1>
      <article className="card mx-auto max-w-4xl p-7 sm:p-10">
        <div className="space-y-5 text-justify text-base leading-8 text-zinc-600 sm:text-lg">
          <p>
            I&apos;m a{" "}
            <strong className="font-semibold text-zinc-900">
              Senior Full Stack Software Engineer
            </strong>{" "}
            who worked on diverse projects, large-scale web applications and
            high-traffic websites.
          </p>
          <p>
            I have extensive experience working remotely for U.S.-based
            companies. Throughout my career, I&apos;ve successfully designed and
            implemented a wide range of software solutions, including backend
            services, APIs, and both web and mobile applications. My recent work
            includes projects involving generative AI and large language models
            (LLMs).
          </p>
          <p>
            In the past, I successfully participated twice in the{" "}
            <a
              href="https://summerofcode.withgoogle.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-4 hover:decoration-indigo-600"
            >
              Google Summer of Code
            </a>{" "}
            and spent several years contributing to{" "}
            <a
              href="https://www.kde.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-4 hover:decoration-indigo-600"
            >
              KDE
            </a>
            , one of the largest Open Source projects in the world.
          </p>
          <p>
            Outside of work and programming, I enjoy spending quality time with
            my daughter Celeste, as well as with my family and friends. I&apos;m
            passionate about{" "}
            <span className="font-medium text-indigo-600">
              mountain biking, traveling and reading.
            </span>
          </p>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-10">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-950">
            Skills
          </h2>
          <ul
            className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            aria-label="Technical skills"
          >
            {skills.map((logo) => {
              const name = logo.replace(/\.(png|jpg|jpeg|svg)$/, "");
              return (
                <li
                  key={logo}
                  className="flex min-h-28 items-center justify-center rounded-xl border border-zinc-200 bg-white p-5"
                >
                  <Image
                    src={`/images/skills/${logo}`}
                    alt={`${name} logo`}
                    width={100}
                    height={72}
                    className="h-16 w-full object-contain"
                  />
                  <span className="sr-only">{name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </section>
  );
}
