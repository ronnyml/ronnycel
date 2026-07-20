import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "../data/data";

const badges = [
  { src: "meta-fullstack-developer.png", alt: "Meta Full Stack Developer", url: "https://www.credly.com/badges/5a755be2-1573-4a8f-8b79-46bb8cee51f8" },
  { src: "meta-frontend-developer.png", alt: "Meta Frontend Developer", url: "https://www.credly.com/badges/66ad41d8-ab67-46ae-835d-5bf8b1d8cf1e" },
  { src: "meta-backend-developer.png", alt: "Meta Backend Developer", url: "https://www.credly.com/badges/584f4f76-836f-4ab8-b27b-db658cc1d8a4" },
];

export default function HomePage() {
  return <>
    <section className="page-shell page-section">
      <div className="card p-6 sm:p-10 lg:p-14">
        <div className="mb-10 text-center">
          <p className="block w-full whitespace-nowrap font-[family-name:var(--font-display)] font-bold tracking-[-0.035em] text-blue-950" style={{ fontSize: "clamp(1rem, 6.2vw, 2.25rem)" }}>Software, Travel &amp; Bike</p>
          <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-black sm:text-2xl">Ronny Yabar Aizcorbe</p>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="mx-auto w-full max-w-sm rounded-[1.5rem] border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-2 shadow-xl shadow-indigo-950/15">
            <Image src="/images/ronny.png" alt="Ronny Yabar Aizcorbe" width={640} height={640} priority className="aspect-square w-full rounded-[1.1rem] border border-white object-cover ring-1 ring-zinc-200" />
          </div>
          <div>
            <h1 className="mt-7 text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">Hi, I&apos;m Ronny!</h1>
            <p className="mt-5 text-justify text-xl leading-8 text-zinc-600">A <strong className="font-semibold text-indigo-600">Senior Software Engineer</strong> based in Peru, focusing on Full Stack development and AI Engineering.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Social links">
              {socialIcons.map((social) => <Link key={social.title} href={social.url} title={social.title} aria-label={social.title} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-600 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"><FontAwesomeIcon icon={social.icon} /></Link>)}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="border-y border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className="page-shell flex flex-col items-center justify-between gap-8 py-12 sm:flex-row">
        <h2 className="text-lg font-semibold tracking-tight text-white">Meta Professional Certificates</h2>
        <div className="flex items-center gap-5 sm:gap-8">{badges.map((badge) => <a key={badge.src} href={badge.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white p-2 transition hover:-translate-y-1"><Image src={`/images/certificates/${badge.src}`} alt={badge.alt} width={76} height={76} /></a>)}</div>
      </div>
    </section>
  </>;
}
