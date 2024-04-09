import React, { ReactNode } from "react";
import Navbar from "../_components/navbar";
import Sidebar from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-20 md:pt-24 px-4 flex   mx-auto">
      <div className="flex gap-x-7 ">
        <div className="w-60 ml-auto shrink-0 hidden md:block px-4">
          <Sidebar />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default OrganizationLayout;
