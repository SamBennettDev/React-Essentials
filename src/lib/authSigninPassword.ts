import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
  AuthError,
} from "firebase/auth";

const auth = getAuth();

export const signInUser = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      return userCredential; // Return the userCredential
    })
    .catch((error: AuthError) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle the error appropriately here
      console.error(`Error [${errorCode}]: ${errorMessage}`);
      throw error; // Rethrow the error after logging it
    });
};

// Example usage:
// signInUser("user@example.com", "user_password")
//   .then(userCredential => {
//     console.log("User signed in:", userCredential.user);
//   })
//   .catch(error => {
//     console.error("Error signing in:", error);
//   });
