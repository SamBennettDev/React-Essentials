import { H1 } from "@/components/Typography";
import { useAuth } from "@/hooks/useAuth";
import { logout } from "@/lib/authLogout";
import { Link } from "react-router-dom";

export const Account: React.FC = () => {
  const user = useAuth().currentUser;

  return (
    <>
      {user?.photoURL ? (
        <img
          className="object-cover w-[100px] h-[100px] rounded-full drop-shadow-2xl"
          src={user.photoURL}
          alt="User profile"
        />
      ) : (
        <svg
          className="object-cover w-[100px] h-[100px] rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      )}
      <H1>Hey {user?.displayName?.split(" ")[0]}</H1>

      <div className="flex flex-col gap-[10px] w-[211px]">
        <Link
          to="/account-settings"
          className="w-full text-foreground bg-accent hover:bg-primary focus:ring-4  focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Settings
        </Link>
        <button
          onClick={logout}
          className="w-full text-foreground bg-accent hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Logout
        </button>
      </div>
    </>
  );
};
