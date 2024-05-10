import React from "react";
import ProfilePhoto from "./ProfilePhoto";

const About = () => {
  return (
    <section className="text-white">
      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p>
            I am passionate about mobile development using React Native, and
            providing sleek solutions, intuitive UI, and overall great
            experiences for users. I value and I am dedicated to provide well
            documented code, metrics and results for the company.
          </p>
          <br />
          <p>
            I also have experience working as a Full Stack Developer for a
            start-up using React, Node.js, GraphQL, and PostgreSQL
          </p>
        </div>
        <ProfilePhoto />
      </div>
    </section>
  );
};

export default About;
