import { Button } from "@/components/ui/button";
import React from "react";

const ManagementPage = () => {
  return (
    <div className="flex flex-col justify-centeritems-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold my-3 bg-amber-300 text-center text-amber-700 px-4 py-2 w-50">
          NO 1 TASK MANAGEMENT
        </h2>
        <h1 className="text-2xl sm:text-4xl font-bold">Taskify helps team move</h1>
        <h3 className="text-white p-2 text-3xl my-5 rounded-sm font-bold bg-gradient-to-r from-fuchsia-400 to-pink-500">
          Work forward.
        </h3>
        <div className="my-4 sm:w-2/6 text-center text-stone-500  text-sm">
          Collaborate ,manage projects and reach new productivity peaks from
          high rises to the home office,the way your team works is unique
          accomplish it all with taskify
        </div>
        <Button>Get Testify for free</Button>
      </div>
    </div>
  );
};

export default ManagementPage;
