// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithRedirect,
//   getRedirectResult,
// } from "firebase/auth";

// // Initialize the Google Auth provider
// const provider = new GoogleAuthProvider();
// provider.addScope("profile");
// provider.addScope("email");

// const auth = getAuth();

// export const signInWithGoogle = (): Promise<void> => {
//   return signInWithRedirect(auth, provider)
//     .then(() => {
//       return getRedirectResult(auth);
//     })
//     .then((result) => {
//       if (result) {
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         console.log("User signed in:", user);
//         console.log("Access token:", token);
//       }
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.customData.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.error(`Error [${errorCode}]: ${errorMessage}`);
//       throw error;
//     });
// };

// Example usage:
// signInWithGoogle()
//   .then(() => {
//     console.log("User signed in with Google");
//   })
//   .catch(error => {
//     console.error("Error signing in with Google:", error);
//   });
