"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Page() {
  
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h2>Welcome, you are not signed in.</h2>
        <button onClick={() => signIn()}>Sign in</button>        
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, you are signed in.</h2>
      <br/>
      <ul>
        <li>
          <Link href="/protected/client-side">Client-Side Page</Link>
        </li>
        <li>
          <Link href="/protected/server-side">Server-Side Page</Link>
        </li>
      </ul>
      <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}