import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Careers from "./components/career";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Search from "./components/Search";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Careers />} />
        <Route path="/about" element={<Events />} />
        <Route path="/about" element={<Product />} />
        <Route path="/about" element={<Search />} />
        <Route path="/about" element={<Wishlist />} />
        <Route path="/about" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
