"use client";
import Image from "next/image";
import React, { useState } from "react";

const PrivacyContent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsDropdownOpen(false);
  };

  return (
    <>
      <section className="w-full pb-50">
        <div className="md:hidden sticky top-0 z-10 bg-white p-4 shadow-sm">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full border rounded-2xl border-[#D9D9D9] px-4 py-3 text-left text-[16px] font-semibold font-body flex justify-between items-center"
          >
            Content Table
            <span>
              {isDropdownOpen ? (
                <Image
                  src="/assets/icons/dropdownmenu.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="rotate-180"
                />
              ) : (
                <Image
                  src="/assets/icons/dropdownmenu.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              )}
            </span>
          </button>
          {isDropdownOpen && (
            <div className="border border-t-0 rounded-b-2xl border-[#D9D9D9] px-4 pb-4">
              <ol className="flex flex-col gap-3 cursor-pointer text-[14px] font-medium font-body">
                <li onClick={() => scrollToSection("welcome")}>01. Welcome</li>
                <li onClick={() => scrollToSection("access")}>
                  02. Data Collection and Use
                </li>
                <li onClick={() => scrollToSection("account")}>
                  03. Types of Data Collected
                </li>
                <li onClick={() => scrollToSection("loan")}>
                  04. Information on How You Use Your Device
                </li>
                <li>05. Tracking & Cookies Data</li>
                <li>06. Examples of cookies we use</li>
                <li>07. Other Information</li>
                <li>08. Use of Collected Data</li>
                <li>09. Disclosure of Data</li>
                <li>10. Information From Locations Outside Nigeria</li>
                <li>11. How Long We Will Keep Your Information</li>
                <li>12. Security of Data</li>
                <li>13. Your Rights</li>
                <li>14. Service Providers</li>
                <li>15. Links to Other Sites</li>
                <li>16. Privacy of Minors</li>
                <li>17. Social Media Platforms</li>
                <li>18. Information Update</li>
                <li>19. Changes to This Privacy Policy</li>
                <li>20. Contact Us</li>
              </ol>
            </div>
          )}
        </div>

        <div className="flex gap-15 p-4 md:p-20">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-[30%] flex-shrink-0">
            <div className="sticky top-20 border rounded-2xl border-[#D9D9D9] px-4 h-fit">
              <p className="py-4 text-[16px] font-semibold font-body">
                Content Table
              </p>
              <ol className="flex flex-col gap-8 pb-4 cursor-pointer text-[14px] font-medium font-body">
                <li onClick={() => scrollToSection("welcome")}>01. Welcome</li>
                <li onClick={() => scrollToSection("data")}>
                  02. Data Collection and Use
                </li>
                <li onClick={() => scrollToSection("types")}>
                  03. Types of Data Collected
                </li>
                <li onClick={() => scrollToSection("information")}>
                  04. Information on How You Use Your Device
                </li>
                <li>05. Tracking & Cookies Data</li>
                <li>06. Examples of cookies we use</li>
                <li>07. Other Information</li>
                <li>08. Use of Collected Data</li>
                <li>09. Disclosure of Data</li>
                <li>10. Information From Locations Outside Nigeria</li>
                <li>11. How Long We Will Keep Your Information</li>
                <li>12. Security of Data</li>
                <li>13. Your Rights</li>
                <li>14. Service Providers</li>
                <li>15. Links to Other Sites</li>
                <li>16. Privacy of Minors</li>
                <li>17. Social Media Platforms</li>
                <li>18. Information Update</li>
                <li>19. Changes to This Privacy Policy</li>
                <li>20. Contact Us</li>
              </ol>
            </div>
          </div>
          <div className="flex-1 px-4 md:px-0">
            <section id="welcome" className="mb-12">
              <p className="text-xl font-bold font-body mb-4">Welcome</p>
              <div className="mb-6">
                <p className="text-[16px] font-normal font-body leading-relaxed">
                  This page informs you of our policies regarding the
                  collection, use, and disclosure of personal information when
                  you use our Service/platform and the choices you have
                  associated with that data. We are committed to treating and
                  using your personal information responsibly. Please read our
                  privacy policy carefully to get a clear understanding of how
                  we collect, use, protect or otherwise handle your Personal
                  Information. 
                  <br />
                  <span className="mt-5 block">
                    {" "}
                    By using the Service, you agree to the collection and use of
                    your personal information in accordance with this policy. 
                  </span>
                </p>
              </div>
            </section>

            <section id="data" className="mb-12">
              <p className="text-xl font-bold font-body mb-4 ">
                Data Collection and Use
              </p>
              <div className="">
                <p className="text-[16px] font-normal font-body leading-relaxed">
                  We collect different types of information for various purposes
                  to provide and improve our Service to you.{" "}
                </p>
              </div>
            </section>

            <section id="account" className="mb-12">
              <p className="text-xl font-bold font-body mb-6">
                Types of Data Collected
              </p>
              <div className="mb-6">
                <p className="text-[16px] font-normal font-body leading-relaxed">
                  To access the Services on the Platform, firstly, you need to
                  enroll to create a profile ("Account"), by providing certain
                  information such as your name, address, email address, mobile
                  device number, Date of Birth, personal photograph, BVN, means
                  of identification, utility bill and such other information as
                  we may request from time to time (collectively, "User
                  Information").
                </p>
              </div>
              <div className="mb-6">
                <p className="mb-3">
                  In exchange for your use of the Services, You agree to:
                </p>
                <ul className="list-disc list-outside space-y-3 text-[16px] font-normal font-body leading-relaxed ml-6 pl-2">
                  <li>
                    provide true, accurate, current and complete information
                    about yourself as prompted by our Account enrolment form and
                  </li>
                  <li>
                    each time you log on, maintain and promptly update such
                    Account information to keep it true, accurate, current and
                    complete. If you provide any information that is untrue,
                    inaccurate, not current or incomplete, or we have reasonable
                    grounds to suspect that such Account information is untrue,
                    inaccurate, not current or incomplete, we reserve the right
                    to refuse any future request(s) to use the Services.
                  </li>
                </ul>
              </div>
            </section>

            <section id="loan" className="mb-12">
              <p className="text-xl font-bold font-body mb-6">
                Loan/credit facility terms
              </p>
              <div className="mb-6">
                <p className="font-semibold text-xl font-body mb-3">
                  Loan application
                </p>
                <ul className="list-disc list-outside space-y-3 text-[16px] font-normal font-body leading-relaxed ml-6 pl-2">
                  <li>
                    You may submit a loan application to us by following the
                    instructions on the Platform. Loan application is considered
                    upon providing certain information, such as monthly income,
                    online credentials for your Bank Account, credit status
                    check from the bureaus and CBNs CRMS, and such other
                    information as we may request from time to time
                    (collectively, "User Information").
                  </li>
                  <li>
                    {" "}
                    Approval of a loan/credit facility application submitted by
                    you is at the sole discretion of SeedFi.
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-xl font-body mb-3">
                  Terms Guiding the Grant and Utilisation of Credit Facility
                </p>
                <ul className="list-disc list-outside space-y-3 text-[16px] font-normal font-body leading-relaxed ml-6 pl-2">
                  <li>
                    If we approve your loan/credit facility request, you shall
                    be issued an Offer Letter which you are expected to accept
                    unconditionally. The Offer Letter shall state specific terms
                    guiding the facility granted to you.
                  </li>
                  <li>
                    Once an Offer Letter is issued to you, you may be referred
                    to as a Borrower.If you take a loan with us, you thereby
                    authorize us to debit your Bank accounts provided to us for
                    all fees associated with the loan immediately after the
                    facility is disbursed. You Irrevocably undertake and
                    covenant that you shall at all times make funds available in
                    your account for the purpose of meeting your obligations
                    when due. The foregoing shall be construed as a continuing
                    instruction from you and shall not be revoked by you until
                    you have fully paid down the credit facility availed to you.
                  </li>
                  <li>
                    All expenses incurred in the arrangement, documentation, and
                    enforcement of payments under this facility would be borne
                    by you.
                  </li>
                  <li>
                    Utilization of the facility or any part thereof shall be at
                    the sole discretion of SeedFi and is subject to satisfactory
                    documentation and regulation of CBN or other regulatory
                    bodies as may be laid down from time to time.
                  </li>
                  <li>
                    The facility shall terminate and all sums due to us there
                    under shall become immediately due and payable if you commit
                    any breach or defaults under the terms of the facility
                    granted to you by SeedFi or any financial institution or
                    lender.
                  </li>
                  <li>
                    You shall keep SeedFi fully informed of all facilities
                    granted to you by other Lenders or financial institutions.
                  </li>
                  <li>
                    You will utilize the loan solely for the purpose(s) for
                    which it was approved.
                  </li>
                  <li>
                    Your Account must revert to credit on or before expiration
                    of the facility.
                  </li>
                  <li>
                    Any outstanding unpaid obligation at expiration will attract
                    interest at 1% flat monthly.
                  </li>
                  <li>
                    These rates are subject to review/change in line with money
                    market conditions at any time or SeedFi's discretion. SeedFi
                    will send a notification via email or Short Message Service
                    (SMS) or written letter in advance of the application of the
                    new rate. However, SeedFi has the right to implement the
                    changes at the end of the notice period if there is no
                    response to the notice.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyContent;
