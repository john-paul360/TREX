import React from "react";
import { cars } from "../Data";
import { useState} from "react";
import SingleCar from "./SingleCar";

const categories = ["all", ...new Set(cars.map((car) => car.category))];
console.log(categories);

const Featured = () => {
    const [selected, setSelected] = useState("all");
    const FeaturedCars = selected === "all" ? cars : cars.filter((car) => car.category === selected);
  return (
    <div className="layout">
      <div className="max-w-[517px]">
        <h1 className="text-[38px] font-bold text-[#1d1d1d]">
          Featured Vehicles
        </h1>
        <p className="text-[5c5c5c] font-medium text-lg my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          possimus quo dolores dicta iste laudantium.
        </p>
      </div>
      <div className="flex items-center gap-[20px] md:gap-[30px]">
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelected(category)}
              key={category}
              className={
                category === selected
                  ? "bg-black text-white px-5 py-3 rounded-lg capitalize cursor-pointer"
                  : "px-5 py-3 rounded-lg capitalize cursor-pointer border border-black"
              }
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="mt-7 flex items-center justify-between flex-wrap">
        {FeaturedCars.map((car, index) => {
          return <SingleCar key={index} {...car} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
