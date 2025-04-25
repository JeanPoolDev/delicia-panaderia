import { firebaseLogout, singInWithGoogle } from "../../firebase/provider";
import { chekingCredentials, login, logout } from "./authSlice";


export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    const { uid, email, displayName, photoURL, ok, errorMessage } = await singInWithGoogle();

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, email, displayName, photoURL }))
  }
}

export const startLogout = () => {
  return async (dispatch) => {

    await firebaseLogout();

    dispatch(logout());

  }
}