"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn("google")}>Sign in</button>
    </div>
  );
}
