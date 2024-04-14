"use client";
import React, { ElementRef, useRef, useState } from "react";
import ListWrapper from "./list-wrapper";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { FormInput } from "@/components/form/form-input";
import { useParams, useRouter } from "next/navigation";
import FormSubmit from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";

import { toast } from "sonner";
import { createList } from "@/actions/create-list";

const ListForm = () => {
  const router = useRouter();
  const params = useParams();

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const [isEditing, setIsEditing] = useState(false);
  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };
  const disableEditing = () => {
    setIsEditing(false);
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      disableEditing();
    }
  };
  const { execute, fieldErrors } = useAction(createList, {
    onSuccess: (data) => {
      toast.success(`List ${data?.title} successfully created`);
      disableEditing();
      router.refresh();
    },
    onError: (error) => {
      toast.error(error);
    }
  });
  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disableEditing);
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const boardId = formData.get("boardId") as string;
    execute({ title, boardId });
  };
  if (isEditing) {
    return (
      <ListWrapper>
        <form
          ref={formRef}
          action={onSubmit}
          className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"
        >
          <FormInput
            ref={inputRef}
            id="title"
            errors={fieldErrors}
            placeholder="Enter list title"
            className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition"
          />
          <input hidden value={params.boardId} name="boardId" />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add List</FormSubmit>
            <Button onClick={disableEditing} variant="ghost" size="sm">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      <form className="w-full p-0.75 rounded-md bg-white space-y-4 shadow-md">
        <Button
          onClick={enableEditing}
          className="w-full text-black justify-start ronded-md bg-white/50 hover:bg-white/50 transition p-3 items-center font-medium text-sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add a list
        </Button>
      </form>
    </ListWrapper>
  );
};

export default ListForm;
