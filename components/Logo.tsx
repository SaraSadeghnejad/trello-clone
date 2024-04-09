import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import localFont from 'next/font/local'
// const headingFont = localFont({
//     src:'../public/fonts/font.woff2'
// })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"]
});
const Logo = () => {
  return (
    <Link href="/">
      <div
        className={cn(
          "hover:opacity-75 transition item-center gap-x-2 hidden md:flex",
          poppins.className
        )}
      >
        <Image src="/logo.svg" alt="logo" height={30} width={30} />{" "}
        <div className="mt-2">Taskify</div>
      </div>
    </Link>
  );
};

export default Logo;
