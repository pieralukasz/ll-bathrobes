import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "./_components/ui/button";

export default async function HomePage() {
  const { userId, redirectToSignIn } = await auth();

  if (userId === null) redirectToSignIn();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <Button asChild>
        <SignInButton />
      </Button>
      <Button asChild>
        <SignUpButton />
      </Button>
      <UserButton />
    </div>
  );
}
