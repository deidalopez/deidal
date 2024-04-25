import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageComponent = () => (
  <div className="border w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] lg:mt-0  relative">
    <Image
      src="/images/circle-profile.png"
      alt="deida image"
      width={300}
      height={300}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex flex-wrap gap-y-3">
    <Link
      href="/#contact"
      className="px-6 py-4 rounded-full bg-white hover:bg-slate-200 text-black mr-4  mt-2 "
    >
      Contact Me
    </Link>
    <button className="px-6 py-4 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-2 lg:mt-5">
      View Resume
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
    <section>
      <div className="lg:flex">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
            <div className="col-span-5">
              <h1 className="text-white text-4xl mb-2 sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                Deida Lopez
              </h1>
              <p className="text-lg lg:text-xl text-gray-500 mb-4 ">
                Software Engineer, Mobile
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
