import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Chef from "./menuChef";
import  './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="chef" element={<Chef />} />
      </Routes>
    </div>
  )
}

export default App
