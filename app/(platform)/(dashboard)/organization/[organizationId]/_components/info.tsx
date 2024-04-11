import { useOrganization } from "@clerk/nextjs";
import React from "react";

const Info = () => {
  const { organization, isLoaded } = useOrganization();
  if (!isLoaded) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="flex justify-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        
      </div>
    </div>
  );
};

export default Info;
