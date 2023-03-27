import React from "react";
import Image from "next/image";
const Foorer = () => {
  return (
    <div className="bg-black text-white p-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between items-center">
          <Image
            src={
              "https://www.anytimefitness.sg/wp-content/uploads/2022/03/NEW_LOGO.png"
            }
            width={170}
            height={100}
            alt="anytime-fitness"
          />
          <p className="text-4xl font-medium">A Lifestyle Gym.</p>
        </div>
        <div className="bg-white h-[0.1rem] my-14" />
      </div>
    </div>
  );
};

export default Foorer;
