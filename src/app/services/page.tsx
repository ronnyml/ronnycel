import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faRobot, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faCode,
    title: "Full Stack Development",
    description: "End-to-end web and mobile application development, from frontend to backend, using modern technologies and best practices."
  },
  {
    icon: faRobot,
    title: "Artificial Intelligence",
    description: "Focused on generative AI solutions, including large language models (LLMs), automation, and intelligent systems tailored to your business needs."
  },
  {
    icon: faChalkboardTeacher,
    title: "Technical Consulting",
    description: "Training, mentoring, and guidance on software development, architecture, and best practices for teams and individuals."
  }
];

const ServicesPage = () => {
  return (
    <section className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl p-6 md:p-12 mb-8 bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-center mb-10 tracking-tight">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col items-center bg-white rounded-2xl shadow-xl border-2 border-zinc-200 p-6 h-full min-h-[340px]">
            <FontAwesomeIcon icon={service.icon} size="3x" className="mb-4 text-sky-700" />
            <h2 className="text-2xl font-bold text-zinc-900 mb-2 text-center min-h-[56px] flex items-center justify-center">{service.title}</h2>
            <p className="text-zinc-700 text-justify flex-1 flex items-center justify-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage; 