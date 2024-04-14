"use client";
import { ListWidthCards } from "@/types";
import React, { ElementRef, useRef, useState } from "react";
import ListHeader from "./list-header";
import { CardForm } from "./card-form";

interface ListItemProps {
  data: ListWidthCards;
  index: number;
}
const ListItem = ({ data, index }: ListItemProps) => {
     const formRef = useRef<ElementRef<"form">>(null);
     const textareaRef = useRef<ElementRef<"textarea">>(null);
     const [isEditing, setIsEditing] = useState(false);
     const enableEditing = () => {
       setIsEditing(true);
       setTimeout(() => {
         textareaRef.current?.focus();
       });
     };
     const disableEditing = () => {
       setIsEditing(false);
     };
  return (
    <li className="shrink-0 list-none h-full w-[272px] ">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader onAddCard={enableEditing} data={data} />
        <CardForm listId={data.id} ref={textareaRef} isEditing={isEditing} enableEditing={enableEditing} disableEditing={disableEditing} />
      </div>
    </li>
  );
};

export default ListItem;
