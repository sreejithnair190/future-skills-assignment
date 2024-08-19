import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReduxProvider from "./redux/reduxProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
);
