import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
const headingFont = localFont({ src: "../../public/fonts/font.woff2" });
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
const ManagementPage = () => {
  return (
    <div className="flex flex-col justify-centeritems-center">
      <div
        className={cn(
          "flex flex-col justify-center items-center",
          headingFont.className
        )}
      >
        <h2 className="font-bold my-3 bg-amber-300 text-center text-amber-700 px-4 py-2 w-50">
          NO 1 TASK MANAGEMENT
        </h2>
        <h1 className="text-2xl sm:text-4xl font-bold">
          Taskify helps team move
        </h1>
        <h3 className="text-white p-2 text-3xl my-5 rounded-sm font-bold bg-gradient-to-r from-fuchsia-400 to-pink-500">
          Work forward.
        </h3>
        <div className={cn("my-4 sm:w-2/6 text-center text-stone-500  text-sm",textFont.className)}>
          Collaborate ,manage projects and reach new productivity peaks from
          high rises to the home office,the way your team works is unique
          accomplish it all with taskify
        </div>
        <Button>Get Testify for free </Button>
      </div>
    </div>
  );
};

export default ManagementPage;
