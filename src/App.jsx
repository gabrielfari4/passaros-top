import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import SobreMim from "./pages/SobreMim"
import Menu from "./components/Menu";

function App() {

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
