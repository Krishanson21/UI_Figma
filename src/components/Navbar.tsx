import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="w-full flex items-center justify-between h-[96px] px-[20px] md:px-[80px]">

        {/* LEFT */}
        <div className="flex items-center gap-[48px]">

          {/* Logo */}
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={103}
            height={35}
            priority
          />

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-[48px] font-medium text-[16px] leading-[24px] tracking-[0.5px] text-[#0F172A]">

            <li className="flex items-center h-[48px] px-[8px] py-[12px] cursor-pointer">
              Products
            </li>

            <li className="flex items-center h-[48px] px-[8px] py-[12px] cursor-pointer">
              Solutions
            </li>

            <li className="flex items-center h-[48px] px-[8px] py-[12px] cursor-pointer">
              Pricing
            </li>

            <li className="flex items-center h-[48px] px-[8px] py-[12px] gap-[4px] cursor-pointer">
              Resources
              <Image
                src="/icons/chevron-down.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </li>

          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center">

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-[16px]">

            {/* Login */}
            <button className="h-[48px] px-[8px] py-[12px] flex items-center font-medium text-[16px] leading-[24px] tracking-[0.5px] text-[#0F172A]">
              Log In
            </button>

            {/* Sign Up */}
            <button className="w-[153px] h-[48px] flex items-center justify-center px-[16px] py-[12px] border-[2px] border-[#0F172A] rounded-[8px] font-medium text-[16px] leading-[24px] tracking-[0.5px] text-[#0F172A]">
              Sign Up Now
            </button>

          </div>

          {/* Mobile Icon */}
          <div className="lg:hidden">
            <Menu size={28} className="text-[#0F172A]" />
          </div>

        </div>

      </div>
    </nav>
  );
}