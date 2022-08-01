import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { DataProvider } from "components/contexts/DataContext";

Modal.setAppElement("#root");

ReactDOM.render(
  <DataProvider>
      <App />
  </DataProvider>,
  document.getElementById("root")
);
