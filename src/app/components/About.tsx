import React from "react";
import ProfilePhoto from "./ProfilePhoto";

const About = () => {
  return (
    <section className="text-white">
      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">
            About Me
          </h2>
          <p className="md:text-lg lg:text-2xl">
            I am passionate about providing sleek solutions, intuitive UI, and
            an overall great experiences for users. I value and am dedicated to
            well documented code, keeping track of metrics, providing meaningful
            results for the company.
            <br />
            <p className="my-4">
              I have experience working as a Full Stack Developer using React,
              Node.js, GraphQL, and PostgreSQL, and as a Mobile Developer using
              React Native.
            </p>
          </p>
        </div>
        <ProfilePhoto />
      </div>
    </section>
  );
};

export default About;
