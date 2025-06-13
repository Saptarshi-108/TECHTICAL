import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const AuthContext = createContext();

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // Load auth from localStorage on initial mount
  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAuth(parsed);
      } catch (e) {
        console.error("Invalid auth JSON", e);
        localStorage.removeItem("auth");
      }
    }
  }, []);

  // Login: Save auth info
  const login = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuth(data);
  };

  // Logout: Clear auth info
  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  // Optional helper
  const isLoggedIn = !!auth?.token;

  return (
    <AuthContext.Provider value={{ auth, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);
