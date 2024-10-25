import { navbarHeight } from "@/utils/sizes";

export const PublicHome = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <h1>Public</h1>
    </div>
  );
};
