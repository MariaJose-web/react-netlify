import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import ApiRender from "./components/ApiRender/ApiRender"

function App() {
  
  return (
    <>
     <div className="container">
      <h1>María José Hervás Mozos</h1>
      <h2>Datos Personales</h2>
      <h2>Datos Academicos</h2>
      <ApiRender/>
     </div>

    </>
  )
}

export default App
