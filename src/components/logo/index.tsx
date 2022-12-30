import Image from "next/image";
import Link from "next/link";

import React from "react";

export const Logo = ({ className }: any) => {
  return (
    <Link className={"font-bold text-primary" + className} href={"/"}>
      <Image
        src={
          "https://akamai-aws-s3-ibin-bucket.lokicdn.com/images/logo-ibomma.svg"
        }
        alt="logo"
        height={50}
        width={150}
      />
    </Link>
  );
};
