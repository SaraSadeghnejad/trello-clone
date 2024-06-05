import { ModalProvider } from "@/components/providers/modal-provider";
import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";
const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      <ModalProvider/>
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
