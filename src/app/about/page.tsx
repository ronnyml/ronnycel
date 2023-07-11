/* eslint-disable react/no-unescaped-entities */

const About = () => {
  return (
    <div className="flex justify-center py-6">
      <div className="w-10/12 lg:w-3/5">
        <section className="flex flex-col items-center text-justify">
          <h1 className="text-3xl text-zinc-950 font-bold text-center mt-4 mb-4">About me</h1>
          <div className="font-mono text-justify text-base font-light text-inherit">
            <p>I'm a Full Stack Software Engineer who worked on a wide array of projects, from small to large web applications, high-traffic websites, backend services, APIs, web, and mobile apps. My main skill set includes JavaScript, TypeScript, React, Next.js, Node.js, Python, Django, Flask, and Android.</p><br />

            <p>In the past, I successfully participated twice in the Google Summer of Code and contributed to KDE, one of the largest open source communities.</p><br />

            <p>When I'm not working or programming, I spend beautiful times with my daughter Celeste, my family and friends. I practice mountain biking, LOVE traveling and reading.</p><br />
          </div>
        </section>
      </div>
    </div>
  )
}

export default About;