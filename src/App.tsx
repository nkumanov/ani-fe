import { Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Guests from "./components/Guests/Guests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/guests" element={<Guests />} />
    </Routes>
  );
}

export default App;
