"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};
const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Mininmum length of 3 letters is required"
  })
});

export async function create(prevState: State, formData: FormData) {
  const { orgId } = auth();
  const validateFields = CreateBoard.safeParse({
    title: formData.get("title")
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields."
    };
  }
  const { title } = validateFields.data;
  try {
    await db.board.create({
      data: {
        title
      }
    });
  } catch (error) {
    return { message: "Database Error" };
  }
  revalidatePath(`/organization/${orgId}`);
  redirect(`/organization/${orgId}`);
}
