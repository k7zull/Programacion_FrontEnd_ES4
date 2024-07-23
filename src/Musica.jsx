import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import './musica.css';

/* view*/
function Musica() {
    return (
        <Container className="musica-container">
            <Row>
                <Col className='musica-inicio'>
                &#60;&#60; La música es una parte fundamental de Given, y su banda sonora complementa perfectamente la narrativa y el 
                    tono emocional del anime. &#62;&#62;                          
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="musica-card">
                        <CardBody>
                            <CardTitle tag="h2" className="musica-subtitle"><strong>"Given" (Banda Sonora Original)</strong><br /></CardTitle>
                            <CardText className="musica-text">
                                El álbum incluye todas las canciones interpretadas por la banda dentro del anime, así como los
                                 temas de apertura y cierre. Es una colección completa de la música que acompaña la serie, 
                                 permitiendo a los fans revivir las emociones y la atmósfera de Given. 
                                La música en Given no solo añade profundidad a la historia, sino que también se convierte en una
                                 parte integral de la experiencia emocional del anime. Te invitamos a escuchar estas canciones 
                                 para sumergirte aún más en el mundo de Given.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="musica-card">
                        <CardBody>
                            <CardTitle tag="h2" className="musica-subtitle">Temas de Apertura y Cierre:</CardTitle>
                            <ListGroup className="musica-list">
                                <ListGroupItem className="musica-list-item">Kizuato (傷跡)</ListGroupItem>
                                <ListGroupItem className="musica-list-item">Fuyu no Hanashi (冬の噺)</ListGroupItem>
                                <ListGroupItem className="musica-list-item">Yoru ga Akeru (夜が明ける)</ListGroupItem>
                                <ListGroupItem className="musica-list-item">Hetakuso (下手くそ)</ListGroupItem>
                                <ListGroupItem className="musica-list-item">Marutsuke (まっすぐ)</ListGroupItem>
                                <ListGroupItem className="musica-list-item">Koi no Uta (恋の唄)</ListGroupItem>
                                <ListGroupItem className="musica-list-item">嘘 (Uso)</ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

/* exportación */
export default Musica;
