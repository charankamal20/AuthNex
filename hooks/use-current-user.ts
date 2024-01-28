import { useSession } from "next-auth/react";

export const useCurrentUser = () => {

    // Only purpose is to remove boilerplate code while getting the current user data from session
    const session = useSession();
    return session?.data?.user;
}