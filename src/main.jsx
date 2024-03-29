import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './jsx/components/App.jsx';
import './css/index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './jsx/redux/store.js';
import { persistor } from './jsx/redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
