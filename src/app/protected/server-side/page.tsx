"use server"

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Welcome, {session?.user.name}</h1>
      <p>Email: {session?.user.email}</p>
      <p>{(typeof window !== 'undefined') ? "we are client-side" : "we are server-side"}</p>
    </div>
  )
}