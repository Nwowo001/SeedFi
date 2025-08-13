"use client";
import { navItems } from "@/constants/navigation";
import { NavItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {}

export const NavBar = (props: Props) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return (
    <nav className="hidden lg:block px-4 py-4">
      <ul className="flex gap-14 relative">
        {navItems.map((item: NavItem, idx: number) => (
          <li
            key={idx}
            className="relative group flex gap-2 items-center"
            onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href={item.href || "#"} className="hover:text-yellow-400">
              {item.label}
            </Link>
            {item?.icon && (
              <Image src={item?.icon} width={20} height={20} alt="icon" />
            )}
            {item.dropdown && openDropdown === item.label && (
              <ul className="absolute left-0 top-4 mt-2 bg-white text-black shadow-lg p-5 rounded-b-2xl min-w-[400px]">
                {item.dropdown.map((subItem: NavItem, subIdx: number) => (
                  <li key={subIdx} className="">
                    <Link
                      href={subItem.href}
                      className="flex gap-5 items-start px-4 py-3"
                    >
                      <Image
                        src={subItem?.icon}
                        width={28}
                        height={28}
                        alt="nav-icon"
                      />
                      <div>
                        <h2 className="text-primary font-body font-extrabold">
                          {subItem?.label}
                        </h2>
                        <p className="text-gray-500 text-sm">{subItem?.desc}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
