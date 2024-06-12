import React from "react";
import Link from "next/link";

const ActionButtons = () => (
  <div className="flex flex-wrap gap-y-3">
    <Link
      href="/#contact"
      className="px-6 py-4 rounded-full bg-white hover:bg-slate-200 text-black mr-4 mt-2 lg:mt-5"
    >
      Contact Me
    </Link>
    <button className="px-6 py-4 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-2 lg:mt-5">
      <a href="/resume.pdf">View Resume</a>
    </button>
  </div>
);

const AboutAndButtons = () => (
  <div className="col-span-5">
    <p className="text-[#ADB7BE] mb-5 sm:text-xl md:text-2xl lg:text-3xl">
      Software Engineer with expertise developing performant mobile applications
      for iOS and Android devices with React Native.
    </p>
    <ActionButtons />
  </div>
);

const NameAndSubtitle = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
      <div className="col-span-5 mb-4 lg:mb-10">
        <h1 className="text-white text-4xl mb-4 sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          Deida Lopez
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl md:text-2xl lg:text-4xl">
          Software Engineer, React Native | React
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="py-10 ">
      <div className="relative items-center w-full py-12 mx-auto  max-w-8xl">
        <NameAndSubtitle />
        <AboutAndButtons />
      </div>
    </section>
  );
};

export default HeroSection;
