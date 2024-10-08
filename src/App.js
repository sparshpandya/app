
import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';

export const NewsContext = createContext();
export const UpdateNewsContext = createContext();

function App() {
  const [showNews, setNews] = useState([]);
  return (
    <React.StrictMode>
      <Router>
        <NewsContext.Provider value={showNews}>
          <UpdateNewsContext.Provider value={setNews}>
            <Navbar />
            <ToastContainer />
          </UpdateNewsContext.Provider>
        </NewsContext.Provider>
      </Router>
    </React.StrictMode>
  )
}

export default App;

