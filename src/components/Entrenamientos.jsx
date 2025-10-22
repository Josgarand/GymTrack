import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";


function Entrenamientos() {

const [series, setSeries] = useState([]); // 👈 estado para guardar los datos

  useEffect(() => {
    const fetchSeries = async () => {
      const { data, error } = await supabase
        .from("entrenamientos_test")
        .select("*");

      if (error) {
        console.error("Error cargando datos:", error);
      } else {
        setSeries(data); // 👈 guardamos los datos en el estado
      }
    };

    fetchSeries();
  }, []); // solo se ejecuta al montar


  return (
    <main className="">

<div className="flex items-center backdrop-blur-xl justify-between mb-7">
    <h1 className="text-black">Entrenamientos</h1>
    <button className="bg-fuchsia-800/40 border border-white/20 rounded-2xl h-10 w-60 text-black text-center mt-2">Añadir entrenamiento</button>

    </div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
  
  {series.map((item) => (
       

       <article key={item.id} className="backdrop-blur-xl bg-gray-400/15 mb-10 border border-white/10 rounded-3xl p-6 shadow-xl shadow-black/40 text-black text-left">
  <h2 className="text-2xl text-left font-bold mb-4 border-b border-white/10 pb-2">{item.nombre}</h2>

  <ul className="space-y-3 text-sm">
    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

  </ul>

<div className="mt-5 flex justify-between text-xs text-black">
    <span>Total: 10 series</span>
        <button className="bg-fuchsia-800/40 border border-white/20 text-black rounded-2xl h-7 w-60 text-center mt-2">Añadir ejercicio</button>
  </div>
</article>



      ))}
  
  


  {/* <article className="backdrop-blur-xl bg-gray-400/15 mb-10 border border-white/10 rounded-3xl p-6 shadow-xl shadow-black/40 text-black text-left">
  <h2 className="text-2xl text-left font-bold mb-4 border-b border-white/10 pb-2">Entrenamiento del 20 de octubre</h2>

  <ul className="space-y-3 text-sm">
    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

  </ul>

<div className="mt-5 flex justify-between text-xs text-black">
    <span>Total: 10 series</span>
        <button className="bg-fuchsia-800/40 border border-white/20 text-black rounded-2xl h-7 w-60 text-center mt-2">Añadir ejercicio</button>
  </div>
</article>



  <article className="backdrop-blur-xl bg-gray-400/15 mb-10 border border-white/10 rounded-3xl p-6 shadow-xl shadow-black/40 text-black text-left">
  <h2 className="text-2xl text-left font-bold mb-4 border-b border-white/10 pb-2">Entrenamiento del 20 de octubre</h2>

  <ul className="space-y-3 text-sm">
    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

  </ul>

<div className="mt-5 flex justify-between text-xs text-black">
    <span>Total: 10 series</span>
        <button className="bg-fuchsia-800/40 border border-white/20 text-black rounded-2xl h-7 w-60 text-center mt-2">Añadir ejercicio</button>
  </div>
</article>


  <article className="backdrop-blur-xl bg-gray-400/15 mb-10 border border-white/10 rounded-3xl p-6 shadow-xl shadow-black/40 text-black text-left">
  <h2 className="text-2xl text-left font-bold mb-4 border-b border-white/10 pb-2">Entrenamiento del 20 de octubre</h2>

  <ul className="space-y-3 text-sm">
    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

    <li className="border-b border-white/10 pb-2">
      <h2 className="font-medium mb-3">Curl de bíceps</h2>
      <p>12 repeticiones · 10 kg</p>
      <p>10 repeticiones · 10 kg</p>
      <p>12 repeticiones · 7.5 kg</p>
    </li>

  </ul>

<div className="mt-5 flex justify-between text-xs text-black">
    <span>Total: 10 series</span>
        <button className="bg-fuchsia-800/40 border border-white/20 text-black rounded-2xl h-7 w-60 text-center mt-2">Añadir ejercicio</button>
  </div>
</article> */}

</div>
    </main>

  );
}

export default Entrenamientos