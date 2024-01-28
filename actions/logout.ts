"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // add any logic for backend here before logout
  await signOut();
};
