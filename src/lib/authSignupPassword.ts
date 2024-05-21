import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
  AuthError,
} from "firebase/auth";

const auth = getAuth();

export const createUser = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      return userCredential;
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
// createUser("user@example.com", "user_password")
//   .then(userCredential => {
//     console.log("User signed up:", userCredential.user);
//   })
//   .catch(error => {
//     console.error("Error signing up:", error);
//   });
