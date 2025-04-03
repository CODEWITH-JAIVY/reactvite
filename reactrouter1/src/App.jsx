import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        {/* The Header should be outside Routes to always display */}
        <Header />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={< Projects/>} />
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  
  );
}

export default App;
