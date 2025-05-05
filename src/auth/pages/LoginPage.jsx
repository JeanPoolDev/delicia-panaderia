import { FormLogin } from "../components/FormLogin";

export function LoginPage() {
  return (
    <section className="h-screen bg-[url('/pan.jpeg')] bg-cover flex">
      <div className="w-1/2">

      </div>
      <div className="w-1/2 flex justify-center items-center p-10">

        <FormLogin />

      </div>
    </section>
  );
};

