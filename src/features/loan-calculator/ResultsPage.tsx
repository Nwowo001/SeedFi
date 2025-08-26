"use client";

import { useSearchParams, useRouter } from "next/navigation";

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const amount = searchParams.get("amount");
  const interest = searchParams.get("interest");
  const monthly = searchParams.get("monthly");

  return (
    <section className="max-w-md mx-auto py-55 px-10 bg-white rounded-2xl shadow-md mt-8">
      <button
        onClick={() => router.back()}
        className="mb-4 text-green-600 hover:underline"
      >
        &larr; Back
      </button>
<div className="bg-[#E5EDF8]">
      {/* Header */}
      <h2 className="text-2xl font-bold text-[#2A8851] mb-6">SeedFi</h2>

      {/* Loan Amount */}
      <div className="mb-4">
        <div className="flex items-center gap-2 rounded-md px-3 py-2 bg-white">
          <span className="text-gray-500">₦</span>
          <input
            type="text"
            readOnly
            value={amount || ""}
            placeholder="₦"
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
            value={interest || ""}
            placeholder="₦"
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
            value={monthly || ""}
            placeholder="₦"
            className="w-full outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Buttons */}
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
    </section>
  );
};

export default ResultsPage;
