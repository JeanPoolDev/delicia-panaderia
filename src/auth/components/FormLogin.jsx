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
      <form className="space-y-6" >

        <button
          onClick={loginGoogle}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Google
        </button>

      </form>
    </LayoutForm>
  );
};