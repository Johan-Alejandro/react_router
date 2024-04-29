import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Contact from "./views/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
