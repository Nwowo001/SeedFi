"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoanCalculator() {
  const [amount, setAmount] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [rate, setRate] = useState<number>(1.2);
  const [calculated, setCalculated] = useState(false);

  const router = useRouter();

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
        `/results?amount=${amount}&interest=${interest.toFixed(
          2
        )}&monthly=${monthly.toFixed(2)}`
      );
    }
  };

  const interest = calculated ? amount * (rate / 100) * duration : 0;
  const total = calculated ? amount + interest : 0;
  const monthly = calculated && duration > 0 ? total / duration : 0;

  return (
    <section className=" bg-white pt-25 lg:pt-45 pb-16">
      <div className="flex flex-row justify-between mx-auto lg:px-25 px-4 gap-12">
        {/* LEFT SIDE */}
        <div className="py-8 px-6">
          <div className="lg:text-start text-center">
            <p className="text-[28px] lg:text-[32px] font-semibold mb-2">
              <span className="text-[#2A8851]">
                Seed<span className="italic">Fi</span>
              </span>{" "}
              Loan Calculator
            </p>
            <p className="text-[#84868C] lg:text-[16px] text-sm   mb-10">
              Estimate your monthly payments with our calculator
            </p>
          </div>
          {/* Loan Amount */}
          <div className="mb-6">
            <label className="block  lg:text-[16px] text-sm   font-medium mb-3">
              Loan Amount{" "}
              <span className="text-[#84868C]">
                (How much money are you looking for?)
              </span>
            </label>
            <div className="flex items-center gap-2 px-4 py-3  rounded-lg bg-white">
              <span className="text-[#84868C] text-2xl font-medium">₦</span>
              <input
                type="text"
                placeholder="0.00"
                value={amount.toLocaleString()}
                onChange={(e) =>
                  setAmount(Number(e.target.value.replace(/,/g, "")))
                }
                className="w-full outline-none bg-transparent text-2xl"
              />
            </div>
            <input
              type="range"
              min={3000}
              max={1500000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none bg-gray-200"
              style={{
                background: `linear-gradient(to right, #2A8851 0%, #2A8851 ${
                  ((amount - 3000) / (1500000 - 3000)) * 100
                }%, #e5e7eb ${
                  ((amount - 3000) / (1500000 - 3000)) * 100
                }%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between font-body text-sm   text-[#84868C] mt-5">
              <span>₦3,000</span>
              <span>₦1,500,000</span>
            </div>
          </div>

          {/* Loan Duration */}
          <div className="mb-6">
            <label className="block lg:text-[16px] text-sm   font-medium mb-3">
              Loan Duration{" "}
              <span className="text-[#84868C]">
                (How much time do you need to pay back?)
              </span>
            </label>
            <div className="flex items-center px-4 py-3 rounded-lg bg-white ">
              <input
                type="text"
                placeholder="0"
                value={duration}
                onChange={(e) => handleDurationChange(Number(e.target.value))}
                className="outline-none bg-transparent text-2xl w-[30px]"
              />
              <span className="text-[#84868C] text-2xl font-medium">
                months
              </span>
            </div>

            <input
              type="range"
              min={2}
              max={12}
              value={duration}
              onChange={(e) => handleDurationChange(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none bg-gray-200"
              style={{
                background: `linear-gradient(to right, #2A8851 0%, #2A8851 ${
                  ((duration - 2) / (12 - 2)) * 100
                }%, #e5e7eb ${
                  ((duration - 2) / (12 - 2)) * 100
                }%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between font-body text-sm   text-[#84868C] mt-5">
              <span>2 months</span>
              <span>12 months</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="mb-8">
            <label className="block lg:text-[16px] text-sm   font-medium mb-3">
              Interest Rate{" "}
              <span className="text-[#84868C]">(Charged monthly)</span>
            </label>
            <div className=" flex items-center px-4 py-3 rounded-lg bg-white ">
              <input
                type="text"
                placeholder="1.2"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="outline-none bg-transparent text-2xl w-[50px]"
              />
              <span className="text-[#84868C] text-2xl font-medium">%</span>
            </div>
            <input
              type="range"
              min={1.2}
              max={20}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none bg-gray-200"
              style={{
                background: `linear-gradient(to right, #2A8851 0%, #2A8851 ${
                  ((rate - 1.2) / (20 - 1.2)) * 100
                }%, #e5e7eb ${
                  ((rate - 1.2) / (20 - 1.2)) * 100
                }%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between font-body text-sm   text-[#84868C] mt-2">
              <span>1.2%</span>
              <span>20%</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={calculateLoan}
              className="bg-[#2A8851] text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Calculate
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Results */}
        <div className="pt-25 w-[45%]  hidden lg:block">
          <div className=" bg-[#E5EDF8] rounded-[30px] py-5 px-10 h-fit">
            <p className="text-3xl font-semibold text-[#2A8851] mb-3">
              Seed<span className="italic">Fi</span>
            </p>

            {/* Amount */}
            <div className="">
              <div className="flex items-center gap-2 rounded-lg px-3 py-6 bg-white shadow">
                <span className=" text-2xl">₦</span>
                <input
                  type="text"
                  readOnly
                  value={amount.toLocaleString()}
                  className="w-full outline-none bg-transparent text-2xl  "
                />
              </div>
            </div>

            {/* Interest */}
            <div className="mb-2 pt-10 ">
              <label className="text-sm text-[#84868C] block mb-1">
                Total Interest
              </label>
              <div className="flex justify-end pt-2">
                <div className="w-[75%] shadow flex justify-end items-center gap-2 rounded-lg px-3 py-3 bg-white">
                  <span>₦</span>
                  <input
                    type="text"
                    readOnly
                    value={monthly.toLocaleString()}
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Monthly Repayment */}
            <div className="mb-6 pt-5">
              <label className="text-sm text-[#84868C] block mb-1">
                Monthly Repayment
              </label>
              <div className="flex justify-end pt-2">
                <div className=" w-[75%] shadow flex justify-end items-center gap-2 rounded-lg px-3 py-3 bg-white">
                  <span>₦</span>
                  <input
                    type="text"
                    readOnly
                    value={monthly.toLocaleString()}
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-6 items-center justify-center pt-7">
              <button
                onClick={() => {
                  setAmount(0);
                  setDuration(0);
                  setRate(1.2);
                  setCalculated(false);
                }}
                className=" px-15 py-2.5 border rounded-lg   hover:bg-gray-50 transition-colors lg:text-[16px] text-sm  "
              >
                Reset
              </button>
              <button
                disabled={!calculated}
                className={` px-4.5 py-2.5 rounded-lg transition-colors lg:text-[16px] text-sm   ${
                  calculated
                    ? "bg-[#2A8851] text-white hover:bg-green-700"
                    : "bg-gray-300 text-[#84868C] cursor-not-allowed"
                }`}
              >
                Apply for a Loan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
