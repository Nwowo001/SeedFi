import { FuelingGrowth } from "@/types";
import Image from "next/image";

interface FuelingGrowthCardProps {
  card: FuelingGrowth;
}

const FuelingGrowthCard = ({ card }: FuelingGrowthCardProps) => {
  return (
    <div
      className="relative flex w-[90%] flex-shrink-0 snap-center flex-col items-center gap-8 overflow-hidden rounded-3xl p-10 md:w-auto md:max-w-3xl md:flex-row"
      style={{ backgroundColor: card.bgColor }}
    >
      {/* Decorative icons remain the same */}
      <Image
        src={card.icon.topMoneyMistakes}
        alt=""
        width={8}
        height={8}
        className="absolute top-[30px] left-[40px]  md:block"
      />
      <Image
        src={card.icon.bottomMoneyMistakes}
        alt=""
        width={7}
        height={17}
        className="absolute bottom-[30px] left-[30px]  md:block"
      />
      <Image
        src={card.icon.sphereFull}
        alt=""
        width={43}
        height={43}
        className="absolute top-[20px] right-[25px] z-10  md:block"
      />
      <Image
        src={card.icon.bottomRight}
        alt=""
        width={11}
        height={11}
        className="absolute bottom-[25px] right-[45px] z-10  md:block"
      />
      <Image
        src={card.icon.leftBesideImage}
        alt=""
        width={5}
        height={10}
        className="absolute top-[1/2] right-[390px] hidden md:block"
      />

      <div className="z-20 flex-1 text-start md:text-left">
        <p className="text-sm font-semibold uppercase tracking-wider text-zinc-700">
          {card.title}
        </p>
        <h3 className="mt-2 mb-4 text-4xl font-bold text-zinc-900">
          {card.category}
        </h3>
        <p className="whitespace-pre-wrap leading-relaxed text-zinc-600">
          {card.desc}
        </p>
      </div>

      <div className="relative z-20 shrink-0 order-first md:order-last">
        <Image
          src={card.video}
          alt={card.category}
          width={card.imageConfig.width}
          height={card.imageConfig.height}
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default FuelingGrowthCard;
