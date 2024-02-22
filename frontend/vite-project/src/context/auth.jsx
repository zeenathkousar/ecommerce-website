import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      //setting global state
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);
  return <AuthProvider value={[auth, setAuth]}>{children}</AuthProvider>;
};

//custom hook
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
