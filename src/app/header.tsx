"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export function Header() {
  const session = useSession();
  return (
    <header>
      <div>
        {session?.data ? (
          <Button onClick={() => signOut()}>Sign out</Button>
        ) : (
          <Button onClick={() => signIn("google")}>Sign in</Button>
        )}
        {session?.data?.user?.name}
        <ModeToggle />
      </div>
    </header>
  );
}
