import { Navigate, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import GradientBackground from "../src/components/gradientBackground.tsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import PageLoader from "../src/components/PageLoader.jsx";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log("authUser:", authUser);
  if (isCheckingAuth) return <PageLoader />;
  return (
    <div className="min-h-screen relative">
      <GradientBackground backdropBlurAmount="sm" />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Routes>
          <Route
            path="/"
            element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
