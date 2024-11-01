"use-client";

import { createCategory } from "../_actions/category";

export function CreateCategory() {
  return (
    <form action={createCategory} style={{ display: "flex", gap: "1rem" }}>
      <input name="name" type="text" placeholder="Category Name" />
      <button type="submit">Create Category</button>
    </form>
  );
}
