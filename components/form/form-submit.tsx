import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
interface FormSubmitProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary";
}
const FormSubmit = ({
  children,
  disabled,
  variant,
  className
}: FormSubmitProps) => {
  const { pending } = useFormStatus();
  return (
      <Button
        disabled={pending || disabled}
        variant={variant}
        type="submit"
        size="sm"
        className={cn(className)}
      >
        {children}
      </Button>
  );
};

export default FormSubmit;
