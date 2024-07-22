import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Table, Accordion, AccordionItem, AccordionHeader, AccordionBody, Button } from 'reactstrap';
import './info.css'; // Asegúrate de crear y usar este archivo para estilos personalizados

function Info() {
    const [open, setOpen] = useState('');
    const [showImage, setShowImage] = useState('');

    const toggle = (id) => {
        if (open === id) {
            setOpen('')
        } else {
            setOpen(id)
        }
    }

    const handleImageClick = (imageName) => {
        setShowImage(imageName)
    }

    return (
        <Container className="info-container">
            <Row>
                <Col sm="7">
                    <Card className="info-card">
                        <CardBody>
                            <CardTitle tag="h2"><strong>Sipnosis</strong></CardTitle>
                            <CardText className='textInfo'>
                                <strong>Given</strong> sigue a <strong>Ritsuka Uenoyama</strong>, un talentoso guitarrista que, al encontrarse con <strong>Mafuyu Sato</strong>, un joven con una voz impresionante pero una historia llena de dolor, ve cómo su vida y su música cambian para siempre. Mafuyu se une a la banda de Ritsuka, lo que lleva a todos los miembros a enfrentar sus propias batallas internas mientras tratan de encontrar su lugar en el mundo musical. La serie aborda temas profundos como el duelo, el amor no correspondido y la autoaceptación, así como cuestiones serias como la salud mental y el autodescubrimiento, todo ello mientras se disfruta de una banda sonora emocionante.
                            </CardText>
                            <Row>
                                <Col>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Títulos:</th>
                                                <td>ギヴン (Given)</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Idiomas:</th>
                                                <td>Inglés, Japonés</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Géneros:</th>
                                                <td>Drama, Música, Romance, Shounen-ai</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col>
                                    <Accordion className='info-series' open={open} toggle={toggle}>
                                        <AccordionItem>
                                            <AccordionHeader targetId="1">Manga</AccordionHeader>
                                            <AccordionBody accordionId="1">
                                                <CardText>
                                                    Capítulos: 51<br/>
                                                    Volúmenes: 9<br/>
                                                    Lanzamiento: 30 de abril de 2013 - 30 de marzo de 2023<br/>
                                                    Autor/Ilustrador: Natsuki Kizu<br/>
                                                    Serialización: Cheri+
                                                </CardText>
                                                <Button color="primary" onClick={() => handleImageClick('manga')}>Ver Portada</Button>
                                            </AccordionBody>
                                        </AccordionItem>    
                                        <AccordionItem>
                                            <AccordionHeader targetId="2">Anime</AccordionHeader>
                                            <AccordionBody accordionId="2">
                                                <CardText>
                                                    Lanzado del 11 de julio de 2019 al 19 de septiembre de 2019, el anime de 11 episodios detalla la formación de la banda de cuatro miembros mientras se preparan para una actuación en vivo con otros personajes involucrados.
                                                </CardText>
                                                <Button color="primary" onClick={() => handleImageClick('anime')}>Ver Portada</Button>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="3">OVA</AccordionHeader>
                                            <AccordionBody accordionId="3">
                                                <CardText>
                                                    <strong>Given: Uragawa no Sonzai</strong><br/>
                                                    El 1 de diciembre de 2021 se lanzó una OVA (llamada given: por otro lado en inglés). Se incluyó con el séptimo volumen del manga, como un bono de edición limitada. La historia se centra en la historia de Mafuyu y Uenoyama, que ocurre durante la película.
                                                </CardText>
                                                <Button color="primary" onClick={() => handleImageClick('ova')}>Ver Portada</Button>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionHeader targetId="4">Películas</AccordionHeader>
                                            <AccordionBody accordionId="4">
                                                <CardText>
                                                    <strong>Given movie 1</strong><br/>
                                                    Como secuela continuando la historia donde los episodios de anime se cubrieron en el manga, se lanzó una película de anime un año después, el 22 de agosto de 2020. La historia se refiere al desarrollo de la relación de Akihiko con Haruki en los volúmenes 4 y 5 del manga. Fue producido por Blue Lynx y tiene una duración de 59 minutos.
                                                    <Button color="primary" onClick={() => handleImageClick('movie1')}>Ver Portada Movie 1</Button>
                                                </CardText>                                                
                                                <CardText>
                                                    <strong>Given movie 2: Hiiragi Mix</strong><br/>
                                                    El 22 de marzo de 2023, Natsuki Kizu anunció en Twitter que se estaba trabajando en una nueva película de anime con un teaser promocional. La segunda película se estrenó el 27 de enero de 2024. Tiene una duración de 1 hora y 10 minutos.
                                                    <Button color="primary" onClick={() => handleImageClick('movie2')}>Ver Portada Movie 2</Button>
                                                </CardText>
                                                <CardText>
                                                    <strong>Given movie 3: Umi e</strong><br/>
                                                    La tercera película está programada para emitirse en 2024.
                                                    <Button color="primary" onClick={() => handleImageClick('movie3')}>Ver Portada Movie 3</Button>
                                                </CardText>
                                                
                                            </AccordionBody>
                                        </AccordionItem>
                                    </Accordion>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="5">
                    <Card className="info-card">
                        <CardBody>
                            <CardTitle tag="h3"><strong>Portada</strong></CardTitle>
                            {showImage === 'manga' && <img src="src/assets/img/imgInfo/givenManga.png" alt="Manga" className="img-fluid" />}
                            {showImage === 'anime' && <img src="src/assets/img/imgInfo/givenAnime.png" alt="Anime" className="img-fluid" />}
                            {showImage === 'ova' && <img src="src/assets/img/imgInfo/givenOva.png" alt="OVA" className="img-fluid" />}
                            {showImage === 'movie1' && <img src="src/assets/img/imgInfo/givenMovie1.png" alt="Película 1" className="img-fluid" />}
                            {showImage === 'movie2' && <img src="src/assets/img/imgInfo/givenMovie2.png" alt="Película 2" className="img-fluid" />}
                            {showImage === 'movie3' && <img src="src/assets/img/imgInfo/givenMovie3.png" alt="Película 3" className="img-fluid" />}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Info;
