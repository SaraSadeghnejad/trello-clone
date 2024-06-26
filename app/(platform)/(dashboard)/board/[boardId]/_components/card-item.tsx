"use client";
import { Draggable } from "@hello-pangea/dnd";
import { Card } from "@prisma/client";
import React from "react";
interface CardItemProps {
  data: Card;
  index: number;
}
const CardItem = ({ data, index }: CardItemProps) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        ref={provided.innerRef}
          role="button"
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white roundedmd shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
