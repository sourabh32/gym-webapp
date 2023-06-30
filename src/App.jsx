import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import ExerciseDetail from "./routes/ExerciseDetail"
import Header from "./components/Header"
import Footer from "./components/Footer"





function App() {
  

  return (
    <Router>
    <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes> 
      <Footer />
    </Router>
    

    
    
    
  )
}

export default App
