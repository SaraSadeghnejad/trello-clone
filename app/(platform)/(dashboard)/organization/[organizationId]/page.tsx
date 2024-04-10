
import { db } from "@/lib/db";
import React from "react";
import Board from "./board";
import Form from "./form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>
            <Board title={board.title} key={board.id} id={board.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
