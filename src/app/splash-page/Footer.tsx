import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";
const socialMedia = [
  {
    name: "Personal Github",
    icon: <FaGithub size={40} />,
    link: "https://github.com/mlee0416",
  },
  {
    name: "Professional Github",
    icon: <FaGithub size={40} />,
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
    <div className="bg-white h-60 flex flex-row  items-center justify-center  gap-12">
      <Separator />
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
      <Separator />
    </div>
  );
};

export default Footer;
