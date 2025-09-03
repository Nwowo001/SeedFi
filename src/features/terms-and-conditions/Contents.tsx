"use client";
import Image from "next/image";
import React, { useState } from "react";

const Contents = () => {
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
                  02. Access to the service
                </li>
                <li onClick={() => scrollToSection("account")}>
                  03. Account enrolment
                </li>
                <li onClick={() => scrollToSection("loan")}>
                  04. Loan/credit facility terms
                </li>
                <li>05. Disclaimers</li>
                <li>06. Availability of Services</li>
                <li>07. Discontinuation of Services of your account</li>
                <li>08. Modifications to the terms</li>
                <li>09. Additional terms</li>
                <li>10. Conditions Precedent to drawdown</li>
                <li>11. Transaction dynamics</li>
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
                <li onClick={() => scrollToSection("access")}>
                  02. Access to the service
                </li>
                <li onClick={() => scrollToSection("account")}>
                  03. Account enrolment
                </li>
                <li onClick={() => scrollToSection("loan")}>
                  04. Loan/credit facility terms
                </li>
                <li>05. Disclaimers</li>
                <li>06. Availability of Services</li>
                <li>07. Discontinuation of Services of your account</li>
                <li>08. Modifications to the terms</li>
                <li>09. Additional terms</li>
                <li>10. Conditions Precedent to drawdown</li>
                <li>11. Transaction dynamics</li>
              </ol>
            </div>
          </div>
          <div className="flex-1 px-4 md:px-0">
            <section id="welcome" className="mb-12">
              <p className="text-xl font-bold font-body mb-4">Welcome</p>
              <div className="mb-6">
                <p className="text-[16px] font-normal font-body leading-relaxed">
                  SeedFi ("Platform") is a digital lending Platform developed
                  and operated by The Dataseed Company Limited ("Us, We, Our").
                  <br />
                  <span className="mt-5 block">
                    {" "}
                    Please read these Terms and Conditions ("Terms") carefully.
                    Access to, and use of SeedFi's services ("Services"), and
                    the Platform, is conditional on your agreement to these
                    Terms. You must read, agree with, and accept all the terms
                    and conditions contained in these Terms. By registering, or
                    by using SeedFi, you are bound to these Terms, and you
                    indicate your continued acceptance of these Terms.
                  </span>
                </p>
              </div>
            </section>

            <section id="access" className="mb-12">
              <p className="text-xl font-bold font-body mb-4 ">
                Access to the service
              </p>
              <div className="">
                <p className="text-[16px] font-normal font-body leading-relaxed">
                  To be eligible to use the Platform you must be:
                </p>
              </div>
              <div className="mb-6">
                <ul className="list-disc list-outside space-y-3 text-[16px] font-normal font-body leading-relaxed ml-6 pl-2">
                  <li>
                    18 years or above. If you are under 18 and you wish to
                    access or use the Services, your parents or legal guardian
                    must consent to our Terms, otherwise, you shall immediately
                    discontinue its use.We also reserve the right to discontinue
                    your use of the Platform if you are less than 18 years and
                    have not gotten the consent of your parents or legal
                    guardian.
                  </li>
                  <li>
                    Physically located or are a resident of the State or Country
                    you have chosen as your current residency when creating your
                    Account.
                  </li>
                </ul>
              </div>
            </section>

            <section id="account" className="mb-12">
              <p className="text-xl font-bold font-body mb-6">
                Account enrolment
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
                <h3 className="font-semibold text-lg font-body mb-3">
                  Loan application
                </h3>
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
                <h3 className="font-semibold text-lg font-body mb-3">
                  Terms Guiding the Grant and Utilisation of Credit Facility
                </h3>
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

export default Contents;
