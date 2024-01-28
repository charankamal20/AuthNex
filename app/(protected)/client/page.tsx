"use client";

import { UserInfo } from "../../../components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

function ServerPage() {
  const user = useCurrentUser();

  return (
    <div>
      <UserInfo user={user} label={"Client Page"} />
    </div>
  );
}

export default ServerPage;
