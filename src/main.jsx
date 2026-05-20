import React from "react"
import ReactDOM from "react-dom/client"
import { Toaster } from "react-hot-toast"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import App from "./App"
import ProjectDetail from "./pages/ProjectDetail"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/project/:id"
          element={<ProjectDetail />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
)