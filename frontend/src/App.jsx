import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import AddNote from "./page/AddNote.jsx"
import GetNote from "./page/GetNote.jsx"
function App() {

  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetNote/>}/>
        <Route path="/add-note" element={<AddNote />} />
      </Routes>   
   </>
  )
}

export default App
