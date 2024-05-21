import { ForgotPassword, Login, Signup } from "@/features/account";
import { PublicHome } from "@/features/home";

export const publicRoutes = [
  {
    path: "/",
    element: <PublicHome />,
  },
  {
    path: "/Account",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
];
