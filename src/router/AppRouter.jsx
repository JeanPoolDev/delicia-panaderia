import { Navigate, Route, Routes } from "react-router";
import { PanaderiaRouter } from "../panaderia/router/PanaderiaRouter";
import { AuthRouter } from "../auth/router/AuthRouter";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/auth/authSlice";

export function AppRouter() {

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    })
  }, [dispatch])

  return (
    <Routes>
      <Route path="/*" element={<PanaderiaRouter />} />
      <Route path="/auth/*" element={<AuthRouter />} />
    </Routes>
  );
};