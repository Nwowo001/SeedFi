import Image from "next/image";
import React from "react";

interface ResultHeroProps {
  score?: number;
}

const ResultHero: React.FC<ResultHeroProps> = ({ score = 507 }) => {
  const getArrowRotation = (score: number) => {
    const minScore = 200;
    const maxScore = 1000;
    const normalizedScore = Math.max(minScore, Math.min(maxScore, score));
    const percentage = (normalizedScore - minScore) / (maxScore - minScore);
  };

  return (
    <section className="rounded-lg bg-[linear-gradient(to_bottom,white,white_40%,white_70%,#2A885199)]">
      <main className="pt-40 md:pt-56">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-[28px] font-bold mb-4">
            Your SeedScore is,{" "}
            <span className="text-green-600 text-[56px]">{score}!</span>
          </h1>
          <p className="text-[#84868C] pb-30">You're in great shape.</p>

          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              {/* Arc background */}
              <Image
                src="/assets/images/background-arc.svg"
                alt="Score background arc"
                width={343}
                height={343}
              />

              {/* Arrow indicator */}
              <div
                className="absolute top-10 left-10 w-full h-full flex justify-center items-center"
                style={{ transform: `rotate(${getArrowRotation(score)})` }}
              >
                <Image
                  src="/assets/images/arrow-indicator.svg"
                  alt="Arrow indicator"
                  width={45.2}
                  height={146.79}
                />
              </div>

              {/* Center circle with score */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/images/circle.svg"
                  alt="Center circle"
                  width={47}
                  height={47}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-gray-800">
                  {score}
                </div>
              </div>
            </div>

            {/* Labels  */}
            <div className="absolute top-35 left-50 text-[18px] text-red-500 font-medium">
              Poor
            </div>
            <div className="absolute top-4 left-65 text-[18px] text-orange-500 font-medium">
              Fair
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-[18px] text-lime-500 font-medium">
              Good
            </div>
            <div className="absolute top-8 right-47 text-[18px] text-green-500 font-medium">
              Very Good
            </div>
            <div className="absolute top-35 right-35 text-[18px] text-green-600 font-medium">
              Exceptional
            </div>
          </div>

          {/* Footer text */}
          <p className="text-[16px]">
            Powered by <span className="text-[17px] text-primary font-semibold">SeedFi</span>
          </p>
        </div>
      </main>
    </section>
  );
};

export default ResultHero;