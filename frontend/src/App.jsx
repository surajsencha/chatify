import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import GradientBackground from "../src/components/gradientBackground.tsx";
import { useAuthStore } from "./store/useAuthStore.js";
function App() {
  const { authUser, login, isLoggedIn } = useAuthStore();
  console.log("authUser:", authUser);
  console.log("isLoggedIn:", isLoggedIn);

  return (
    <div className="min-h-screen relative">
      <GradientBackground backdropBlurAmount="sm" />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
