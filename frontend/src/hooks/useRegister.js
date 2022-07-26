import { useDispatch, useSelector } from "react-redux";
import { onLogError } from "../store";
import { userApi } from "../api";
import { useAuth } from "./useAuth";
export const useRegister = () => {
  const { startLogin } = useAuth();
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.user);

  const startRegister = async (userData) => {
    try {
      await userApi.post("", userData);
      startLogin(userData);
    } catch (err) {
      console.log({err});
      dispatch(onLogError(err.response.data.errors[0].msg));
    }
  };

  return {
    startRegister,
    errorMessage,
  };
};
