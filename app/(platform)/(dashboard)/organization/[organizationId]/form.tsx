"use client";
import { create } from "@/actions/create-board";
import React from "react";
import { useFormState } from "react-dom";
import FormInput from "./form-input";
import CreateButton from "./create-button";

const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);
  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />
      <CreateButton />
    </form>
  );
};

export default Form;
