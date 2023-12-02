import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from "./Sidebar";
import Home from "./component/Home";
import Workout from "./component/Workout";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Create from "./component/Create";
import Update from "./component/Update";

function App() {
  return (
    <div className="App d-flex">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route className="active-link act" path="/" element={<Home />} />
          <Route className="active-link act" path="/Workout" element={<Workout />} />
          <Route className="active-link act" path="/Create" element={<Create />} />
          <Route className="active-link act" path="/Update/:id" element={<Update />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
