// src/components/Sidebar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/rutinas", label: "Rutinas" },
    { to: "/entrenamientos", label: "Entrenamientos" },
  ];

  return (

    
    
    <>
      {/* Botón hamburguesa SOLO en móvil */}
      <button
        className="fixed mt-8 left-4 z-50 md:hidden bg-fuchsia-800/40 text-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {/* Fondo oscuro cuando el menú está abierto en móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar fijo */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-blue-800/25 backdrop-blur-sm
          p-6 space-y-4 rounded-r-2xl shadow-lg z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <h1 className="text-xl font-bold mb-6 text-white">GymTrack</h1>

        {/* Botón cerrar (solo móvil) */}
        <button
          className="absolute top-4 right-4 md:hidden text-white"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-3 py-2 transition ${
                location.pathname === link.to
                  ? "bg-fuchsia-800 text-white"
                  : "text-gray-300 hover:text-white hover:bg-fuchsia-500/20"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
