import { useContext } from "react";
import { PanContext } from "../context";
import { Footer } from "../components/Footer";
import { Pan } from "../components/Pan";


export function ShopPage() {

  const { productos, addToCart } = useContext(PanContext);

  return (
    <div className="mt-[100px] h-auto max-w-6xl m-auto space-y-10">

      <h1 className="mb-10 font-semibold text-3xl">
        Nuestros productos
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          productos.map(producto => (
            <Pan
              key={producto.id}
              producto={producto}
              addToCart={addToCart}
            />
          ))
        }
      </section>

      <Footer />
    </div>
  );
};