import { createContext, useContext, useEffect, useState } from "react";
import { register, login, logout, getMe } from "./service/auth.service.js"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const data = await getMe();
      setUser(data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  // Register
  const handleRegister = async (formData) => {
    try {
      await register(formData);
    } catch (error) {
      console.error(error);
    }
  };

  // Login
  const handleLogin = async (formData) => {
    try {
      await login(formData);
      await loadUser(); // refresh user after login
    } catch (error) {
      console.error(error);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error(error);
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

// custom hook (clean access)
export const useAuth = () => useContext(AuthContext);