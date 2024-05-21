import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error occurred during logout:", error);
  }
};
