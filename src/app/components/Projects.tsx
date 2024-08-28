"use client";
import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import config from "../../../next.config";

type ProjectType = {
  alt: string;
  name: string;
  image: string;
  description: string;
  techStack?: string[];
};

const projects: ProjectType[] = [
  {
    name: "Care/of",
    image: `${config.basePath}/images/Careof/CO_track.PNG`,
    alt: "Care/of app homescreen image",
    description:
      "Care/of: Healthy Habits Tracker app that rewards users for taking their vitamins and tracking their healthy habits. Also allows for users to edit their upcoming orders, shows insights about how tracking their habits has affected their goals (energy, focus, sleep, etc.), and allows users to make one time purchases in app.",
    techStack: [
      "React Native",
      "JavaScript",
      "Jest",
      // "Stripe",
      "GraphQL",
      "Redux",
    ],
  },
  {
    name: "West Tenth",
    image: `${config.basePath}/images/WestTenth/W10_home.PNG`,
    alt: "West Tenth app homescreen image",
    description:
      "West Tenth: Marketplace, app with Seller and Buyer modes that allows Buyers to find small businesses that provide a multitude of services and products. Seller mode allows sellers to update their storefronts, manage orders, and message potential buyers.",
    techStack: [
      "React Native",
      "TypeScript",
      "Jest",
      "Detox",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
    ],
  },
  {
    name: "Care/of: Sleep",
    image: `${config.basePath}/images/Ashwa/Ashwa_home.PNG`,
    alt: "Care/of: Sleep app homescreen image",
    description:
      "The Care/of: Sleep app integrated the Apple Health Kit to track users' sleep data and provide insights on how their sleep habits have been affected by taking their Ashwagandha supplements.",
    techStack: ["React Native", "JavaScript"],
  },
];

const Card = ({ project }: { project: ProjectType }) => (
  <div className="h-80 w-40 mb-4">
    <div className="justify-center align-center">
      <Image
        className="rounded-lg"
        src={project.image}
        alt={project.alt}
        width={180}
        height={400}
      />
    </div>
  </div>
);

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="border bg-accent rounded-lg flex flex-row mb-10 p-5">
      <div className="justify-center hidden sm:block">{Card({ project })}</div>
      <div className="h-300 w-300 pl-5 items-center">
        <h3 className="sm:text-3xl lg:text-4xl text-xl font-bold pb-3">
          {project.name}
        </h3>
        <p className="sm:text-lg lg:text-xl pb-3">{project.description}</p>
        <div className="flex flex-wrap gap-3 pt-3">
          {project.techStack?.map((tech, index) => (
            <p
              key={index}
              className="text-xs bg-accentSecondary p-2 rounded-md"
            >
              {tech}
            </p>
          ))}
        </div>
        {/* <p className="pt-13 text-sm  underline flex items-center">
          Learn more
          <FaChevronRight className="w-3 h-3 ml-1 " />
        </p> */}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="flex flex-wrap">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex flex-wrap lg:mx-4">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
