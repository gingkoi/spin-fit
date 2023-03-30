import React from "react";
import Image from "next/image";
import TrainersCard from "@/components/trainers/TrainersCard";
import data from "../components/trainers/trainerData";

const trainers = () => {
  return (
    <div className="container mx-auto lg:py-16 py-10 px-5">
      <div className="grid lg:grid-cols-2 lg:gap-10">
        <div className="bg-black text-white flex flex-col justify-center items-center lg:p-20 p-10 text-center space-y-5">
          <h1 className="font-bold text-2xl lg:text-3xl">
            Meet Our Training Staff
          </h1>
          <p>
            Working one-on-one creates an atmosphere of accountability between
            you and your personal trainer. Fit personal trainers are very
            serious about designing your individual workout program based on
            your fitness assessment and goals.
          </p>
          <p>
            They take time to listen to you and understand your needs before
            your sessions begin. Our trainers are experts at pushing you to your
            limit so you can reach your optimal fitness level in a healthy
            amount of time.
          </p>
        </div>
        <div className="relative md:h-[250px] h-[200px] lg:h-auto">
          <Image
            src="https://images.pexels.com/photos/7991632/pexels-photo-7991632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="/"
          />
        </div>
      </div>
      <div className="my-10">
        <div className="my-5">
          <h2 className="font-bold text-3xl">Trainers</h2>
          <p className="text-gray-600">
            Powered by positive energy, driven by member results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item, index) => (
            <TrainersCard
              name={item.name}
              role={item.role}
              url={item.picutre}
              alt={item.alt}
              key={index}
            />
          ))}
        </div>
        <div className="my-10">
          <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
        </div>
      </div>
    </div>
  );
};

export default trainers;
