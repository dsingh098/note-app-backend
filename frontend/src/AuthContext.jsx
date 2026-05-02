import { createContext, useContext, useEffect, useState } from "react";
import { register, login, logout, getMe } from "../service/auth.service.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      setLoading(true);

      const data = await getMe();

      setUser(data?.user || data);

    } catch (error) {
      console.error("Load user error:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleRegister = async (formData) => {
    try {
      setLoading(true);

      await register(formData);

    } catch (error) {
      console.error("Register error:", error);
      throw error; 
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (formData) => {
    try {
      setLoading(true);

      await login(formData);

      const data = await getMe();
      setUser(data?.user || data);

    } catch (error) {
      console.error("Login error:", error);
      throw error; 
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);

      await logout();

      setUser(null);

    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handleRegister,
        handleLogin,
        handleLogout,
        loadUser, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);