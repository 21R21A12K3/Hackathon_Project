import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Simulated login/signup/logout flow with localStorage persistence
  useEffect(() => {
    const storedUser = localStorage.getItem("hackathonUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = ({ email, password }) => {
    const fakeUser = { id: 1, email, name: "John Doe", isAdmin: email === "admin@hackathon.com" };
    setUser(fakeUser);
    localStorage.setItem("hackathonUser", JSON.stringify(fakeUser));
    return true;
  };

  const signup = ({ name, email, password }) => {
    // Replace with real API call
    const newUser = { id: 2, email, name, isAdmin: false };
    setUser(newUser);
    localStorage.setItem("hackathonUser", JSON.stringify(newUser));
    return true;
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
