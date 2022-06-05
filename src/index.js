import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App.js';
import store, { Persistor } from "./redux/store/index.js";
import { PersistGate } from 'redux-persist/integration/react'


const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={Persistor} >
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  rootElement
);
