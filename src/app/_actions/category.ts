"use server";

import { revalidatePath } from "next/cache";
import { api } from "~/trpc/server";

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;

  await api.category.create({
    name,
  });

  revalidatePath("/");
}
