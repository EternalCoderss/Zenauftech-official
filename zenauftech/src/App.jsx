import './App.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
