import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Certifique-se que existe um elemento com id="root" no seu HTML
const rootElement = document.getElementById('root');

// Verificação de segurança
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}