import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "../pages/LoginPage";
import { useSelector } from "react-redux";

export function AuthRouter() {

  const { status } = useSelector(state => state.auth);

  if (status === 'authenticated') {
    return <Navigate to={'/'} />
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};


