import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>This is a simple CV/Resume builder</h1>
    <p>Disclaimer: This is just a project for me to learn REACT(components and states). 
      Do not use it as a real template for your resume.</p>
    <App />
  </StrictMode>,
)
