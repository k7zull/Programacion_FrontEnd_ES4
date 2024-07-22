import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Table, Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import './info.css'; // Asegúrate de crear y usar este archivo para estilos personalizados

function Info() {
    const [open, setOpen] = useState('');

    const toggle = (id) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    return (
        <Container className="info-container">
            <Card className="info-card">
                <CardBody>
                    <Row>
                        <Col sm="7">
                            <CardTitle tag="h2">Sinopsis:</CardTitle>
                            <CardText>
                                <strong>Given</strong> sigue a <strong>Ritsuka Uenoyama</strong>, un talentoso guitarrista que, al encontrarse con <strong>Mafuyu Sato</strong>, un joven con una voz impresionante pero una historia llena de dolor, ve cómo su vida y su música cambian para siempre. Mafuyu se une a la banda de Ritsuka, lo que lleva a todos los miembros a enfrentar sus propias batallas internas mientras tratan de encontrar su lugar en el mundo musical. La serie aborda temas profundos como el duelo, el amor no correspondido y la autoaceptación, así como cuestiones serias como la salud mental y el autodescubrimiento, todo ello mientras se disfruta de una banda sonora emocionante.
                            </CardText>
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
                                    </AccordionBody>
                                </AccordionItem>    
                                <AccordionItem>
                                    <AccordionHeader targetId="2">Anime</AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <CardText>
                                            Lanzado del 11 de julio de 2019 al 19 de septiembre de 2019, el anime de 11 episodios detalla la formación de la banda de cuatro miembros mientras se preparan para una actuación en vivo con otros personajes involucrados.
                                        </CardText>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3"><strong>OVA</strong></AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <CardText>
                                            <strong>Given: Uragawa no Sonzai</strong><br/>
                                            El 1 de diciembre de 2021 se lanzó una OVA (llamada given: por otro lado en inglés). Se incluyó con el séptimo volumen del manga, como un bono de edición limitada. La historia se centra en la historia de Mafuyu y Uenoyama, que ocurre durante la película.
                                        </CardText>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="4">Películas</AccordionHeader>
                                    <AccordionBody accordionId="4">
                                        <CardText>
                                            <strong>Given movie 1</strong><br/>
                                            Como secuela continuando la historia donde los episodios de anime se cubrieron en el manga, se lanzó una película de anime un año después, el 22 de agosto de 2020. La historia se refiere al desarrollo de la relación de Akihiko con Haruki en los volúmenes 4 y 5 del manga. Fue producido por Blue Lynx y tiene una duración de 59 minutos.
                                        </CardText>
                                        <CardText>
                                            <strong>Given movie 2: Hiiragi Mix</strong><br/>
                                            El 22 de marzo de 2023, Natsuki Kizu anunció en Twitter que se estaba trabajando en una nueva película de anime con un teaser promocional. La segunda película se estrenó el 27 de enero de 2024. Tiene una duración de 1 hora y 10 minutos.
                                        </CardText>
                                        <CardText>
                                            <strong>Given movie 3: Umi e</strong><br/>
                                            La tercera película está programada para emitirse en 2024.
                                        </CardText>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </Col>
                        <Col sm="5">
                            <CardBody>
                                <CardTitle tag="h3">Imagen</CardTitle>
                                <img src="src/assets/img/imgInfo/givenAnime.png" alt="Given" className="img-fluid" />
                            </CardBody>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Info;
