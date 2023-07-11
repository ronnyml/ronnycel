/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "../data/data";

const HomePage = () => {
  return (
    <section className="py-2">
      <div className="header text-white mt-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl text-zinc-950 font-bold text-center mb-4">Code, Travel & Bike</h1>
          <h2 className="text-xl md:text-2xl text-gray-700 text-center">Ronny Yabar Aizcorbe</h2>
        </div>
      </div>
      <div className="container px-5 py-4 mx-auto flex flex-wrap justify-center items-center">
        <div className="h-full p-4 lg:w-1/2 flex items-center justify-center">
          <Image 
            src="/images/ronny.png" 
            alt="Ronny Yabar" 
            className="rounded-3xl shadow-2xl shadow-black"
            priority={true}
            width={400}
            height={400}
          />
        </div>
        <div className="p-12 lg:w-1/2">
          <h1 className="dark:color-black relative text-5xl md:text-5xl font-black text-zinc-800 duration-300 dark:text-white text-center md:text-left">Hi, I'm Ronny!</h1>
          <h2 className="mt-2 mb-4 text-center md:text-left text-xl md:text-2xl opacity-100 text-gray-600">A <span className="text-sky-700">Software Engineer</span> based in Peru, <br /> focusing on Full Stack Development.</h2>

          <div className="mt-6 flex items-center">
            {socialIcons.map(social => (
              <Link
                key={social.title}
                href={social.url}
                title={social.title}
                className="p-2"
                target="_blank"
                rel="noopener">
                <FontAwesomeIcon
                  icon={social.icon}
                  size="2x"
                  color="#000" />
              </Link>
            ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage;