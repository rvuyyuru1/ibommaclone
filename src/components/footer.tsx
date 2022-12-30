import Link from "next/link";
import * as React from "react";

const Footer = () => {
  const [year, setYear] = React.useState(new Date().getFullYear());
  return (
    <div className="shadow-md bg-header h-16 items-center flex justify-between p-4 w-full mx-auto">
      <div className="flex items-center justify-around">
        {/* about */}
        <Link
          href={"/contact"}
          className="text-gray-400 flex items-center justify-between mx-2"
        >
          Contact
        </Link>
        <Link
          href={"/dmca"}
          className="text-gray-400 text-xs flex items-center justify-between mx-2"
        >
          DMCA
        </Link>
        <Link
          href={"/terms"}
          className="text-gray-400 text-xs flex items-center justify-between mx-2"
        >
          T&C
        </Link>
      </div>
      <p className="text-gray-400 text-xs">@{year} IMOVIES</p>
    </div>
  );
};

export default Footer;
