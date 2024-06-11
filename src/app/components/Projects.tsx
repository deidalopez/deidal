"use client";
import React from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { FaChevronRight } from "react-icons/fa";

const projects = [
  {
    name: "Care/of",
    image: "/images/Careof/CO_track.png",
    description:
      "Care/of: Healthy Habits Tracker app that rewards users for taking their vitamins and tracking their healthy habits. Also allows for users to edit their upcoming orders, shows insights about how tracking their habits has affected their goals (energy, focus, sleep, etc.), and allows users to make one time purchases in app.",
  },
  {
    name: "West Tenth",
    image: "/images/WestTenth/W10_home.png",
    description:
      "West Tenth: Marketplace, app with Seller and Buyer modes that allows Buyers to find small businesses that provide a multitude of services and products. Seller mode allows sellers to update their storefronts, manage orders, and message potential buyers.",
  },
  {
    name: "Care/of: Sleep",
    image: "/images/Ashwa/Ashwa_home.png",
    description:
      "The Care/of: Sleep app integrated the Apple Health Kit to track users' sleep data and provide insights on how their sleep habits have been affected by taking their Ashwagandha supplements.",
  },
];

const FlipCard = ({
  project,
  isFlipped,
  handleHover,
}: {
  project: { image: string; description: string };
  isFlipped: boolean;
  handleHover: () => void;
}) => (
  <div className="border border-orange-800 h-80 w-40 mb-4 ">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="justify-center align-center" onMouseEnter={handleHover}>
        <Image src={project.image} alt="deida image" width={180} height={400} />
      </div>

      <div className="bg-red-400 h-300 w-300" onMouseLeave={handleHover}>
        <p>{project.description}</p>
      </div>
    </ReactCardFlip>
  </div>
);

const Card = ({
  project,
  isFlipped,
  handleHover,
}: {
  project: { image: string; description: string };
  isFlipped: boolean;
  handleHover: () => void;
}) => (
  // <div className="h-80 w-40 mb-4">
  //   <div className="justify-center align-center" onMouseEnter={handleHover}>
  //     <Image
  //       className="rounded-lg"
  //       src={project.image}
  //       alt="deida image"
  //       width={180}
  //       height={400}
  //     />
  //   </div>
  // </div>
  <div className="h-80 w-40 mb-4">
    <div className="justify-center align-center" onMouseEnter={handleHover}>
      <Image
        className="rounded-lg"
        src={project.image}
        alt="deida image"
        width={180}
        height={400}
      />
    </div>
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
    <div className="border bg-zinc-900 rounded-lg flex flex-row mb-10 p-5">
      <div className="justify-center hidden sm:block">
        {Card({ project, isFlipped, handleHover })}
        {/* {FlipCard({ project, isFlipped, handleHover })}{" "} */}
      </div>
      <div className="h-300 w-300 pl-5 items-center" onMouseLeave={handleHover}>
        <h3 className="sm:text-3xl lg:text-4xl text-xl font-bold pb-3">
          {project.name}
        </h3>
        <p className="sm:text-lg lg:text-xl pb-3">{project.description}</p>
        <p className="pt-13 text-sm  underline flex items-center">
          Learn more
          <FaChevronRight className="w-3 h-3 ml-1 " />
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="flex flex-wrap">
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
