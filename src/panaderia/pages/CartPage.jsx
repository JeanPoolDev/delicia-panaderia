import { useContext, useMemo } from "react";
import { PanContext } from "../context";
import { Add, Delete, Minus } from "../../icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


export function CartPage() {

  const navigate = useNavigate();

  const { cart, removeCart, addQuantity, minusQuantity } = useContext(PanContext);

  const sumaryTotal = useMemo(
    () => cart.reduce((total, producto) => total + (producto.quantity * producto.precio), 0),
    [cart])

  const { status } = useSelector(state => state.auth);

  const isLogin = () => {
    if (status === 'not-authenticated') {
      navigate("/auth/login")
    } else {
      alert('compra exitosa papu')
    }
  }


  return (
    <div className="mt-[150px] h-auto max-w-7xl m-auto pb-10">

      <h1 className="mb-10 font-semibold text-3xl">Tus ordenes</h1>

      {
        cart.map(({ id, categoria, precio, nombre, imagen, quantity }) => (
          <section
            key={id}
            className="grid grid-cols-3 h-auto border-t border-b py-5">

            <div className="flex gap-5 items-center">
              <img
                className="w-20 h-20 object-cover rounded-full"
                src={imagen}
                alt={nombre} />
              <div>
                <h1 className="font-bold">{nombre}</h1>
                <p>{categoria}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => minusQuantity(id)}
                className="font-bold text-xl cursor-pointer">
                <Minus />
              </button>
              <p className="w-8 h-8 border grid place-content-center">
                {quantity}
              </p>
              <button
                onClick={() => addQuantity(id)}
                className="font-bold text-xl cursor-pointer">
                <Add />
              </button>
            </div>

            <div className="flex items-center justify-end gap-6">
              <p className="text-xl">S/.{precio}</p>
              <button
                onClick={() => removeCart(id)}
                className="cursor-pointer">
                <Delete />
              </button>
            </div>
          </section>
        ))
      }

      <div className="flex justify-end p-5 gap-10 items-center">
        <h1 className="text-xl">Sub total: <span className="text-[#9e7e5d] font-semibold">$ {sumaryTotal.toFixed(2)}</span></h1>
        <button
          onClick={isLogin}
          className="px-8 py-4 border-2 border-[#9e7e5d] tracking-widest 
          text-[#9e7e5d] font-semibold cursor-pointer hover:text-white hover:bg-[#9e7e5d]
          transition-all">
          COMPRAR
        </button>
      </div>

    </div>
  );
};