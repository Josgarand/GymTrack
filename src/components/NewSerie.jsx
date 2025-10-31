import { useState } from "react";
import { supabase } from "../supabaseClient";


export default function NewSerie({ open, onClose, id, onInserted}) {
 

  const [nombre_ejercicio, setEjercicio] = useState("");
  const [peso, setPeso] = useState("");
  const [repeticiones, setRepeticiones] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleInsert = async () => {
    setMensaje("");

    const { error } = await supabase
      .from("serie_test")
      .insert([{nombre_ejercicio: nombre_ejercicio, peso: peso, repeticiones: repeticiones, id_entrenamiento: id}]);

    if (error) {
      console.error(error);
      alert("Error al insertar en la base de datos");
    } else {
      alert("Registro insertado correctamente");
      setEjercicio("");
      setRepeticiones("");
      setMensaje("");
      setPeso("");
      if (onInserted) onInserted(); //Actualiza la lista
    }

  };

 
  return (
    <div className="p-6">
    

      {/* 3️⃣ Modal (solo se muestra si open = true) */}
      {open && (
        <>
          {/* Fondo oscuro semi-transparente */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose} // Cierra al hacer clic fuera
          ></div>

          {/* Contenedor principal de la modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-240 m-10 text-center">
              <h1 className="text-lg text-center text-black mb-4">
                Registrar nueva serie
              </h1>
              

          <div className="flex flex-cols-2 w-full ">

            <h2  className="w-full">Nombre del ejercicio</h2>

            <h2 className="w-full">Repeticiones</h2>

            <h2  className="w-full">Peso</h2>
          
          </div>

          <div className="flex items-center">

            {/* Input para el nombre */}

              <input
                type="text"
                value={nombre_ejercicio}
                onChange={(e) => setEjercicio(e.target.value)}
                className="border border-gray-300 w-full rounded p-2 m-4 text-black"
              />

               {/* Input para el nombre */}
              <input
                type="text"
                placeholder=""
                value={repeticiones}
                onChange={(e) => setRepeticiones(e.target.value)}
                className="border border-gray-300 w-full rounded p-2 m-4 text-black"
              />
              
              <input
                type="text"
                placeholder=""
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="border border-gray-300 w-full rounded p-2 m-4 text-black"
              />
      </div>

          <div className="flex justify-between items-center">

              <button
                onClick={onClose}
                className="bg-red-500 text-white w-20 px-4 py-2 m-4 rounded hover:bg-red-600"
              >
                Cerrar
              </button>

              {/* Botón para insertar */}
              <button
                onClick={handleInsert}
                className="bg-blue-600 text-white w-60 px-4 py-2 m-4 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Añadir entrenamiento
              </button>

          </div>
              {/* Mensaje */}
              {mensaje && <p className="mt-3 text-sm text-black">{mensaje}</p>}

              
            </div>
          </div>
        </>
      )}

      
    </div>
  );
}
