import { createContext, useContext, useEffect, useState } from "react";
import { fetchUser } from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();
      setUser(userData);
      setLoading(false);
    };
    getUser();
  }, []);

  const logout = async () => {
    try {
      await fetch("https://gitgoogleloginbackend-production.up.railway.app/auth/app/logout", { credentials: "include" });
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);