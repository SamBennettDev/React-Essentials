import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();

export const sendResetEmail = async (email: string): Promise<void> => {
  await sendPasswordResetEmail(auth, email);
};
