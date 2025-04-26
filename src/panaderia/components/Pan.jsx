export function Pan({ producto, addToCart }) {

  const { categoria, precio, nombre, imagen } = producto;

  return (
    <button
      onClick={() => addToCart(producto)}
      className="h-[600px] bg-[#f7f6f2] rounded cursor-pointer hover:bg-[#1212122b] transition-all">

      <div className="h-5/6">
        <img
          className="object-cover w-full h-full"
          src={imagen}
          alt={nombre} />
      </div>

      <div className="h-1/6 flex justify-between px-10 py-2 items-center">
        <div className="text-start">
          <h1 className="font-bold">{nombre}</h1>
          <p>{categoria}</p>
        </div>

        <big>S/.{precio}</big>
      </div>

    </button>
  );
};