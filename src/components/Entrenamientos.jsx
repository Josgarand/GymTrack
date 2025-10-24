import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";


function Entrenamientos() {

const [series, setSeries] = useState([]); // 👈 estado para guardar los datos

  useEffect(() => {
    const fetchSeries = async () => {
      const { data, error } = await supabase
      .from('entrenamientos_test')
      .select('*, serie_test(*)');
        

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
  <h2 className="text-2xl text-left font-bold mb-4 border-b border-white/10 pb-2">{item.nombre} | {new Date(item.created_at).toLocaleDateString("es")}</h2>

{/* ESTA LISTA ES CON LOS TITULOS DUPLICADOS */}

  {/* <ul className="space-y-3 text-sm">
    {item.serie_test?.length > 0 ? (
        
        
          item.serie_test.map((serie) => (
            <li
              key={serie.id}
              className="border-b border-white/10 pb-2 last:border-none"
            >
              <h3 className="font-medium mb-1">{serie.nombre_ejercicio}</h3>
              <p>
                {serie.repeticiones} repeticiones · {serie.peso} kg
              </p>
            </li>
          ))
        ) : (
          <li className="italic text-gray-500">No hay ejercicios aún</li>
        )}

  </ul> */}

<ul className="space-y-3 text-sm">
  {item.serie_test?.length > 0 ? (
    // 1️⃣ Agrupar por nombre de ejercicio
    Object.entries(
      item.serie_test.reduce((acc, serie) => {
        if (!acc[serie.nombre_ejercicio]) acc[serie.nombre_ejercicio] = [];
        acc[serie.nombre_ejercicio].push(serie);
        return acc;
      }, {})
    ).map(([nombreEjercicio, series]) => (
      // 2️⃣ Renderizar cada grupo
      <li
        key={nombreEjercicio}
        className="border-b border-white/10 pb-2 last:border-none"
      >
        <h3 className="font-medium mb-2">{nombreEjercicio}</h3>

        {series.map((s, idx) => (
          <p key={idx}>
            {s.repeticiones} repeticiones · {s.peso} kg
          </p>
        ))}
      </li>
    ))
  ) : (
    <li className="italic text-gray-500">No hay ejercicios aún</li>
  )}
</ul>

<div className="mt-5 flex justify-between text-xs text-black">
    <span>Total: 10 series</span>
        <button className="bg-fuchsia-800/40 border border-white/20 text-black rounded-2xl h-7 w-60 text-center mt-2">Añadir ejercicio</button>
  </div>
</article>



      ))}

</div>
    </main>

  );
}

export default Entrenamientos