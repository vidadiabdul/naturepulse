import { createContext, useEffect, useState } from "react";
import { checkAuth, getUserData, logoutUser, loginUser } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserData = async () => {
      if (checkAuth()) {
        const userData = await getUserData();
        if (userData && userData.status === "success") {
          setUser(userData.data);
        } else {
          console.error('Failed to fetch user data:', userData?.message);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const login = async (data) => {
    const result = await loginUser(data);
    if (result.status === "success") {
      setUser(result.data);
      navigate("/")
    } else {
      throw new Error(result.message);
    }
  };

  const logout = () => {
    logoutUser();
    navigate("/");
    setUser(null);
  };
 
  return (
    <UserContext.Provider value={{ user, setUser, logout, login, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
