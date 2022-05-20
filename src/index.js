import React from "react";
import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
// Redux
import { Provider } from "react-redux";
import { store } from "./app/store";
// Mapbox
import "mapbox-gl/dist/mapbox-gl.css";
// App
import App from "./App";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
