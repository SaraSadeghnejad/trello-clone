"use client";
import { ListWidthCards } from "@/types";
import React from "react";

interface ListContainerProps {
  data: ListWidthCards[];
  boardId: string;
}

const ListContainer = ({ boardId, data }: ListContainerProps) => {
  return (
    <ol>
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};

export default ListContainer;
