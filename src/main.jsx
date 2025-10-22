import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TailwindBackground } from './components/TailwindBackground.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    {/* <TailwindBackground /> */}
    
      <App/>


  </StrictMode>
  ,
)
