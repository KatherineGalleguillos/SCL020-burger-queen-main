import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import  './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
