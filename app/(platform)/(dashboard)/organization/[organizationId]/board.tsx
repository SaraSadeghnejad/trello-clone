import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import React from "react";
import DeleteButton from "./delete-button";
interface BoardProps {
  title: string;
  id: string;
}
export const Board = ({ title, id }: BoardProps) => {
  return (
    <form
      action={deleteBoard.bind(null, id)}
      className="flex items-center gap-x-2"
    >
      <p>Board Title :{title}</p>
      <DeleteButton />
    </form>
  );
};

export default Board;
