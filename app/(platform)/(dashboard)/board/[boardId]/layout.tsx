import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";
import React, { ReactNode } from "react";
import BoardNavbar from "./_components/board-navbar";
export async function generateMetadata({
  params
}: {
  params: { boardId: string };
}){
    const {orgId} = auth();
    if(!orgId){
        return{
          title:"Board"
        }
    }
      const board = await db.board.findUnique({
        where: {
          id: params.boardId,
          orgId
        }
      });
      return{
        title:board?.title || "Board"
      }
};
const BoardIdLayout = async ({
  children,
  params
}: {
  children: ReactNode;
  params: { boardId: string };
}) => {
  const { orgId } = auth();
  if (!orgId) {
    redirect("/select-org");
  }
  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
      orgId
    }
  });
  if (!board) {
    notFound();
  }
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    ><BoardNavbar id={params.boardId}/>
    <div className="absolute inset-0 bg-black/10"/>
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
