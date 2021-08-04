// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import "./styles/style.css";
import App from "./App";
import { ListProvider } from "./hooks/listContext";
import { SortOptionProvider } from "./hooks/sortOptionContext";

ReactDOM.render(
  <React.StrictMode>
    <ListProvider>
      <SortOptionProvider>
        <App />
      </SortOptionProvider>
    </ListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
