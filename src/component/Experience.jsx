import React from "react";

const Experience = () => {
  return (
    <div className="layout">
      <div className="w-[396px] h-[120px]">
        <h1 className="text-[#1d1d1d] font-bold text-[38px]">
          Experience Luxury without compromises
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="border-[1px] rounded-[14px] border-[#f1f1f1] p-5">
          <h1 className="w-[126px] h-[38px] text-[28px] text-[#000000]">
            Confort
          </h1>
          <p className="w-[349px] h-108px] font-[500] text-[#5c5c5c] mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            laboriosam explicabo quae ipsum excepturi earum, inventore nulla
            dolor nihil atque?
          </p>
        </div>
        <div className="border-[1px] rounded-[14px] border-[#f1f1f1] p-5">
          <h1 className="w-[126px] h-[38px] text-[28px] space-[1%] text-[#000000]">
            Insurance
          </h1>
          <p className="w-[349px] h-108px] font-[500] text-[#5c5c5c] mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            accusantium quasi minima itaque doloribus ipsam, natus placeat enim
            quisquam vero?
          </p>
        </div>
        <div className="border-[1px] rounded-[14px] border-[#f1f1f1] p-5">
          <h1 className="w-[126px] h-[38px] text-[28px] space-[1%] text-[#000000]">
            Commitment
          </h1>
          <p className="w-[349px] h-108px] font-[500] text-[#5c5c5c] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            illo possimus voluptatum nesciunt voluptatibus adipisci dolorem
            excepturi id. Dolores,
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-12 md:justify-between">
        <div className="w-[355px] h-[32px]">
          <p className="font-[300] text-[20px]">
            Trusted by Customer Since{" "}
            <span className="font-[500] text-[#000000]">1990</span>{" "}
          </p>
        </div>
        <div className="flex flex-col  md:flex-row gap-2 md:gap-4 med:items-center items-start">
          <div className="max-w-[130px] w-full h-[97px] flex flex-col gap-2">
            <p className="text-[15px] font-[300]">Trusted Customers</p>
            <h1 className="font-[500] text-[25px]">2000+</h1>
          </div>
          <div className="max-w-[130px] w-full h-[97px] flex flex-col gap-2">
            <p className="text-[15px] font-[300]">Available Cars</p>
            <h1 className="font-[500] text-[25px]">134+</h1>
          </div>
          <div className="max-w-[130px] w-full h-[97px] flex flex-col gap-2">
            <p className="text-[15px] font-[300]">Total Reservation</p>
            <h1 className="font-[500] text-[25px]">134+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
