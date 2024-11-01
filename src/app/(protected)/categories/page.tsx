import { CreateCategory } from "~/app/_components/create-category";
import { api, HydrateClient } from "~/trpc/server";

export default function Categories() {
  void api.category.getLatest.prefetch();

  //   return <div />;

  return (
    <HydrateClient>
      <div className="h-full w-full bg-red-500">
        <CreateCategory />
      </div>
    </HydrateClient>
  );
}
