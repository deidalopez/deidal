import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const skillsItems = [
  {
    title: "React Native",
    icon: <FaReact className="w-5 h-5" />,
  },
  {
    title: "React",
    icon: <FaReact className="w-5 h-5" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className="w-5 h-5" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="w-5 h-5" />,
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="w-5 h-5" />,
  },
  {
    title: "Express.js",
    icon: <SiExpress className="w-5 h-5" />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="w-5 h-5" />,
  },
  {
    title: "GraphQL",
    icon: <SiNextdotjs className="w-5 h-5" />,
  },
  {
    title: "PostgreSQL",
    icon: <SiNextdotjs className="w-5 h-5" />,
  },
];

const SkillItem = ({
  title,
  icon,
}: {
  title: string;
  icon: React.JSX.Element;
}) => {
  return (
    <div className="border p-2 bg-zinc-900">
      {icon}
      <h3 className="text-m font-bold">{title}</h3>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section>
      <div>
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
        {skillsItems.map((item) => (
          <SkillItem key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
