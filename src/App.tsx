import { Toaster } from "@/components/ui/sonner";
import ApiQueryProvider from "./api/api-query-provider";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <ApiQueryProvider>
        <AppRoutes />
      </ApiQueryProvider>
    </>
  );
}

export default App;
