"use client";
import React from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

const projects = [
  {
    name: "Care/of",
    image: "/images/Careof/CO_track.png",
    description: "Care/of: Healthy Habits Tracker",
  },
  {
    name: "Care/of Sleep",
    image: "/images/Ashwa/Ashwa_home.png",
    description: "Care/of: Sleep",
  },
  {
    name: "West Tenth",
    image: "/images/WestTenth/W10_home.png",
    description: "West Tenth: Marketplace",
  },
];

const Card = ({
  project,
  isFlipped,
  handleHover,
}: {
  project: { image: string; description: string };
  isFlipped: boolean;
  handleHover: () => void;
}) => (
  <div className="border h-80 w-40 mb-4 justify-content">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onMouseEnter={handleHover}>
        <Image
          src={project.image}
          alt="deida image"
          width={180}
          height={400}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />{" "}
      </div>

      <div className="background-white h-300 w-300" onMouseLeave={handleHover}>
        <p>{project.description}</p>
      </div>
    </ReactCardFlip>
  </div>
);

const Project = ({
  project,
}: {
  project: { name: string; image: string; description: string };
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const handleHover = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div>
      <h3>{project.name}</h3>
      <div className="flex justify-center">
        {Card({ project, isFlipped, handleHover })}{" "}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
