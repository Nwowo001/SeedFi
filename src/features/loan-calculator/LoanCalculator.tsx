"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoanCalculator() {
  const [amount, setAmount] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [rate, setRate] = useState<number>(1.2);
  const [calculated, setCalculated] = useState(false);

  const router = useRouter();

  // Auto-adjust interest rate when duration changes
  const handleDurationChange = (value: number) => {
    setDuration(value);
    const newRate = 1.2 + (value - 2) * 0.5;
    setRate(Number(newRate.toFixed(1)));
  };

  const calculateLoan = () => {
    setCalculated(true);
    if (window.innerWidth < 768) {
      const interest = amount * (rate / 100) * duration;
      const total = amount + interest;
      const monthly = duration > 0 ? total / duration : 0;

      router.push(
        `/results?amount=${amount}&interest=${interest.toFixed(2)}&monthly=${monthly.toFixed(2)}`
      );
    }
  };

  const interest = calculated ? amount * (rate / 100) * duration : 0;
  const total = calculated ? amount + interest : 0;
  const monthly = calculated && duration > 0 ? total / duration : 0;

  return (
    <section className="bg-white px-15 py-55 mx-auto  grid md:grid-cols-2 gap-8">
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          <span className="text-[#2A8851]">SeedFi</span> Loan Calculator
        </h2>
        <p className="text-gray-600 mb-8">
          Estimate your monthly payments with our calculator
        </p>

        {/* Loan Amount */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">
            Loan Amount{" "}
            <span className="text-gray-500">(How much money are you looking for?)</span>
          </label>
          <div className="flex items-center gap-2 px-3 py-2 mb-3 border border-gray-300 rounded-md">
            <span className="text-gray-500">₦</span>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full outline-none bg-transparent"
            />
          </div>
          <input
            type="range"
            min={3000}
            max={1500000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-[#2A8851] bg-gray-50 h-2 rounded-lg"
            style={{
              accentColor: "#2A8851",
            }}
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>₦3,000</span>
            <span>₦1,500,000</span>
          </div>
        </div>

        {/* Loan Duration */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">
            Loan Duration{" "}
            <span className="text-gray-500">(How much time do you need to pay back?)</span>
          </label>
          <div className="flex items-center gap-2 px-3 py-2 mb-3 bg-gray-50 rounded-md">
            <input
              type="number"
              placeholder="0 months"
              value={duration}
              onChange={(e) => handleDurationChange(Number(e.target.value))}
              className="w-full outline-none bg-transparent"
            />
            <span className="text-gray-500">months</span>
          </div>
          <input
            type="range"
            min={2}
            max={12}
            value={duration}
            onChange={(e) => handleDurationChange(Number(e.target.value))}
            className="w-full accent-[#2A8851] appearance-none h-2 rounded-lg"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>2 months</span>
            <span>12 months</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">
            Interest Rate{" "}
            <span className="text-gray-500">(Charged monthly)</span>
          </label>
          <div className="flex items-center gap-2 px-3 py-2 mb-3 bg-gray-50 rounded-md">
            <input
              type="number"
              step={0.1}
              placeholder="0.0"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full outline-none bg-transparent"
            />
            <span className="text-gray-500">%</span>
          </div>
          <input
            type="range"
            min={1.2}
            max={20}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-[#2A8851] appearance-none h-2 rounded-lg"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>1.2%</span>
            <span>20%</span>
          </div>
        </div>

        <button
          onClick={calculateLoan}
          className="bg-[#2A8851] text-white px-6 py-3 rounded-md hover:bg-green-700"
        >
          Calculate
        </button>
      </div>

      {/* RIGHT SIDE - Results */}
      <div className="hidden md:flex flex-col bg-[#E5EDF8] rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#2A8851] mb-6">SeedFi</h2>

        {/* Amount */}
        <div className="mb-4">
          <div className="flex items-center gap-2 rounded-md px-3 py-2 bg-white">
            <span className="text-gray-500">₦</span>
            <input
              type="text"
              readOnly
              value={amount.toLocaleString()}
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
              value={interest.toFixed(2)}
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
              value={monthly.toFixed(2)}
              placeholder="₦"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => {
              setAmount(0);
              setDuration(0);
              setRate(1.2);
              setCalculated(false);
            }}
            className="px-6 py-2 border rounded-md text-gray-600 bg-white hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            disabled={!calculated}
            className={`px-6 py-2 rounded-md ${
              calculated
                ? "bg-[#2A8851] text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Apply for a Loan
          </button>
        </div>
      </div>
    </section>
  );
}