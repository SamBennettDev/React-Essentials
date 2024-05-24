import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import { DesktopNav } from "./components/DesktopNav";
import { AppNav } from "./components/AppNav";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <AppProvider>
      <DesktopNav />
      <ContentContainer>
        <AppRoutes />
      </ContentContainer>
      <AppNav />
    </AppProvider>
  );
}

export default App;
