"use client";
import { products } from "@/constants/products";
import Card from "@/components/ui/Card";
const ProductsAndServices = () => {
  return (
    <section className="w-full mx-auto px-8 md:px-8 lg:px-16 pt-12 lg:pt-12 bg-white">
      <p className="font-figtree lg:font-bold font-semibold text-xl lg:text-[28px] text-[#1A201D] mb-8">
        Products & Services
      </p>

      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="row-span-2 w-60%">
            <Card product={products[0]} />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <Card product={products[1]} />
            <Card product={products[2]} />
          </div>
        </div>

        {/* Bottom row  */}
        <div className="grid grid-cols-5 gap-6 mb-6">
          <div className="col-span-3">
            <Card product={products[3]} />
          </div>
          <div className="col-span-2">
            <Card product={products[4]} />
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="row-span-2">
            <Card product={products[3]} />
          </div>
          <div className="space-y-4">
            <Card product={products[1]} />
            <Card product={products[2]} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card product={products[0]} />
          <Card product={products[4]} />
        </div>
      </div>

      {/* Mobile Layout  */}
      <div className="md:hidden">
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsAndServices;
