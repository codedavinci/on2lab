import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Schedule from "./pages/Schedule";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <a href="/" className="mr-4 text-blue-500">
            Home
          </a>
          <a href="/about" className="mr-4 text-blue-500">
            About
          </a>
          <a href="/contact" className="text-blue-500">
            Contact
          </a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Products />} />
          <Route path="/contact" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}
