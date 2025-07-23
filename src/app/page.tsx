/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "../data/data";

const HomePage = () => {
  return (
    <section className="py-2">
      <div className="header text-white mt-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-900 drop-shadow-lg">Software, Travel & Bike</h1>
        <h2 className="text-xl md:text-2xl text-zinc-700 text-center mb-6 font-medium">Ronny Yabar Aizcorbe</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="h-full flex items-center justify-center">
          <Image 
            src="/images/ronny.png" 
            alt="Ronny Yabar" 
            className="rounded-3xl shadow-2xl shadow-black border-4 border-white/80"
            priority={true}
            width={320}
            height={320}
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="relative text-3xl md:text-4xl font-black text-zinc-800 dark:text-white text-center md:text-left mb-2">Hi, I'm Ronny!</h1>
          <h2 className="mb-4 text-center md:text-left text-lg md:text-xl text-zinc-700 font-semibold">A <span className="text-sky-700 font-extrabold text-xl md:text-2xl decoration-sky-400">Senior Software Engineer</span> based in Peru,<br />focusing on Full Stack and AI Development.</h2>
          <div className="mt-4 flex items-center gap-3">
            {socialIcons.map(social => (
              <Link
                key={social.title}
                href={social.url}
                title={social.title}
                className="p-2 hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener">
                <FontAwesomeIcon
                  icon={social.icon}
                  size="2x"
                  color="#222" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage;