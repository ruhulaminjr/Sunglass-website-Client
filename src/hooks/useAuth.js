import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext/AuthContext";

const useAuth = () => {
  return useContext(AuthProvider);
};
export default useAuth;
