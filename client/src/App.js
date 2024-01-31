import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ServiceCard from "./Components/Cards/ServiceCard";
import WebIcon from '@mui/icons-material/Web';
function App() {
  return (
    <div>
      {/* react navigation */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
