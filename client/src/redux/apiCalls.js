import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user,navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    const data=await res.data;
    dispatch(loginSuccess(data));
    navigate('/');
  } catch (err) {
    dispatch(loginFailure());
  }
};
