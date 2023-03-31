import React from "react";
import PricingCard from "../pricing/PricingCard";
import data from "../pricing/priceData";
import { AiOutlineClose } from "react-icons/ai";

const BannerModal = ({ closeModal }: { closeModal: any }) => {
  //   document.body.style.overflow = "hidden";
  //   {
  //     closeModal
  //       ? (document.body.style.overflow = "hidden")
  //       : (document.body.style.overflow = "auto");
  //   }
  return (
    <div className="bg-black/40 absolute top-0 bottom-0 right-0 left-0 z-50 overscroll-none flex justify-center items-center px-10">
      <div className="bg-white lg:py-12 lg:px-16 rounded-md relative">
        <div
          className="absolute top-[2%] right-[2%] cursor-pointer hover:scale-125"
          onClick={() => closeModal(false)}
        >
          <AiOutlineClose size={30} />
        </div>
        <div>
          <PricingCard data={data[0]} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default BannerModal;
