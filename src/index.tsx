// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import "./styles/style.css";
import App from "./App";
import { ListProvider } from "./hooks/listContext";

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <App />
    </ListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
