import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UnlockProvider } from './context/UnlockContext.tsx';
import App from './App.tsx'

const domContainer = document.getElementById('root');
const root = createRoot(domContainer!);

root.render(
  <UnlockProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </UnlockProvider>
);
