import React from "react";

const Banner = () => {
  return (
    <div className="font-poppin bg-primary flex flex-col md:flex-row md:justify-between justify-center p-5 items-center">
      <p className="text-white text-md font-bold text-center mb-3 md:mb-0">
        Special Offer 🔥 10 Day All Club Access Membership with $0 Enrollment
        Fees
      </p>
      <a
        href="/"
        className="uppercase bg-white text-primary font-bold py-2 px-5 rounded-md hover:scale-105 transition ease-in"
      >
        Shop now
      </a>
    </div>
  );
};

export default Banner;
