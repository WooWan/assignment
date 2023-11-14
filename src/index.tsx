import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./relay/RelayEnvironment";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);
