import { CurrentUser } from "@/lib/auth";
import { UserInfo } from '../../../components/user-info';

async function ServerPage() {
  const user = await CurrentUser();

  return (
        <div>
            <UserInfo user={user} label={"Server Component"} />
        </div>
    );
}

export default ServerPage;
