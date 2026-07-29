import Link from "next/link";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { socials } from "@/config/socials";

const icons = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  mail: HiOutlineMail,
} as const;

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socials.map((social) => {
        const Icon = icons[social.icon];

        return (
          <Link
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            className="text-neutral-700 transition-opacity duration-300 hover:opacity-60"
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
}