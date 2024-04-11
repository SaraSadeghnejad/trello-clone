"use client";
import React from "react";
import CreateButton from "./create-button";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/form/form-input";

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard,{
    onSuccess: () =>{
      console.log("Success!");
    },
    onError: (error) =>{
      console.error(error);
    }

  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <FormInput label="Board Title" errors={fieldErrors} id={"title"} />
      <CreateButton />
    </form>
  );
};

export default Form;
