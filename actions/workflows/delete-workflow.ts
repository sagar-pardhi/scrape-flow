"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function deleteWorkflow(id: string) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("unauthenticated");
  }

  await prisma.workflow.delete({
    where: {
      id: id,
      userId,
    },
  });

  revalidatePath("/workflows");
}
