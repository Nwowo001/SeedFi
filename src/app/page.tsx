import Animation from "@/context/animation";
import Blog from "@/features/Blog";
import FuelingGrowth from "@/features/FuelingGrowth";
import Hero from "@/features/Hero";
import OurPartners from "@/features/OurPartners";
import ProductsAndServices from "@/features/ProductsAndServices";
import Reviews from "@/features/Reviews";
import WhySeedfi from "@/features/WhySeedfi";

export default function Home() {
  return (
    <>
      <Animation>
        <Hero />
      </Animation>
      <Animation delay={0.2}>
        <ProductsAndServices />
      </Animation>
      <Animation delay={0.4}>
        <OurPartners />
      </Animation>
      <Animation delay={0.6}>
        <WhySeedfi />
      </Animation>
      <Animation delay={0.8}>
        <FuelingGrowth />
      </Animation>

      <Animation delay={1}>
        <Reviews />
      </Animation>
      <Animation delay={1.2}>
        <Blog />
      </Animation>
    </>
  );
}
