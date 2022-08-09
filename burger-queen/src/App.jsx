import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SelectRole from "./routes/SelectRole";
import TakeOrder from "./routes/TakeOrder";
import Deliver from "./routes/Deliver";
import Kitchen from "./routes/Kitchen";
import  './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectRole" element={<SelectRole />} />
        <Route path="/takeOrder" element={<TakeOrder />} />
        <Route path="/deliver" element={<Deliver />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  )
}

export default App
