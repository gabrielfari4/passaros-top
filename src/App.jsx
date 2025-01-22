import Home from "./pages/Home"
import SobreMim from "./pages/SobreMim"

console.log(window.location)

const pagina = window.location.pathname === "/" ? <Home /> : <SobreMim />

function App() {

  return pagina;
}

export default App
