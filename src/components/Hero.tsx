import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white text-4xl mb-2 sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Deida Lopez
          </h1>
          <p className="text-lg lg:text-xl text-gray-500 mb-4 ">
            Software Engineer, Mobile
          </p>
        </div>
        <div className="col-span-5">
          <p className="text-[#ADB7BE] mb-5">HERE IS MY INFO</p>
          <div>
            <button className="px-6 py-4 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Contact Me
            </button>
            <button className="px-6 py-4 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-2">
              View Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative ">
            <Image
              src="/images/circle-profile.png"
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
