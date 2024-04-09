import { OrganizationProfile } from "@clerk/nextjs";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile 
       appearance={{
        elements:{
            rootBox:{
                width:'100%',
                boxShadow:'none'
            },
            card:{
                border:'1px solid #e5e5e5',
                boxShadow:'none',
                width:'100%',
            }
        }
       }}
      />
    </div>
  );
};

export default SettingsPage;
