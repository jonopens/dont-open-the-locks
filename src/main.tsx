import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const domContainer = document.getElementById('root');
const root = createRoot(domContainer!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
