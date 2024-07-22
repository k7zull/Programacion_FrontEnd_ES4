/* core */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row} from "reactstrap"

/* importaciones */
import Inicio from "./Inicio"
import Info from './Info'
import Personajes from './Personajes'
import Musica from './Musica'
import Encuesta from './Encuesta'
import BarraNavegacion from "./fragments/BarraNavegacion"
import './App.css'


/* view */
function App() {
  const [menu, setMenu] = useState('inicio') 

  const handleChangeMenuInfo = () => {
    setMenu('info')
  }
  const handleChangeMenuPersonaje = () => {
    setMenu('personajes')
  }
  const handleChangeMenuMusica = () => {
    setMenu('musica')
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
                handleChangeMenuInfo={handleChangeMenuInfo}
                handleChangeMenuPersonaje={handleChangeMenuPersonaje}
                handleChangeMenuMusica={handleChangeMenuMusica}
                handleChangeMenuEncuesta={handleChangeMenuEncuesta}
            />
          </Row>
          <Row className="mt-2">
            {menu === 'inicio' &&
              <>
                <Inicio />
              </>
            }
            {menu === 'info' &&
              <>
                <Info />
              </>
            }
            {menu === 'personajes' &&
              <>
                <Personajes />
              </>
            }
            {menu === 'musica' &&
              <>
                <Musica />
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
