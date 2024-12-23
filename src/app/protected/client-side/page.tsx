"use client"

import { useSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {session?.user.name}</h1>
      <p>Email: {session?.user.email}</p>
      <p>{(typeof window !== 'undefined') ? "we are client-side" : "we are server-side"}</p>
    </div>
  );
}