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
import { Bar, Colla, Community, Cta, Footer, Hero, How, Que, What, Why } from './Components'
import { Ask, Doc, Gallery, Mission, Ora, Priva, Rewar, Stre, Tos } from "./Pages";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Bar/>
      <Routes>
        <Route path="/gallery/photos" element={<Gallery/>} />
        <Route path="/community/mission" element={<Mission/>} />
        <Route path="/fung/stre" element={<Stre/>} />
        <Route path="/fung/ora" element={<Ora/>} />
        <Route path="/fung/rewar" element={<Rewar/>} />
        <Route path="/priva" element={<Priva/>} />
        <Route path="/tos" element={<Tos/>} />
        <Route path="/ask" element={<Ask/>} />
        <Route path="/doc" element={<Doc/>} />
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
            <Que/>
          </>}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
