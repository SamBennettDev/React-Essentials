import React, { useState } from "react";
import { FirebaseError } from "firebase/app";
import { sendResetEmail } from "@/lib/authForgotPassword";

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(null);
    setError(null);
    try {
      await sendResetEmail(email);
      setMessage("Password reset email sent successfully.");
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(err.message);
        console.error("Error sending reset email:", err);
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
              Reset your password
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

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Send Password Reset Email
              </button>
            </form>
            {message && <div className="text-green-500">{message}</div>}
            {error && <div className="text-red-500">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};
