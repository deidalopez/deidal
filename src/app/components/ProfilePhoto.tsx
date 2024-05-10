import Image from "next/image";

const ProfilePhoto = () => (
  <div className=" w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] lg:mt-0  relative">
    <Image
      src="/images/circle-profile.png"
      alt="deida image"
      width={300}
      height={300}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    />
  </div>
);

export default ProfilePhoto;
