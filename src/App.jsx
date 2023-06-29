import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import ExerciseDetail from "./routes/ExerciseDetail"
import Header from "./components/Header"





function App() {
  

  return (
    <Router>
    <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes> 
    </Router>
    

    
    
    
  )
}

export default App
