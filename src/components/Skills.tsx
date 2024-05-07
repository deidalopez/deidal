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
    description: 'React Native"',
    icon: <FaReact className="w-5 h-5" />,
  },
  {
    title: "React",
    description: "React Native",
    icon: <FaReact className="w-5 h-5" />,
  },
  {
    title: "JavaScript",
    description: "React Native",
    icon: <SiJavascript className="w-5 h-5" />,
  },
  {
    title: "TypeScript",
    description: 'React Native"',
    icon: <SiTypescript className="w-5 h-5" />,
  },
  {
    title: "Node.js",
    description: 'React Native"',
    icon: <FaNodeJs className="w-5 h-5" />,
  },
  {
    title: "Express.js",
    description: 'React Native"',
    icon: <SiExpress className="w-5 h-5" />,
  },
  {
    title: "Next.js",
    description: 'React Native"',
    icon: <SiNextdotjs className="w-5 h-5" />,
  },
];

const SkillItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
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
          <SkillItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
