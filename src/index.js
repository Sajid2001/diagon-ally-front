import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoriesContextProvider } from './Contexts/CategoriesContext';
import { AuthContextProvider } from './Contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CategoriesContextProvider>
        <App />
      </CategoriesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
