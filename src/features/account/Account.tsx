import { logout } from "@/lib/authLogout";
import { navbarHeight } from "@/utils/sizes";

export const Account: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center bg-background"
      style={{ height: `calc(100dvh - ${navbarHeight}px)` }}
    >
      <button
        onClick={logout}
        className="w-full text-white bg-muted hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Logout
      </button>
    </div>
  );
};
