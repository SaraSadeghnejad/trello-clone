"use client";
import { ListWidthCards } from "@/types";
import React, { useEffect, useState } from "react";
import ListItem from "./list-item";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import ListForm from "./list-form";
import { useAction } from "@/hooks/use-action";
import { update } from "lodash";
import { updateListOrder } from "@/actions/update-list-order";
import { toast } from "sonner";
import { updateCardOrder } from "@/actions/update-card-order";
interface ListContainerProps {
  data: ListWidthCards[];
  boardId: string;
}
function reorder<T>(list:T[], startIndex:number,endIndex:number){
const result=Array.from(list);
const [removed]= result.splice(startIndex,1);
result.splice(endIndex,0,removed);
return result;
}
const ListContainer = ({ boardId, data }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);
  const { execute: executeUpdateListOrder} = useAction(updateListOrder,{
    onSuccess: () => {
      toast.success("List reordered")
    },
    onError: (err: any) =>{
      toast.error(err)
    }
  });
    const { execute: executeUpdateCardOrder} = useAction(updateCardOrder,{
    onSuccess: () => {
      toast.success("Carrd reordered")
    },
    onError: (err: any) =>{
      toast.error(err)
    }
  })
  useEffect(() => {
    setOrderedData(data);
  }, [data]);
 const onDragEnd = (result:any)=>{
   const {destination,source,type} = result ;
   if(!destination){
     return;
   }
   if(destination.droppableId === source.droppableId&&destination.index === source.index){
    return;
   }
    if(type==="list"){
      const items = reorder(
        orderedData,
        source.index,
        destination.index,
      ).map((item,index) =>({...item, order: index}))
      setOrderedData(items);
      executeUpdateListOrder({items,boardId})
    }
    if(type ==="card"){
      let newOrderedData = [...orderedData];
      const sourceList = newOrderedData.find((list) => list.id === source.droppableId);
      const destList = newOrderedData.find((list) => list.id === destination.droppableId)
      if(!sourceList || !destList){
       return;
    }
    if(!sourceList.cards){
      sourceList.cards = [];
    }
      if(!destList.cards){
      destList.cards = [];
    }
    if(destination.droppableId === source.droppableId){
      const reoreredCards= reorder(sourceList.cards,source.index,destination.index)
     reoreredCards.forEach((card,idx)=>{
      card.order = idx;
     })
     sourceList.cards = reoreredCards;
     setOrderedData(newOrderedData)
     executeUpdateCardOrder({boardId:boardId, items:reoreredCards})
    }else{
      const [movedCard]= sourceList.cards.splice(source.index,1);

      movedCard.listId= destination.droppableId;
      destList.cards.splice(destination.index,0,movedCard);
      sourceList.cards.forEach((card,idx)=>{
      card.order = idx;
     });
      destList.cards.forEach((card,idx)=>{
      card.order = idx;
     });
     setOrderedData(newOrderedData);
      executeUpdateCardOrder({boardId:boardId, items:destList.cards})
    }
    }
 
   }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex list-none gap-x-3 h-full"
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />;
            })}
            {provided.placeholder}
            <ListForm />
            <div className="flex-shrink-0 w-1" />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ListContainer;
