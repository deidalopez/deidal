import React from "react";
import Link from "next/link";

const ActionButtons = () => (
  <div className="flex flex-wrap gap-y-3">
    <Link
      href="/#contact"
      className="px-6 py-4 rounded-full bg-white hover:bg-slate-200 text-black mr-4  mt-2 "
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
    <p className="text-[#ADB7BE] mb-5">
      Software Engineer with expertise developing performant mobile applications
      for iOS and Android devices with React Native.
    </p>
    <ActionButtons />
  </div>
);

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-col">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
            <div className="col-span-5">
              <h1 className="text-white text-4xl mb-2 sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                Deida Lopez
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 mb-4 ">
                Software Engineer, React | React Native
              </p>
            </div>
          </div>
          <AboutAndButtons />
        </div>
        {/* <ImageComponent /> */}
      </div>
    </section>
  );
};

export default HeroSection;
