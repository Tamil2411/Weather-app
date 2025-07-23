import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Weather from './weather'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weather />
  </StrictMode>,
)
