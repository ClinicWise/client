import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from './routes/AppRoutes.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);