"use client"

import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import FormError from "../formError";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {

    const role = useCurrentRole();
    if(role !== allowedRole)
        return <FormError message="You do not have the permission to view this content!" />;

    return (
        <>
            {children}
        </>
    )
}
