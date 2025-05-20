import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>This is a simple CV/Resume builder</h1>
    <p>Disclaimer: Use a laptop or desktop for better performance.</p>
    <App />
  </StrictMode>,
)
