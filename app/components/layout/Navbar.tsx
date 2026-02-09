"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import { Menu } from "lucide-react";

const navbarItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Find a Doctor", href: "/finddoctor" },
  { name: "About Us", href: "/aboutus" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <nav>
      <div className="container my-8   flex items-center justify-between border-b border-[#E4E4E4] md:border-0 pb-7 md:pb-0 ">
        <Link href={"/"}>
          <div className="logo flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={26} height={26} />
            <div className="title">
              <h1 className="text-2xl font-semibold text-primary">Medease</h1>
            </div>
          </div>
        </Link>

        {/* menu items */}
        <div className="menu-items items-center gap-12 hidden md:flex">
          {navbarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={` hover:text-primary regular20 ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hambugerMenu md:hidden flex">
          <span>
            <Menu className="text-primary cursor-pointer" />
          </span>
        </div>

        <div className="md:flex hidden">
          <Button btntext="Register" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
