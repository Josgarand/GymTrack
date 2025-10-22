// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/cards", label: "Cards" },
    { to: "/entrenamientos", label: "Entrenamientos" },
  ];

  return (

    
    <aside className="fixed w-60 h-[94vh] bg-blue-800/25 p-6 space-y-4 rounded-2xl ml-3 mt-7">

      <h1 className="text-xl font-bold mb-6">GymTrack</h1>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link key={link.to} to={link.to}
        className={`rounded-lg px-3 py-2 transition ${location.pathname === link.to? "bg-fuchsia-800 text-white"  : "text-gray-400 hover:text-white hover:bg-fuchsia-500/20"}`}
          >
            {link.label}
          
          </Link>

        ))}
      </nav>
    </aside>
  );
}
