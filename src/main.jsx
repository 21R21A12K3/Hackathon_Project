import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="459440293732-7djn3kfkn6c19srjoe326qo9lmmk8akk.apps.googleusercontent.com">
    <AuthProvider>
      <UserProvider>
          <App />
      </UserProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
);
