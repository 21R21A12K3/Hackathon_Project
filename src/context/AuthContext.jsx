import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
const API_BASE_URL = "http://localhost:5000";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Simulated login/signup/logout flow with localStorage persistence
  useEffect(() => {
    const storedUser = localStorage.getItem("hackathonUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

    const login = async ({ email, password }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid email or password");
      }

      else{
        setUser(data.user);
        localStorage.setItem("hackathonUser", JSON.stringify(data.user));
        return { success: true };
      }
    } catch (err) {
      console.error("login error", err);
      return { success: false, message: err.message };
    }
  };

  const signup = async ({ name, email, password }) => {
    try{
      const response = await fetch(`${API_BASE_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, password
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      setSubmittedData(data.user);
      setUser(data.user);
      console.log("Registration successful:", data.user);
    }
    catch(error){
      console.error("Error during registration:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hackathonUser");
  };

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
