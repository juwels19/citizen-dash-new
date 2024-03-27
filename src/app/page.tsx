import { getUser } from "@/actions/auth";
import SignOutButton from "@/components/common/SignOutButton";
import ThemeSwitchButton from "@/components/common/ThemeSwitchButton";
import CubeModal from "@/components/common/modals/CubeModal";
import Sidebar from "@/components/navigation/Sidebar";
import UserWelcome from "@/components/user/UserWelcome";

export default async function Home() {
  const user = await getUser();

  return (
    <div className="flex flex-col gap-4">
      <ThemeSwitchButton />
      The current user is {user?.name} (from server)
      <UserWelcome />
      <SignOutButton />
      <CubeModal />
    </div>
  );
}
