import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import AddProd from "./Component/AddProd";
import UpdateProd from "./Component/UpdateProd";
import SelectProd from "./Component/SelectProd";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addProd" element={<AddProd />} />
          <Route path="/updateproduct/:productid" element={<UpdateProd />} />
          <Route path="/selectproduct/:productid" element={<SelectProd />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
