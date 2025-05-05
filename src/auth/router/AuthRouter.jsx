
import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "../pages/LoginPage";
import { useSelector } from "react-redux";
import { Loading } from "../../panaderia/components/Loading";

export function AuthRouter() {

  const { status } = useSelector(state => state.auth);

  if (status === 'authenticated') {
    return <Navigate to={'/'} />
  }

  if (status === 'checking') {
    return <Loading />
  }


  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};


