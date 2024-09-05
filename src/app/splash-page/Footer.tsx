import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";
const socialMedia = [
  {
    name: "Personal Github",
    icon: <FaGithub size={30} />,
    link: "https://github.com/mlee0416",
  },
  {
    name: "Professional Github",
    icon: <FaGithub size={30} />,
    link: "https://github.com/mlee-YAPI",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    link: "https://www.linkedin.com/in/mlee0416",
  },
  {
    name: "Email",
    icon: <CgMail size={30} />,
    link: "mailto:mlee0416@gmail.com",
  },
];

const Footer = () => {
  return (
    <div
      className="bg-white py-16 flex flex-row flex-wrap items-center justify-center gap-6"
      id="contact"
    >
      <p className="font-semibold">Contact:</p>
      {socialMedia.map((item) => (
        <a
          href={item.link}
          target="_blank"
          key={item.name}
          className="flex flex-row items-center w-fit gap-4"
        >
          {item.icon} <p className="max-w-lg">{item.name}</p>
        </a>
      ))}
    </div>
  );
};

export default Footer;
