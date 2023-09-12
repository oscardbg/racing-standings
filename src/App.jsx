import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Formula1 from "./pages/Formula1";
import Motogp from "./pages/Motogp";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/f1" element={<Formula1 />} />
            <Route path="/motogp" element={<Motogp />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
