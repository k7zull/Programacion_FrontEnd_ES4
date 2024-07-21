/* core */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row} from "reactstrap"

/* importaciones */
import Inicio from "./Inicio"
import Destacados from "./Destacados"
import Personajes from './Personajes'
import Encuesta from './Encuesta'
import BarraNavegacion from "./fragments/BarraNavegacion"
import './App.css'

/* component: view */
function App() {
  const [menu, setMenu] = useState('inicio') 

  const handleChangeMenuDestacado = () => {
    setMenu('destacados')
  }
  const handleChangeMenuPersonaje = () => {
    setMenu('personajes')
  }
  const handleChangeMenuEncuesta = () => {
    setMenu('encuesta')
  }
  return (
    <>
        <Container>
          <Row>
            <BarraNavegacion
                setMenu={setMenu}
                handleChangeMenuDestacado={handleChangeMenuDestacado}
                handleChangeMenuPersonaje={handleChangeMenuPersonaje}
                handleChangeMenuEncuesta={handleChangeMenuEncuesta}
            />
          </Row>
          <Row className="mt-2">
            {/* condition rendering */}
            {menu === 'inicio' &&
              <>
                <Inicio />
              </>
            }
            {menu === 'destacados' &&
              <>
                <Destacados />
              </>
            }
            {menu === 'personajes' &&
              <>
                <Personajes />
              </>
            }
            {menu === 'encuesta' &&
              <>
                <Encuesta />
              </>
            }
          </Row>
        </Container>
    </>
  )
}

export default App
