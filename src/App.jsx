import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Players from './Players';
import About from './About';
import { useEffect, useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    let savedMode = localStorage.getItem("displayMode")
    if(!savedMode){
      const newMode = "Light"
      setDarkMode(false)
      localStorage.setItem("displayMode", newMode)
    }
    setDarkMode(savedMode === 'dark' ? true : false)
  },[])

  return (
    <div className={`h-[100vh] ${darkMode ? "bg-gray-dark text-green" : ""} transition-all duration-1000`}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Players setDarkMode={setDarkMode} darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
