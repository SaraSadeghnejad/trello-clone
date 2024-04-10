"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const CreateButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      submit
    </Button>
  );
};

export default CreateButton;
