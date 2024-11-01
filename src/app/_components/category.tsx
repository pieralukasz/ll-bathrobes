"use client";

import { useTransition } from "react";
import { createCategory } from "../_actions/category";
import { api } from "~/trpc/react";

export function CreateCategory() {
  const [latestCategory, { refetch }] =
    api.category.getLatest.useSuspenseQuery();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await createCategory(formData);
      await refetch();
    });
  };

  return (
    <form action={handleSubmit}>
      <h1>{latestCategory?.name}</h1>
      <input
        name="name"
        type="text"
        placeholder="Category Name"
        className="text-black"
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Category"}
      </button>
    </form>
  );
}
