console.log(window.location)

const pagina = window.location.pathname === "/" ? <div>Olá mundo!</div> : <div>Sobre mim...</div>

function App() {

  return pagina;
}

export default App
