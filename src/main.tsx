import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import NiceModal from '@ebay/nice-modal-react'; // Asegúrate de tener esta dependencia instalada

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <NiceModal.Provider> {/* Añade NiceModal.Provider aquí */}
        <App />
      </NiceModal.Provider>
    </HashRouter>
  </React.StrictMode>,
);
