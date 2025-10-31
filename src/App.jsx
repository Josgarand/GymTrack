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

<main className="md:pl-64 p-8 w-full"> 
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

