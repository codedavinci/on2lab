import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Schedule from "./pages/Schedule";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="bg-base-200 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Products />} />
          <Route path="/classes" element={<Schedule />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
