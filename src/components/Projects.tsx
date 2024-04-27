"use client";
import React from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

const Project = ({
  name,
  image,
  description,
}: {
  name: string;
  image: string;
  description: string;
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const handleHover = () => {
    setIsFlipped((prev) => !prev);
  };

  const Card = () => (
    <div className="border h-40 w-40 mb-4">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onMouseEnter={handleHover}>
          <Image
            src="/images/circle-profile.png"
            alt="deida image"
            width={300}
            height={300}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />{" "}
        </div>

        <div
          className="background-white h-300 w-300"
          onMouseLeave={handleHover}
        >
          <p>{description}</p>
        </div>
      </ReactCardFlip>
    </div>
  );

  return (
    <div>
      {/* <h3>{name}</h3> */}
      <div >{Card()} </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      image: "/images/circle-profile.png",
      description: "This is project 1",
    },
    {
      name: "Project 2",
      image: "/images/circle-profile.png",
      description: "This is project 2",
    },
    {
      name: "Project 3",
      image: "/images/circle-profile.png",
      description: "This is project 3",
    },
    {
      name: "Project 4",
      image: "/images/circle-profile.png",
      description: "This is project 4",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div>
        {projects.map((item, index) => (
          <Project
            key={index}
            name={item.name}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
