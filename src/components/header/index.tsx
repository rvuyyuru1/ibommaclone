import Link from "next/link";
import React from "react";
import { Logo } from "../logo";
import { TiGroup } from "react-icons/ti";
import { RiMailFill } from "react-icons/ri";
import { FaBug } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="shadow-md bg-header h-16 w-full mx-auto">
      <div className="hidden md:flex items-center justify-between">
        <Logo className="text-3xl ml-6" />
        <div className="flex items-center justify-around px-4">
          {/* about */}
          <Link
            href={"/about"}
            className="text-white flex items-center justify-between mx-2"
          >
            <TiGroup className="text-primary mx-2 text-sm" /> About
          </Link>
          <Link
            href={"/bug"}
            className="text-white flex items-center justify-between mx-2"
          >
            <FaBug className="text-primary mx-2 text-sm" /> Bug Report
          </Link>
          <Link
            href={"/contact"}
            className="text-white flex items-center justify-between mx-2"
          >
            <RiMailFill className="text-primary mx-2 tex-sm" /> Contact
          </Link>
          {/* search */}
          {/* search */}
          <div className="mx-4 relative ">
            <input
              type="text"
              style={{
                background: "#333",
              }}
              className="p-1 px-2.5 text-white border-2 border-gray-400 caret-white outline-none shadow-sm w-56"
              placeholder="Search..."
            />
            <div className="absolute right-0 top-0 border-2 border-primary shadow-md bg-primary p-2 px-4">
              <FiSearch className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden items-center justify-between px-2">
        <div className="border-2 border-primary shadow-md bg-primary p-2 cursor-pointer">
          <AiOutlineMenu className="text-white" />
        </div>
        <Logo className="text-xl" />
        <div className="border-2 border-primary shadow-md bg-primary p-2 cursor-pointer">
          <FiSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
