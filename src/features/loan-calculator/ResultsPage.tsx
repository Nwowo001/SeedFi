"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Convert query params safely to numbers
  const amount = Number(searchParams.get("amount") || 0);
  const interest = Number(searchParams.get("interest") || 0);
  const monthly = Number(searchParams.get("monthly") || 0);

  return (
    <section className=" bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className=" py-35 px-6">
          <div className="flex items-center justify-between  mb-12">
            {/* Back button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-[#2A8851] hover:text-green-700 transition-colors"
            >
              <Image
                src="/assets/icons/back.svg"
                alt="Back"
                width={24}
                height={24}
              />
            </button>

            {/* Title */}
            <p className="text-xl lg:text-[32px] font-bold text-center flex-1">
              <span className="text-[#2A8851]">
                Seed<span className="italic">Fi</span>
              </span>{" "}
              Loan Calculator
            </p>
          </div>

          <div className="bg-[#E5EDF8] rounded-[30px] p-4">
            <p className="text-2xl font-semibold text-[#2A8851] mb-6">
              Seed<span className="italic">Fi</span>
            </p>

            {/* Amount */}
            <div className="mb-10">
              <div className="flex items-center gap-2 rounded-lg px-3 py-8 bg-white shadow">
                <span className="text-xl">₦</span>
                <input
                  type="text"
                  readOnly
                  value={amount.toLocaleString()}
                  className="w-full outline-none bg-transparent text-xl"
                />
              </div>
            </div>

            {/* Interest */}
            <div className="mb-10">
              <label className="text-sm text-[#84868C] block mb-3">
                Total Interest
              </label>
              <div className="flex items-center gap-2 rounded-lg px-3 py-3 bg-white shadow">
                <span>₦</span>
                <input
                  type="text"
                  readOnly
                  value={interest.toLocaleString()}
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Monthly Repayment */}
            <div className="mb-10">
              <label className="text-sm text-[#84868C] block mb-3">
                Monthly Repayment
              </label>
              <div className="flex items-center gap-2 rounded-lg px-3 py-3 bg-white shadow">
                <span>₦</span>
                <input
                  type="text"
                  readOnly
                  value={monthly.toLocaleString()}
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 items-center justify-center mt-8">
              <button
                onClick={() => router.back()}
                className="px-8 py-2 border rounded-lg text-gray-600 hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                onClick={() => router.push("/apply")}
                className="px-4 py-2.5 rounded-lg bg-[#D9D9D9] text-gray-500 hover:bg-green-700"
              >
                Apply for a Loan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-md mx-auto py-16 px-10 bg-white rounded-2xl shadow-md mt-8">
        <button
          onClick={() => router.back()}
          className="mb-4 text-green-600 hover:underline"
        >
          &larr; Back
        </button>
        <div className="bg-[#E5EDF8] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-[#2A8851] mb-6">SeedFi</h2>

          {/* Amount */}
          <div className="mb-4">
            <div className="flex items-center gap-2 rounded-md px-3 py-2 bg-white">
              <span className="text-gray-500">₦</span>
              <input
                type="text"
                readOnly
                value={amount.toLocaleString()}
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Interest */}
          <div className="mb-4">
            <label className="text-sm block mb-1">Total Interest</label>
            <div className="flex items-center gap-2 rounded-md px-3 py-2 bg-white">
              <span className="text-gray-500">₦</span>
              <input
                type="text"
                readOnly
                value={interest.toLocaleString()}
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Monthly Repayment */}
          <div className="mb-6">
            <label className="text-sm block mb-1">Monthly Repayment</label>
            <div className="flex items-center gap-2 rounded-md px-3 py-2 bg-white">
              <span className="text-gray-500">₦</span>
              <input
                type="text"
                readOnly
                value={monthly.toLocaleString()}
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => router.back()}
              className="px-6 py-2 border rounded-md text-gray-600 bg-white hover:bg-gray-100"
            >
              Reset
            </button>
            <button
              onClick={() => router.push("/apply")}
              className="px-6 py-2 rounded-md bg-[#2A8851] text-white hover:bg-green-700"
            >
              Apply for a Loan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsPage;
