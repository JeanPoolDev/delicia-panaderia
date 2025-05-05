import { useDispatch } from "react-redux";
import { startGoogleSingIn } from "../../store/auth/thunk";
import { LayoutForm } from "../layout/LayoutForm";

export function FormLogin() {

  const dispatch = useDispatch();

  const loginGoogle = (e) => {
    e.preventDefault()
    dispatch(startGoogleSingIn())
  }

  return (
    <LayoutForm title='Ingresar a Panaderia Delicia'>

      <h2 className="text-2xl font-semibold mb-50">
        🥖Delicia Pan
      </h2>

      <h1 className="text-8xl  px-[2em] mb-20">
        Inicia Sesión
      </h1>

      <button
        onClick={loginGoogle}
        className="bg-[#9e7d5d] text-white font-semibold px-40 py-4 rounded-full mb-20 cursor-pointer">
        Google
      </button>

      <p className="px-[14em] text-lg">
        Inicia sesión para <span className="text-[#9e7d5d] font-semibold">comprar</span > y probar los <span className="text-[#9e7d5d] font-semibold">mejores panes</span>
      </p>

    </LayoutForm>
  );
};