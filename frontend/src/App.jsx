import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AddNote from "./page/AddNote.jsx";
import GetNote from "./page/GetNote.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/note"
          element={
            <ProtectedRoute>
              <GetNote />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-note"
          element={
            <ProtectedRoute>
              <AddNote />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;