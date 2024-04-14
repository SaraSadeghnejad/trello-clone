"use client";
import { ListWidthCards } from "@/types";
import React, { useEffect, useState } from "react";
import ListItem from "./list-item";

interface ListContainerProps {
  data: ListWidthCards[];
  boardId: string;
}

const ListContainer = ({ boardId, data }: ListContainerProps) => {
    const [orderedData,setOrderedData] = useState(data);
    useEffect(()=>{
        setOrderedData(data)
    },[data]);

  return (
    <ol className="flex list-none gap-x-3 h-full">
      {orderedData.map((list, index) => {
        return <ListItem key={list.id} index={index} data={list} />;
      })}
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};

export default ListContainer;
