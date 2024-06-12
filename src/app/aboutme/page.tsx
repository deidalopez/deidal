import React from "react";
import ProfilePhoto from "../components/ProfilePhoto";

const About = () => {
  return (
    <div className="container mt-12 mx-auto px-10 py-10">
      <h1>About me</h1>
      <ProfilePhoto />
      <p>
        I have a background in Biological sciences, and Clinical Research. I
        have always had a fascination with technology and how it can be used to
        improve the quality of life for people.
        <br />
        I decided to make a career change and become a software engineer in
        2020, when I began taking Computer Science courses at a community
        college. This led me to enroll in a coding bootcamp, where I learned the
        fundamentals of web development.
        <br />I gained a lot of experience working at a fast-paced startup,
        where I was able to see how my work directly impacted the success of the
        company.
      </p>
    </div>
  );
};

export default About;
