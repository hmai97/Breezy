import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";


function App() {
  const [toast, setToast] = useState("");
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast("");
    }, 3200);
  };

  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home showToast={showToast} />} />
        <Route path="/pricing" element={<Pricing showToast={showToast} />} />
        <Route path="/faq" element={<FAQ />} />
    </Routes>
         {toast && (
            <div className="toast show">
            {toast}
            </div>
      )}
   </BrowserRouter>
  );
}

export default App
