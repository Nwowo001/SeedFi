import React from "react";
import { positions } from "@/constants/career/positions";
import PositionCard from "@/components/ui/career/PositionCard";
import Image from "next/image";

const OpenPositions = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="lg:text-2xl text-[16px] italic lg:not-italic font-body font-semibold mb-7">
          Our{" "}
          <span className="text-[28px] text-primary not-italic">
            {" "}
            Open Positions
          </span>
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {positions.slice(0, 3).map((position, index) => (
            <PositionCard key={index} position={position} />
          ))}
          {positions.slice(3).map((position, index) => (
            <div key={index + 3} className="hidden md:block">
              <PositionCard position={position} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="text-primary font-medium flex items-center gap-2 mx-auto">
            <span>View More Roles</span>
            <Image
              src="/assets/icons/arrow.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
