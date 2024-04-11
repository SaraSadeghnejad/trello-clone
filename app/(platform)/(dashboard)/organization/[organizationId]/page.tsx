import { db } from "@/lib/db";
import React from "react";
import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import BoardList from "./_components/board-list";

const OrganizationIdPage = async () => {
 
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-3" />
      <div className="px-2 md:mx-4">
        <BoardList/>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
