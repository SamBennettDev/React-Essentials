import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import { DesktopNav } from "./components/DesktopNav";
import { AppNav } from "./components/AppNav";

function App() {
  return (
    <AppProvider>
      <DesktopNav />
      <AppRoutes />
      <AppNav />
    </AppProvider>
  );
}

export default App;
