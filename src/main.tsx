import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.tsx";
// main.js (або інша точка входу)
import 'tailwindcss/tailwind.css'

import './index.css';
import { store } from "./redux/store.ts";
// import { persistor } from "./redux/store.ts";
// import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading{null} persistor={persistor}> */}
      <BrowserRouter basename="">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
