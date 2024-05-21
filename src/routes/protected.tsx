import { Account } from "@/features/account";
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
];
