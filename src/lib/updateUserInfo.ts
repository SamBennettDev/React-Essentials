import { updateProfile, updateEmail, User } from "firebase/auth";

export const updateUserProfile = async (
  user: User,
  displayName: string,
  photoURL: string
) => {
  try {
    await updateProfile(user, { displayName, photoURL });
    console.log("User profile updated successfully");
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

export const updateUserEmail = async (user: User, newEmail: string) => {
  try {
    await updateEmail(user, newEmail);
    console.log("User email updated successfully");
  } catch (error) {
    console.error("Error updating email:", error);
  }
};
