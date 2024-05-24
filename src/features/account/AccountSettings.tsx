import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { updateUserEmail, updateUserProfile } from "@/lib/updateUserInfo";

export const AccountSettings: React.FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [email, setEmail] = useState(user?.email || "");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleDisplayNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisplayName(event.target.value);
  };

  const handlePhotoURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoURL(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user) return;

    try {
      setError(null);
      setSuccess(null);

      if (displayName !== user.displayName || photoURL !== user.photoURL) {
        await updateUserProfile(user, displayName, photoURL);
      }

      if (email !== user.email) {
        await updateUserEmail(user, email);
      }

      setSuccess("Profile updated successfully!");
    } catch (error) {
      setError("An error occurred while updating your profile.");
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-card rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
              Update your profile
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="displayName"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  Display Name
                </label>
                <input
                  onChange={handleDisplayNameChange}
                  type="text"
                  name="displayName"
                  id="displayName"
                  value={displayName}
                  className="bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="photoURL"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  Photo URL
                </label>
                <input
                  onChange={handlePhotoURLChange}
                  type="text"
                  name="photoURL"
                  id="photoURL"
                  value={photoURL}
                  className="bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  onChange={handleEmailChange}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="bg-input border border-muted-background text-foreground sm:text-sm rounded-lg focus:ring-foreground focus:border-foreground block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Update Profile
              </button>
            </form>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}
          </div>
        </div>
      </div>
    </>
  );
};
