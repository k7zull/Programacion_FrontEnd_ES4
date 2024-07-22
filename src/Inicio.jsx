import React from 'react'
import './inicio.css'
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap'

/* view */
function Inicio() {
    return (
        <div className="inicio-container">
            <header className="inicio-header">
                <Container>
                    <Row>
                        <Col>
                            <h1>What is    
                                <img src="/src/assets/img/given_name.png" alt="given_name" />
                            ?</h1>
                            <Card className="welcome-card">
                                <CardBody>
                                    <CardText className='cita'>
                                        "I can't say goodbye, I'm still drifting with your echoes"
                                    </CardText>
                                    <CardText>
                                    Esta serie ha conquistado a muchos con su emotiva fusión de música, drama y romance. En Given, se sigue a un
                                     grupo de jóvenes músicos que enfrentan sus propios retos personales mientras buscan crear música que tenga un
                                     impacto profundo. A lo largo de su viaje, exploran temas como la amistad, el amor y el autodescubrimiento,
                                     así como cuestiones más serias como el duelo, la salud mental y la búsqueda de identidad. En esta página,
                                     se quiere dar a conocer más sobre la trama y los personajes, además de participar en una encuesta para 
                                     compartir las opiniones sobre el anime.
                                    </CardText>
                                </CardBody>
                            </Card>
                            <img className="imgInicio" style={{height:'250px'}} src="src\assets\img\given.png" alt="given" />
                        </Col>
                    </Row>
                </Container>
            </header>

           
        </div>
    )
}

/* exportación */
export default Inicio;
