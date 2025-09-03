import React from "react";

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-b from-[#EAF3EE] via-[#EAF3EE] to-transparent lg:pt-55 pt-35 flex justify-center items-center">
      {" "}
      <div className="text-center px-6 ">
        <p className="text-[28px] lg:text-[56px] font-bold  mb-9">
          Insights to Power Your Financial Journey
        </p>
        <p className="text-[16px] lg:text-xl   mx-auto lg:w-[45%] pb-20 lg:pb-40">
          Smart content for smarter choices — whether you're just starting out
          or already on your way.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
