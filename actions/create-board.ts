"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth} from "@clerk/nextjs";
const CreateBoard = z.object({
  title: z.string()
});

export async function create(formData: FormData) {
  const { orgId } = auth();
  const { title } = CreateBoard.parse({ title: formData.get("title") });
  await db.board.create({
    data: {
      title
    }
  });
  revalidatePath(`/organization/${orgId}`);
}
