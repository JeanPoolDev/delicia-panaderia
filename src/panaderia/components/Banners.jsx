export function Banners() {
  return (
    <div className="h-screen p-4 sm:p-10">
      <div className="w-full h-full border rounded-2xl 
                bg-[url('https://i.pinimg.com/736x/6c/3a/e3/6c3ae3d7e20d902e7311ee80e9cd30ae.jpg')]
                bg-cover bg-center">

        <div className="w-full h-full degradado flex items-end p-4 sm:p-20 rounded-2xl">
          <h1 className="text-white text-5xl sm:text-6xl w-full sm:w-1/2">
            Desde el horno hasta tu mesa, frescura garantizada
          </h1>
        </div>

      </div>
    </div>
  );
};