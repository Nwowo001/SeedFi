import Hero from "@/features/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[url(/assets/images/background-texture)]bg-cover bg-center h-screen">
        <div className="opacity-100 top-[714px] left-[20.34px] rotate-[-152.3deg]">
          <Image
            src="/assets/images/sphere-full.svg"
            alt="Hero Image"
            width={56}
            height={56}
          />
        </div>
        <div>
          <Image
            src="/assets/images/coa.svg"
            alt="Hero Image"
            width={14}
            height={18}
          />
        </div>
        <div className="opacity-100 top-[362px] left-[1398px] rotate-[-27.78deg]">
          <Image
            src="/assets/images/split-sphere.svg"
            alt="Hero Image"
            width={47}
            height={47}
          />
        </div>
        <Hero />
      </div>
    </>
  );
}
