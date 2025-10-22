import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards';
import Entrenamientos from './components/Entrenamientos';
import { TailwindBackground } from './components/TailwindBackground';

function App() {

  return (
    <>    
    <BrowserRouter>
<div className="flex min-h-screen w-full text-white">

    <TailwindBackground />

    <Sidebar/>

<main className="flex-1 p-8 ml-60 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/entrenamientos" element={<Entrenamientos />} />
        </Routes>
</main>
      </div>
     </BrowserRouter>
    </>

  )
}

export default App

