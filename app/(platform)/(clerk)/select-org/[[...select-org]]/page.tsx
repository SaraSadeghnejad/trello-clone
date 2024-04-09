import { OrganizationSwitcher } from "@clerk/nextjs";
import React from "react";

const SelectOrgPage = () => {
  return (
    <div>
      <OrganizationSwitcher
        hidePersonal
        afterCreateOrganizationUrl={"/organization/:organizationId"}
        afterLeaveOrganizationUrl="/select-org"
        afterSelectOrganizationUrl={"/organization/:organizationId"}
      />
    </div>
  );
};

export default SelectOrgPage;
