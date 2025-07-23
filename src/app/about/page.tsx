/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { skills } from "@/src/data/data";

const chunkArray = (arr: string[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const About = () => {
  const skillRows = chunkArray(skills, 5);
  return (
    <section className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl p-6 md:p-12 mb-8 bg-white/90 flex flex-col items-center justify-center">
      <Image
        src="/images/profile.jpeg"
        alt="Profile photo of Ronny Yabar"
        width={220}
        height={220}
        className="rounded-full shadow-lg border-4 border-white object-cover mb-3"
        priority
      />
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-center mb-2 tracking-tight">About Me</h1>
      <div className="font-sans text-base md:text-lg text-zinc-800 font-light leading-relaxed text-justify text-center max-w-xl">
        <p>I'm a <span className="font-bold text-sky-700">Senior Full Stack Software Engineer</span> who worked on diverse projects, large-scale web applications and high-traffic websites</p>

        <p>I have extensive experience working remotely for U.S.-based companies. Throughout my career, I’ve successfully designed and implemented a wide range of software solutions, including backend services, APIs, and both web and mobile applications. My recent work includes projects involving generative AI and large language models (LLMs).</p>
        <h2 className="text-2xl font-bold text-zinc-800 mt-6 mb-2 text-center">Skills</h2>
        <div className="flex flex-col gap-4 mb-4 items-center">
          {skillRows.map((row, idx) => (
            <div key={idx} className="flex flex-row justify-center gap-4">
              {row.map((logo: string) => (
                <div key={logo} className="flex items-center justify-center">
                  <Image
                    src={`/images/skills/${logo}`}
                    alt={logo.replace(/\.(svg|png|jpg|jpeg)$/, "")}
                    width={300}
                    height={0}
                    style={{ height: "auto", width: "300px" }}
                    className="inline-block drop-shadow-sm"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <p>In the past, I successfully participated twice in the <a href="https://summerofcode.withgoogle.com/about" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-700 underline hover:text-sky-900">Google Summer of Code</a> and spent several years contributing to <a href="https://www.kde.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-700 underline hover:text-sky-900">KDE</a>, one of the largest Open Source projects in the world.</p>
        <p>Outside of work and programming, I enjoy spending quality time with my daughter Celeste, as well as with my family and friends. I’m passionate about <span className="font-semibold text-sky-700">mountain biking, LOVE traveling and reading.</span></p>
      </div>
    </section>
  )
}

export default About;