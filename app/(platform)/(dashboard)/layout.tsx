import React, { ReactNode } from "react";
import Navbar from "./_components/navbar";


const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
