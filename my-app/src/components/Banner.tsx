import React, { useState } from "react";
import PricingCard from "../components/pricing/PricingCard";
import data from "../components/pricing/priceData";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./modal/Modal";

const Banner = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="font-poppin bg-primary flex flex-col md:flex-row md:justify-between justify-center p-5 items-center">
        <p className="text-white text-md font-bold text-center mb-3 md:mb-0">
          Special Offer 🔥 10 Day All Club Access Membership with $0 Enrollment
          Fees
        </p>
        <div
          className="uppercase bg-white text-primary font-bold py-2 px-5 rounded-md hover:scale-105 transition ease-in cursor-pointer"
          onClick={() => setModal(true)}
        >
          Shop now
        </div>
        {/* {modal && <Modal />} */}
        {/* {modal && (
          <div
            className={`bg-black/40 backdrop-blur-sm absolute top-0 bottom-0 right-0 left-0 z-50 overscroll-none flex justify-center items-center px-10`}
          >
            <div className="bg-white lg:py-12 lg:px-16 rounded-md relative">
              <div
                className="absolute top-[2%] right-[2%] cursor-pointer hover:scale-125"
                onClick={() => setModal(false)}
              >
                <AiOutlineClose size={30} />
              </div>
              <div>
                <PricingCard data={data[0]} />
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Banner;
