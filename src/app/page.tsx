import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "./_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId != null) redirect("/categories");

  return (
    <div className="container mx-auto my-4 text-center">
      <h1 className="mb-4 text-3xl">Fancy Home Page</h1>
      <div className="flex justify-center gap-2">
        <Button asChild>
          <SignInButton />
        </Button>
        <Button asChild>
          <SignUpButton />
        </Button>
        <UserButton />
      </div>
    </div>
  );
}
