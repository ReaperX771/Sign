import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Bar, Cola, Colla, Community, Cta, Footer, Hero, How, Que, What, Why } from './Components'
import { Gallery } from "./Pages";

function App() {
 

  return (
    <>
     <Router>
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
            <Footer/>
           </>}
          />
       </Routes>
     </Router>
    </>
  )
}

export default App
