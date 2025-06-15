
import { Facebook, Twitter, Linkedin, Instagram, Github, Phone, Whatsapp } from "lucide-react";

const profileImg = "/lovable-uploads/c58de510-be2f-4999-b017-6fa9ffabe1bb.png";
const logoImg = "/lovable-uploads/c0c0f505-731c-4451-92c3-2c569df92383.png"; // transparent background

const socialLinks = [
  { href: "https://www.facebook.com/dmrhrsn", icon: Facebook, label: "Facebook" },
  { href: "https://x.com/dm_michael23", icon: Twitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/michael-raharison-215901288", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/dm_rhrsn_/", icon: Instagram, label: "Instagram" },
  { href: "https://github.com/DM034", icon: Github, label: "GitHub" },
  { href: "https://wa.me/261324908409", icon: Whatsapp, label: "WhatsApp" }, // WhatsApp direct link
];

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-4 md:px-10">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="DM Logo" className="w-14 h-14 rounded-xl bg-white shadow" />
        <span className="font-oswald text-xl font-bold tracking-tight uppercase">
          Michael Raharison
        </span>
      </div>
      <div className="flex items-center gap-4">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:scale-110 transition-transform text-beige opacity-80 hover:opacity-100"
          >
            <Icon size={24} strokeWidth={1.7} />
          </a>
        ))}
      </div>
    </header>
  );
}
