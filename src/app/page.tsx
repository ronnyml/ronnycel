/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "../data/data";

const HomePage = () => {
  return (
    <section className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl px-4 md:px-12 p-6 md:p-12 mb-8 bg-white">
      <div className="header text-white mt-4">
        <h1 className="text-2xl md:text-5xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-900 drop-shadow-lg whitespace-nowrap md:whitespace-normal">Software, Travel & Bike</h1>
        <h2 className="text-xl md:text-2xl text-zinc-700 text-center mb-6 font-medium">Ronny Yabar Aizcorbe</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
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
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/2">
          <h1 className="relative text-3xl md:text-4xl font-black text-zinc-800 dark:text-white text-center md:text-left mb-2">Hi, I'm Ronny!</h1>
          <h2 className="mb-4 text-center md:text-left text-lg md:text-2xl text-zinc-700 font-semibold">A <span className="text-sky-700 font-extrabold text-xl md:text-2xl decoration-sky-400">Senior Software Engineer</span> based in Peru, focusing on Full Stack development and AI solutions.</h2>
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
      {/* Badges Section */}
      <div className="flex flex-nowrap md:flex-wrap justify-center items-center gap-6 mt-14 overflow-x-auto">
        <a href="https://www.credly.com/badges/5a755be2-1573-4a8f-8b79-46bb8cee51f8" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/certificates/meta-fullstack-developer.png"
            alt="Meta Full Stack Developer Badge"
            width={100}
            height={100}
            className="shadow-md hover:scale-105 transition-transform"
          />
        </a>
        <a href="https://www.credly.com/badges/66ad41d8-ab67-46ae-835d-5bf8b1d8cf1e" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/certificates/meta-frontend-developer.png"
            alt="Meta Frontend Developer Badge"
            width={100}
            height={100}
            className="shadow-md hover:scale-105 transition-transform"
          />
        </a>
        <a href="https://www.credly.com/badges/584f4f76-836f-4ab8-b27b-db658cc1d8a4" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/certificates/meta-backend-developer.png"
            alt="Meta Backend Developer Badge"
            width={100}
            height={100}
            className="shadow-md hover:scale-105 transition-transform"
          />
        </a>
      </div>
    </section>
  )
}

export default HomePage;