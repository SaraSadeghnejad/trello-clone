import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import MobileSidebar from "./mobile-sidebar";
import FormPopover from "@/components/form/form-popover";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center ">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button
            className="hidden md:block rounded-sm"
            size="sm"
            variant="primary"
          >
            create
          </Button>
        </FormPopover>
        <FormPopover>
          <Button
            className="md:hidden block rounded-sm"
            size="sm"
            variant="primary"
          >
            <Plus width={4} height={4} />
          </Button>
        </FormPopover>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:organizationId"}
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl={"/organization/:organizationId"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }
            }
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                width: 30,
                height: 30
              }
            }
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
