import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./NavBar";

const Header = () => {
  return (
    <header className="absolute top-10 w-full px-6 md:px-14  lg:px-30">
      <div className="w-full py-2 flex justify-between items-center lg:bg-white px-6 lg:rounded-3xl lg:shadow-lg shadow-inherit">
        <Link href={`/`} className="flex">
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
        {/* Navbar */}
        <NavBar />
        <Link href={"/"} className="cta-primary hidden lg:block">
          Sign In
        </Link>
        <button className="block lg:hidden">
          <Image
            src={`/assets/icons/menu.svg`}
            width={27}
            height={27}
            alt="seedfi-icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
