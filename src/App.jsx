import { BrowserRouter, Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Entrenamientos from "./pages/Entrenamientos";
import { TailwindBackground } from "./components/TailwindBackground";
import "./App.css";
import Rutinas from "./pages/Rutinas";

export default function App() {
  return (
    <BrowserRouter>
      {/* Contenedor general */}
      <div className="relative min-h-screen w-full overflow-x-hidden">
        {/* Fondo decorativo */}
        {/* <TailwindBackground /> */}

        {/* Sidebar fijo */}
        <Sidebar />

        {/* Contenido principal */}
        <main className="mt-16 md:pl-104 md:pr-40 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rutinas" element={<Rutinas />} />
            <Route path="/entrenamientos" element={<Entrenamientos />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
