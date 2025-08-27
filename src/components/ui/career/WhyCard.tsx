import React from "react";
import Image from "next/image";
import { Why } from "@/types/career";

interface Props {
  item: Why;
}

const WhyCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md pt-6 pb-3 pl-6 flex flex-row gap-6 w-full ">
      <div className="flex flex-col w-full">
        <p
          style={{ color: item.titleColor }}
          className="text-xl font-semibold  w-full"
        >
          {item.title}
        </p>

        <div className="flex justify-between items-center  w-full">
          <div className="flex-1 ">
            <p className="text-sm">{item.desc}</p>
          </div>

          <div className="w-[40%] flex-shrink-0 ">
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="object-contain rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
