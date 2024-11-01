import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="h-full w-full bg-red-500">Welcome everybody</div>
    </HydrateClient>
  );
}
