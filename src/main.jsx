import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Country } from './Views/Country'
import { ThemeProvider } from './Context/ThemeContext'
import { Navbar } from './components/Navbar'
import "./assets/index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
