import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Ajude from "./pages/Ajude";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/ajude" element={<Ajude />} />
    </Routes>
  );
};

export default Rotas;
