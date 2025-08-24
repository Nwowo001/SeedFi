import Link from "next/link";
import React from "react";

const Invitation = () => {
  return (
    <section className="bg-white py-16 ">
      <div className="flex flex-col items-center justify-center text-center w-[90%] mx-auto px-4">
        <p className="text-2xl lg:text-[28px] font-body font-bold  mb-4">
          Come Build with Us
        </p>
        <p className="text-[16px] font-normal font-body pb-10">
          Every tool. Every impact — it all starts with the right people. That
          could be you.
        </p>
        <div className="py-5">
        <Link 
          href={"/"}
          className="bg-[#2A8851] text-white  border border-green-700 px-4 py-3 rounded-xl font-semibold "
        >
          See Open Roles
        </Link>
        </div> 
      </div>
    </section>
  );
};

export default Invitation;
