import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Timeline from "./routes/timeline";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="timeline" element={<Timeline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
