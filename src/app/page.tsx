import { api, HydrateClient } from "~/trpc/server";
import { CreateCategory } from "./_components/category";
import { Suspense } from "react";

export default async function Home() {
  void api.category.getLatest.prefetch();

  return (
    <HydrateClient>
      <div />
    </HydrateClient>
  );
}
