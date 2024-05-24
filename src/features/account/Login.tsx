import React, { useState } from "react";
import { signInUser } from "@/lib/authSigninPassword";
import { FirebaseError } from "firebase/app";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userCredential = await signInUser(email, password);
      console.log("User signed in:", userCredential.user);
      // Redirect or update UI as needed
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
        console.error("Error signing in:", err);
      } else {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-card rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  Your email
                </label>
                <input
                  onChange={handleEmailChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <input
                  onChange={handlePasswordChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-muted-foreground hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              {/* <button
                onClick={signInWithGoogle}
                className="w-full text-white bg-muted hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in with Google
              </button> */}
              <p className="text-sm font-light text-muted-foreground">
                No Account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-muted-foreground hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
            {error && <div className="text-red-500">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};
