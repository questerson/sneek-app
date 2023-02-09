import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./components/Nav/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
