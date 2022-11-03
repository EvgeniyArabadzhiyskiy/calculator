import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/Router/Router';

import 'modern-normalize/modern-normalize.css';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
