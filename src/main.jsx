import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './components/GlobalStyles.styled';

import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
