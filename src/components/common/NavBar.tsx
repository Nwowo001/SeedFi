"use client";
import { navItems } from "@/constants/navigation";
import { NavItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {}

export const NavBar = (props: Props) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  return (
    <>
      {/* Desktop Navigation */}
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
                <ul className="absolute left-0 top-4 mt-2 bg-white text-black shadow-lg p-5 rounded-b-2xl min-w-[400px] z-50">
                  {item.dropdown.map((subItem: NavItem, subIdx: number) => (
                    <li key={subIdx} className="">
                      <Link
                        href={subItem.href}
                        className="flex gap-5 items-start px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
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
                          <p className="text-gray-500 text-sm">
                            {subItem?.desc}
                          </p>
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

      {/* Mobile Menu Button  */}
      <button
        className="block lg:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          // Close icon (X) when menu is open
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Your existing menu icon when closed
          <Image
            src={`/assets/icons/menu.svg`}
            width={27}
            height={27}
            alt="menu-icon"
          />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-gray-100">
            <Link href={`/`} className="flex" onClick={toggleMobileMenu}>
              <Image
                src={`/assets/icons/seedfi.svg`}
                width={37}
                height={27}
                alt="seedfi-icon"
              />
              <Image
                src={`/assets/images/logo.svg`}
                width={100}
                height={37}
                alt="seedfi-logo"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="px-6 py-6">
            <ul className="space-y-2">
              {navItems.map((item: NavItem, idx: number) => (
                <li
                  key={idx}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {item.dropdown ? (
                    // Dropdown items
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between py-4 text-left text-gray-700 hover:text-green-600 transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          {item.label}
                          {item?.icon && (
                            <Image
                              src={item?.icon}
                              width={18}
                              height={18}
                              alt="icon"
                            />
                          )}
                        </span>
                        {/* <svg
                          className={`w-5 h-5 transition-transform ${
                            mobileDropdownOpen === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg> */}
                      </button>

                      {/* Dropdown content */}
                      {mobileDropdownOpen === item.label && (
                        <ul className="pb-4 space-y-1">
                          {item.dropdown.map(
                            (subItem: NavItem, subIdx: number) => (
                              <li key={subIdx}>
                                <Link
                                  href={subItem.href}
                                  onClick={toggleMobileMenu}
                                  className="flex gap-4 items-start p-4 ml-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                  <Image
                                    src={subItem?.icon}
                                    width={24}
                                    height={24}
                                    alt="nav-icon"
                                  />
                                  <div>
                                    <h3 className="text-green-600 font-semibold text-sm">
                                      {subItem?.label}
                                    </h3>
                                    <p className="text-gray-600 text-xs mt-1">
                                      {subItem?.desc}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  ) : (
                    // Regular menu items
                    <Link
                      href={item.href || "#"}
                      onClick={toggleMobileMenu}
                      className="flex items-center gap-3 py-4 text-gray-700 hover:text-green-600 transition-colors"
                    >
                      {item.label}
                      {item?.icon && (
                        <Image
                          src={item?.icon}
                          width={18}
                          height={18}
                          alt="icon"
                        />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Sign In button at bottom */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
