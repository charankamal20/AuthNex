import { ExtendedUser } from "@/auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";


interface UserInfoProps {
    user?: ExtendedUser;
    label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {

    return (
      <Card className="min-w-[600px] shadow-md">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">{label}</p>
        </CardHeader>
        <CardContent className="gap-y-2 flex flex-col">
          <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">ID</p>
            <p className="truncate text-xs max-w-44 p-2 font-mono bg-slate-100 rounded-md">
              {user?.id}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Name</p>
            <p className="truncate text-xs max-w-44 p-2 font-mono bg-slate-100 rounded-md">
              {user?.name}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Email</p>
            <p className="truncate text-xs max-w-44 p-2 font-mono bg-slate-100 rounded-md">
              {user?.email}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Role</p>
            <p className="truncate text-xs max-w-44 p-2 font-mono bg-slate-100 rounded-md">
              {user?.role}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Two Factor Authentication</p>
            <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
              {user?.isTwoFactorEnabled ? "Enabled" : "Disabled"}

            </Badge>
          </div>
        </CardContent>
      </Card>
    );
}
