import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, Button } from 'reactstrap';
import './musica.css';

/* view */
function Musica() {
    
    const songLinks = {
        "Kizuato (傷跡)": "https://youtu.be/e6uOkHm8vcQ",
        "Fuyu no Hanashi (冬の噺)": "https://youtu.be/nnmb1GXqz60",
        "Yoru ga Akeru (夜が明ける)": "https://youtu.be/_UE3NNYOAxs",
        "Hetakuso (下手くそ)": "https://youtu.be/fPaDNJlTtqo",
        "Marutsuke (まっすぐ)": "https://youtu.be/ZzOuunm6Vow",
        "Uragawa no sonzai": "https://youtu.be/IQx36UHWi10",
        "Stagekara kiminisasagu (ステージから君に捧ぐ)": "https://youtu.be/AnuwZodrF8s"
    };

    return (
        <Container className="musica-container">
            <Row>
                <Col sm="7" className='musica-inicio'>
                   <strong> &#60;&#60; La música es una parte fundamental de Given, y su banda sonora complementa perfectamente la narrativa y el tono emocional del anime. &#62;&#62;</strong>
                    <Card className="musica-card">
                        <CardBody>
                            <CardTitle tag="h2" className="musica-subtitle"><strong>"Given" (Banda Sonora Original)</strong><br /></CardTitle>
                            <CardText className="musica-text">
                                El álbum incluye todas las canciones interpretadas por la banda dentro del anime, así como los temas de apertura y cierre. Es una colección completa de la música que acompaña la serie, permitiendo a los fans revivir las emociones y la atmósfera de Given.
                                La música en Given no solo añade profundidad a la historia, sino que también se convierte en una parte integral de la experiencia emocional del anime.
                            </CardText>
                        </CardBody>
                    </Card>
                    <img className='imagenMusica' src="src/assets/img/givenEnd.png" alt="givenEnd" />
                </Col>
                <Col sm="5">
                    <Card className="musica-card">
                        <CardBody>
                            <CardTitle tag="h2" className="musica-subtitle">Temas de Apertura y Cierre:</CardTitle>
                            <ListGroup className="musica-list">
                                {Object.keys(songLinks).map(song => (
                                    <ListGroupItem key={song} className="musica-list-item">
                                        {song}
                                        <Button 
                                            color="primary" 
                                            className="musica-button"
                                            onClick={() => window.open(songLinks[song], "_blank")}
                                        >
                                            Ver Video
                                        </Button>
                                    </ListGroupItem>
                                ))}
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
