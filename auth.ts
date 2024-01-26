import NextAuth, { type DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";



type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    /** The user's role */
    user: ExtendedUser;
  }
}
/**
 * Authentication module for Next.js application.
 *
 * @remarks
 * This module exports the necessary functions and objects for authentication in a Next.js application.
 * It includes handlers for GET and POST requests, authentication functions, and session callbacks.
 *
 * @returns An object containing the exported functions and objects for authentication.
 */
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {

    // async signIn({user}) {
    //   if(!user.id) {
    //     return false;
    //   }
    //   const existingUser = await getUserById(user.id);
    //   if (!existingUser || !existingUser.emailVerified) {
    //     return false;
    //   }
    //   return true;
    // },

    /**
     * Callback function for session management.
     *
     * @param session - The current session object.
     * @param token - The JWT token.
     * @returns The updated session object.
     */
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if(token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },

    /**
     * Callback function for JWT token management.
     *
     * @param token - The JWT token.
     * @returns The updated token.
     */
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      token.role = existingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
