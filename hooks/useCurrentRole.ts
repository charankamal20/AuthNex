import { useSession } from "next-auth/react";

export function useCurrentRole() {
  const session = useSession();

  if (!session) {
    return null;
  }

  return session.data?.user?.role;
}