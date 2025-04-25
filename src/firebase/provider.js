import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async () => {
  try {

    const resp = await signInWithPopup(FirebaseAuth, googleProvider);

    const { displayName, email, photoURL, uid } = resp.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    }

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const firebaseLogout = async () => {
  return await FirebaseAuth.signOut();
}