import { H1 } from "@/components/Typography";
import { useAuth } from "@/hooks/useAuth";
import { logout } from "@/lib/authLogout";
import { navbarHeight } from "@/utils/sizes";

export const Account: React.FC = () => {
  const user = useAuth();

  return (
    <div
      className="flex flex-col justify-center items-center bg-background"
      style={{ height: `calc(100dvh - ${navbarHeight}px)` }}
    >
      <H1>Welcome {user.currentUser?.displayName}</H1>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-card rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <button
              onClick={logout}
              className="w-full text-white bg-muted hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
