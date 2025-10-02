import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}
import './App.css'
import { Bar, Cola, Colla, Community, Cta, Footer, Hero, How, Que, What, Why } from './Components'
import { Gallery } from "./Pages";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Bar/>
      <Routes>
        <Route path="gallery/photos" element={<Gallery/>} />
        <Route
          path="/"
          element={ <>
            <Hero/>
            <What/>
            <Why/>
            <How/>
            <Community/>
            <Cta/>
            <Colla/>
            <Cola/>
            <Que/>
          </>}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
