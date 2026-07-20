import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerLinks = [
  { label: "Email", href: "mailto:ronnycontacto@gmail.com", icon: faEnvelope },
  { label: "GitHub", href: "https://github.com/ronnyml", icon: faGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ronnyml", icon: faLinkedin },
];

const Footer = () => <footer className="border-t border-zinc-800 bg-zinc-950">
  <div className="page-shell flex flex-col items-center justify-center gap-4 py-8 text-center text-sm text-zinc-500">
    <p>&copy; {new Date().getFullYear()} Ronny Yabar Aizcorbe.</p>
    <div className="flex justify-center gap-3">
      {footerLinks.map((link) => <Link key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={link.label} title={link.label} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 text-zinc-300 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-300"><FontAwesomeIcon icon={link.icon} className="h-4 w-4" /></Link>)}
    </div>
  </div>
</footer>;
export default Footer;
