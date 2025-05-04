import { Navigate } from "react-router-dom";
import Guests from "../components/Guests/Guests";

const withIsAdmin = (WrappedComponent) => {
  return (props) => {
    if (!localStorage.getItem("admin")) {
      return <Navigate to="/login"></Navigate>;
    }
    return <WrappedComponent></WrappedComponent>;
  };
};

export default withIsAdmin;
