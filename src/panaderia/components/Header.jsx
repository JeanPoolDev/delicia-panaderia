import { useContext } from "react";
import { PanContext } from "../context";
import { Cart, Exit } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunk";

export function Header() {

  const dispatch = useDispatch();
  const { photoURL } = useSelector(state => state.auth);
  const { cart } = useContext(PanContext);

  const lengthCart = cart.length;

  const onLogout = () => {
    dispatch(startLogout())
  }

  return (
    <header className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-white  
            w-[350px] sm:w-[700px] xl:w-[1300px] h-[100px] rounded-full border z-[100]">
      <div className="flex items-center h-full px-10 justify-between">
        <a href="/" className="text-xl font-bold hover:scale-125 transition-all">
          Delicia Pan
        </a>
        <nav className="hidden xl:flex gap-6 text-[#9e7d5d] font-bold text-lg">
          <a href="/">Inicio</a>
          <a href="/#about">Sobre nosotros</a>
          <a href="/#panes">Producto</a>
          <a href="/#place">Lugares</a>
          <a href="/shop">Tienda</a>
        </nav>
        <div className="flex gap-4">
          <a
            href="/cart"
            className="px-4 py-3 sm:px-5 sm:py-4 rounded-lg bg-[#9e7d5d] text-white flex">
            <Cart />
            <p className="text-black w-5 h-5 bg-white flex justify-center rounded-full font-semibold">
              {Number(lengthCart)}
            </p>
          </a>
          <button
            onClick={onLogout}
            className="cursor-pointer">
            <Exit />
          </button>
          <img
            src={photoURL}
            alt="user"
            className="w-10 h-10 object-cover rounded-full border z-10"
          />

        </div>
      </div>
    </header>
  );
};