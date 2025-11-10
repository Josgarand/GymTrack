function MockupSection() {
  return (
    <section className="mt-10">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-8">Mockup</h1>

      {/* Contenedor de imagen + botón */}
      <div className="flex items-center gap-6">
        <article className="bg-blue-200/40 h-60 w-2/3 rounded-xl flex items-center justify-center">
          <p className="text-center">imagen de gestión de rutinas</p>
        </article>

        <div className="">
          <h2>Empieza hoy tu primer entrenamiento</h2>

          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Crear cuenta
          </button>
        </div>
      </div>
    </section>
  );
}

export default MockupSection;
