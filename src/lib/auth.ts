import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.IRON_SESSION_PASSWORD,  //used to encrypt JWTs (JSON Web Tokens)
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Attach the user ID to the session
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
          name: token.name as string,
        };
      }
      return session;
    },
  },
};
