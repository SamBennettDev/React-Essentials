import { navbarHeight } from "@/utils/sizes";

type ContentContainerProps = {
  children: React.ReactNode;
};

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-background gap-[32px]"
      style={{ height: `calc(100dvh - ${navbarHeight}px)` }}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
