import React from "react";
import { whySeedfi } from "@/constants/whyseedfi";
import Image from "next/image";

const WhySeedfiCards = () => {
  return (
    <div className="relative w-full px-4">
      <div className="relative grid grid-cols-1 md:grid-cols-12 lg:min-h-[700px]  gap-12">
        {/* Card 1 */}
        <div className="relative md:absolute md:top-0 md:left-10 md:col-span-4">
          <div
            className="relative rounded-2xl pl-10 pr-7 pt-6 pb-4 shadow-lg border border-gray-100 max-w-md mx-auto"
            style={{ backgroundColor: whySeedfi[0].bgColor }}
          >
            <div className="absolute -top-5 -left-5">
              <Image src={whySeedfi[0].icon} alt="" width={48} height={48} />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4 italic">
              {whySeedfi[0].title}
            </p>
            <p className="text-gray-600 leading-relaxed ">
              {whySeedfi[0].desc}
            </p>
          </div>
          <div className="lg:translate-y-[-2.5rem] flex justify-center md:block mt-0 md:mt-10">
            <Image
              src="/assets/images/empower dots.svg"
              alt=""
              width={100}
              height={190}
              className="md:absolute md:left-[40%] md:top-0"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative md:absolute  md:top-[-40px] md:right-0 md:col-span-4 top-[-50px]">
          <div
            className="relative rounded-2xl pl-10 pr-7 pt-6 pb-4 shadow-md border border-gray-100 max-w-md mx-auto"
            style={{ backgroundColor: whySeedfi[1].bgColor }}
          >
            <div className="absolute -top-5 -left-5">
              <Image src={whySeedfi[1].icon} alt="" width={48} height={48} />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4 italic">
              {whySeedfi[1].title}
            </p>
            <p className="text-gray-600 leading-relaxed ">
              {whySeedfi[1].desc}
            </p>
          </div>
          <div className=" lg:translate-y-50 flex justify-center md:block mt-0 md:mt-0">
            <Image
              src="/assets/images/more dott.svg"
              alt=""
              width={200}
              height={80}
              className="md:absolute md:-bottom-[80px] md:right-[70px] lg:h-70 h-50"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative md:absolute md:top-[320px] md:left-0 md:col-span-4 top-[-100px]">
          <div
            className="relative rounded-2xl pl-10 pr-7 pt-6 pb-4 shadow-md border border-gray-100 max-w-md mx-auto"
            style={{ backgroundColor: whySeedfi[2].bgColor }}
          >
            <div className="absolute -top-5 -left-5">
              <Image src={whySeedfi[2].icon} alt="" width={48} height={48} />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4 italic">
              {whySeedfi[2].title}
            </p>
            <p className="text-gray-600 leading-relaxed ">
              {whySeedfi[2].desc}
            </p>
          </div>
          <div className="flex justify-center md:block mt-0 md:mt-0">
            <Image
              src="/assets/images/low dott.svg"
              alt=""
              width={260}
              height={83}
              className="rotate-[105.45deg] md:rotate-0 md:absolute md:top-1/2 md:left-full md:-translate-y-1/2 absolute -bottom-40"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative md:absolute lg:top-[400px] md:right-0 md:col-span-4 top-[40px]">
          <div
            className="relative rounded-2xl pl-10 pr-7 pt-6 pb-4 shadow-md border border-gray-100 max-w-md mx-auto"
            style={{ backgroundColor: whySeedfi[3].bgColor }}
          >
            <div className="absolute -top-5 -left-5">
              <Image src={whySeedfi[3].icon} alt="" width={48} height={48} />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4 italic">
              {whySeedfi[3].title}
            </p>
            <p className="text-gray-600 leading-relaxed">{whySeedfi[3].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySeedfiCards;
