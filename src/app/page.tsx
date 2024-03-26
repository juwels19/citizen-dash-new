import { getUser } from "@/actions/auth";
import ThemeSwitchButton from "@/components/common/ThemeSwitchButton";
import Sidebar from "@/components/navigation/Sidebar";
import UserWelcome from "@/components/user/UserWelcome";

export default async function Home() {
  const user = await getUser();
  return (
    <div>
      <ThemeSwitchButton />
      The current user is {user?.name} (from server)
      <UserWelcome />
    </div>
  );
}
