import { useState } from 'react'
import reactLogo from './assets/nxn.jpg'
import viteLogo from '/mjahmad.jpg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentsPage from './pages/documents';
import AboutPage from './pages/about';
import GovernancePage from './pages/governance';
    

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NXN-Genesis</h1>
      <div className="card">
      <div className="explore-button">
      <a href="/documents">
        <button>
        Explore
        </button></a>
       </div>
      <div className="explore-button">
      <a href="/about">
        <button>
        About us
        </button></a>
       </div>
        <p>
          Ethical Finance for Every Legacy
        </p>
      </div>
      <p><b>
        “Let the coin be sovereign—not because it is scarce, but because it is sacred.”</b></p><p>
— MJ Ahmad
      </p>
    </>
 }
        />
        <Route path="/documents" element={<DocumentsPage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/governance" element={<GovernancePage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
