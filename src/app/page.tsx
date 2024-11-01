import { api, HydrateClient } from "~/trpc/server";
import { CreateCategory } from "./_components/category";

export default async function Home() {
  const category = await api.category.getLatest();

  //   void api.product.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-4xl font-bold">{category?.name}</h1>
          <CreateCategory />
        </div>
      </main>
    </HydrateClient>
  );
}
