import { createContext, useContext, useEffect, useState } from "react";
import { register, login, logout, getMe } from "../service/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const data = await getMe();
      setUser(data.user);
    } catch (error) {
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
      await register(formData);
    } catch (error) {
      throw error;
    }
  };

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      await loadUser(); 
    } catch (error) {
      throw error;
    }
  };


  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      throw error;
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};