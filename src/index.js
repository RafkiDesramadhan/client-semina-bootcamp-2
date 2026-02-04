import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
=======
import { Provider } from "react-redux";
import store from "./redux/store";
>>>>>>> ca6655a5e725eddafaaff36ca2644728335e448f

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>,
=======
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
>>>>>>> ca6655a5e725eddafaaff36ca2644728335e448f
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
