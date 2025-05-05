
import { useContext } from "react";
import { PanContext } from "../context";
import { Cart, Exit } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunk";


gsap.registerPlugin(CSSRulePlugin);

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { DropDown } from "./DropDown";


export function Header() {

  const dispatch = useDispatch();

  const { photoURL, status, displayName } = useSelector(state => state.auth);
  const { cart } = useContext(PanContext);

  const lengthCart = cart.length;

  const onLogout = () => {
    dispatch(startLogout())
  }


  return (
    <header className="fixed top-0 w-full bg-white h-[100px] z-[100]">
      <div className="flex items-center h-full px-10 justify-between">
        <a href="/" className="text-xl font-bold hover:scale-125 transition-all">
          Delicia Pan
        </a>
        <nav className="hidden lg:flex gap-6 text-[#9e7d5d] font-bold text-lg">
          <a href="/">Inicio</a>
          <a href="/#about">Sobre nosotros</a>
          <a href="/#panes">Producto</a>
          <a href="/#place">Lugares</a>
          <a href="/shop">Tienda</a>
        </nav>
        <div className="flex gap-4 items-center">
          <a
            href="/cart"
            className="px-4 py-3 sm:px-5 sm:py-4 rounded-lg bg-[#9e7d5d] text-white flex">
            <Cart />
            <p className="text-black w-5 h-5 bg-white flex justify-center rounded-full font-semibold">
              {Number(lengthCart)}
            </p>
          </a>

          {
            (status === 'authenticated')
              ? <DropDown onLogout={onLogout} photoURL={photoURL} displayName={displayName} />
              : <a
                href="/auth/login"
                className="bg-black text-white px-6 py-4 rounded-lg cursor-pointer font-semibold
              hover:bg-white hover:text-black transition-all hover:outline">
                Iniciar Sesión
              </a>
          }
        </div>
      </div>
    </header>
  );
};