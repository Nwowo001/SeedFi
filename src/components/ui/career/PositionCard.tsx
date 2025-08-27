import React from "react";
import { Position } from "@/types/career";
import Image from "next/image";

interface Props {
  position: Position;
}

const PositionCard: React.FC<Props> = ({ position }) => {
  return (
    <div className="bg-white rounded-[16px] border border-[#84868C] p-6 ">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold text-gray-900">{position.title}</p>
        <p className="text-sm text-black italic">{position.department}</p>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <span className="">
            <Image
              src="/assets/icons/career/hybrid.svg"
              alt=""
              width={16}
              height={16}
            />
          </span>
          {position.type}
        </span>
        <span className="flex items-center gap-1">
          <span className="">
            <Image
              src="/assets/icons/career/period.svg"
              alt=""
              width={16}
              height={16}
            />
          </span>
          {position.location}
        </span>
      </div>
      <div className="pt-10">
        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
          <span>View Role</span>
          <Image
            src="/assets/icons/career/view-role.svg"
            alt=""
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default PositionCard;
