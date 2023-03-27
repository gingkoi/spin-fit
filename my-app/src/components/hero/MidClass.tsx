import React from "react";
import Image from "next/image";

const MidClass = ({ facility, description, button, url, alt }) => {
  return (
    <div className="relative w-full lg:h-[420px] h-[300px]">
      <div className="group">
        <div className=" absolute top-0 right-0 left-0 bottom-0 z-10 group-hover:bg-black/60" />
        <div className="bg-black absolute z-[10] lg:w-[50%] w-[80%] h-auto bottom-5 left-[3%] p-8 flex flex-col space-y-5 group-hover:bg-black rounded-md">
          <h4 className="text-white lg:text-3xl text-xl font-bold">
            {facility}
          </h4>
          <p className="text-white hidden lg:block">{description}</p>
          <div>
            <a
              href="/"
              className="bg-white py-2 px-5 rounded-md group-hover:bg-primary group-hover:text-white transition ease-in-out duration-300 font-bold"
            >
              {button}
            </a>
          </div>
        </div>
        <Image src={url} fill alt={alt} />
      </div>
    </div>
  );
};

export default MidClass;
