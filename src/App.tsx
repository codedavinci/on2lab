import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Schedule from "./pages/Schedule";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Products />} />
          <Route path="/contact" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}
