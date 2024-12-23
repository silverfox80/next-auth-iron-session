import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD as string,
  cookieName: "next-auth.session-token",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
