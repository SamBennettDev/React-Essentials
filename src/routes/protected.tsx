import { Account, AccountSettings } from "@/features/account";
import {} from "@/features/account/AccountSettings";
import { ProtectedHome } from "@/features/home";

export const protectedRoutes = [
  {
    path: "/",
    element: <ProtectedHome />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
  {
    path: "/Signup",
    element: <ProtectedHome />,
  },
  {
    path: "/account-settings",
    element: <AccountSettings />,
  },
];
