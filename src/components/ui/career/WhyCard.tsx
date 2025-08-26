import React from "react";
import Image from "next/image";
import { Why as WhyType } from "@/types/career";

interface Props {
  item: WhyType;
}

const WhyCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
      <p
        style={{ color: item.titleColor }}
        className="text-xl font-semibold"
      >
        {item.title}
      </p>

      <div className="flex flex-row  gap-4 w-full">
        <p className="text-gray-600 text-sm flex-1 ">{item.desc}</p>
        <Image
          src={item.image}
          alt={item.title}
          width={168}
          height={168}
          className="object-contain self-end w-[40%]"
        />
      </div>
    </div>
  );
};

export default WhyCard;
