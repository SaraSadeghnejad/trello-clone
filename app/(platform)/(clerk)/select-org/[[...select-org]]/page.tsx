import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const SelectOrgPage = () => {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl={"/organization/:organizationId"}
      afterSelectOrganizationUrl={"/organization/:organizationId"}
    />
  );
};

export default SelectOrgPage;
