import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/common/NavBar";

const Header = () => {
  return (
    <header className="absolute top-10 z-50 w-full px-8 md:px-14 lg:px-30">
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

        <NavBar />

        <Link
          href={"/"}
          className="bg-green-700 text-white hover:bg-white hover:text-green-700 px-6 py-2 rounded-xl font-semibold transition-colors hidden lg:block"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
