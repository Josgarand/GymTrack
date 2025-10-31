import { useState } from "react";
import { supabase } from "../supabaseClient";


export default function NewWorkout({ open, onClose, onInserted }) {
 

  const [workoutName, setWorkoutName] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleInsert = async () => {
    setMensaje("");

    const { error } = await supabase
      .from("entrenamientos_test")
      .insert([{nombre: workoutName }]);

    if (error) {
      console.error(error);
      alert("Error al insertar en la base de datos");
    } else {
      alert("Registro insertado correctamente");
      setWorkoutName("");
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
              <h2 className="text-lg text-black font-semibold mb-4">
                Registrar nuevo entrenamiento
              </h2>
              

            {/* Input para el nombre */}
              <input
                type="text"
                placeholder="Nombre de la serie"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full mb-4 text-black"
              />

          <div className="flex justify-between items-center">

              <button
                onClick={onClose}
                className="bg-red-500 text-white w-20 px-4 py-2 rounded hover:bg-red-600"
              >
                Cerrar
              </button>

              {/* Botón para insertar */}
              <button
                onClick={handleInsert}
                className="bg-blue-600 text-white w-60 px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
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