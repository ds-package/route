import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeContextProvider from './components/hooks/useTheme';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>
);

