import { Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Guests from "./components/Guests/Guests";
import withIsAdmin from "./guards/IsAdmin";
import Attendance from "./components/Attendance/Attendance";
import Admin from "./components/Admin/Admin";
const ProtectedGuests = withIsAdmin(Admin);
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<ProtectedGuests />}>
        <Route path="guests" element={<Guests />} />
        <Route path="new-guests" element={<Attendance />} />
      </Route>
    </Routes>
  );
}

export default App;
