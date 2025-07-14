import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

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

  const login = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuth(data);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  const isLoggedIn = !!auth?.token;

  return (
    <AuthContext.Provider value={{ auth, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
