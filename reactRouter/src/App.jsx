import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./component/Home/Home";

const About = () => <h2 className="text-2xl font-semibold text-center mt-10">About Page</h2>;
const Contact = () => <h2 className="text-2xl font-semibold text-center mt-10">Contact Page</h2>;
const Login = () => <h2 className="text-2xl font-semibold text-center mt-10">Login Page</h2>;

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto mt-6 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
