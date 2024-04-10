"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";


export async function deleteBoard(id :string) {
  const { orgId } = auth();

  await db?.board?.delete({where:{id}});
  revalidatePath(`/organization/${orgId}`);
}
