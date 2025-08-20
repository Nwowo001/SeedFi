import { navItems } from "@/constants/navigation";
import { NavItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="w-full relative bg-primary text-gray-100">
      <Image
        src={"/assets/images/footer-top.svg"}
        width={1740}
        height={20}
        alt="Footer decorative wave"
        className="absolute -top-6"
      />
      <div className="flex flex-col md:flex-row justify-between px-24 py-20 text-md">
        <div>
          <h2>{navItems[1].label}</h2>
          <ul className="mt-2 flex flex-col gap-3">
            {navItems[1].dropdown?.map((item: NavItem, id: number) => (
              <li key={id}>
                <Link href={item?.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{navItems[2].label}</h2>
          <ul className="mt-2 flex flex-col gap-3">
            {navItems[2].dropdown?.map((item: NavItem, id: number) => (
              <li key={id}>
                <Link href={item?.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{navItems[3].label}</h2>
          <ul className="mt-2 flex flex-col gap-3">
            {navItems[3].dropdown?.map((item: NavItem, id: number) => (
              <li key={id}>
                <Link href={item?.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Legal</h2>
          <ul className="mt-2 flex flex-col gap-3">
            <li>
              <Link href={""}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={""}>Terms & Condition</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Download the App</h2>
          <ul className="mt-2 flex flex-col gap-3">
            <li>
              <Link href={""}>
                <Image
                  src={"/assets/images/andriod.svg"}
                  width={150}
                  height={42}
                  alt="Get it on Google Play"
                />
              </Link>
            </li>
            <li>
              <Link href={""}>
                <Image
                  src={"/assets/images/ios.svg"}
                  width={150}
                  height={42}
                  alt="Download on the App Store"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            src={"/assets/images/logo-footer.svg"}
            width={110}
            height={32}
            alt="seedfi-footer-logo"
          />
          <ul>
            <li>
              <Link href={""}>
                <Image
                  src={"/assets/images/audit-badge.svg"}
                  width={160}
                  height={87}
                  alt="Audit badge"
                />
              </Link>
            </li>
          </ul>
          <div className="flex gap-8 mt-4">
            <Link href={"/"}>
              <Image
                src={"/assets/icons/x.svg"}
                width={20}
                height={20}
                alt="facebook-icon"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/assets/icons/instagram.svg"}
                width={20}
                height={20}
                alt="facebook-icon"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/assets/icons/facebook.svg"}
                width={20}
                height={20}
                alt="facebook-icon"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/assets/icons/linkedin.svg"}
                width={20}
                height={20}
                alt="facebook-icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5">
        <p className="border-t-2 border-dashed border-secondary w-[70%] py-4 text-center">
          Copyright: © 2024 The DataSeed Company Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
