import { Routes, Route, Navigate } from "react-router-dom";
import CollegeDetail from "./components/CollegeDetail";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/colleges" />} />
        <Route path="/colleges" element={<Home />} />
        <Route path="/colleges/detail" element={<CollegeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
