import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from '../src/components/Home';
import Header from "./components/Header";
import Weather from './components/Weather';
import Forest from './components/Forest'
import Footer from "./components/Footer";
import Ocean from "./components/Ocean";
import Impacts from "./components/Impacts";
import Future from "./components/Future";
import Involved from "./components/Involved";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/forest" element={<Forest />} />
          <Route path='/ocean' element={<Ocean />} />
          <Route path='/impacts' element={<Impacts />} />
          <Route path='/future' element={< Future />} />
          <Route path='/get-involved' element={<Involved />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <main className="main-content">

        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
