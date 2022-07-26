import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogError, onLoggedUser } from "../store";
import { authApi } from "../api";
export const useAuth = () => {
  const { status, user, errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await authApi.post("/login", { email, password });
      localStorage.setItem("x-token", data.token);
      dispatch(onLoggedUser(data.user));
    } catch (err) {
      dispatch(onLogError(err.response.data.msg));
      console.log({ err });
    }
  };

  const startLogout = () => {
    dispatch(onLogError());
    localStorage.clear();
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("x-token");
    if (!token) return dispatch(onLogError());
    try {
      const { data } = await authApi.get("/renew");
      localStorage.setItem("x-token", data.token);
      dispatch(onLoggedUser(data.user));
    } catch (err) {
      dispatch(onLogError());
      localStorage.clear();
      console.log({ err });
    }
  };

  return {
    errorMessage,
    status,
    user,
    startLogin,
    checkAuthToken,
    startLogout,
  };
};
