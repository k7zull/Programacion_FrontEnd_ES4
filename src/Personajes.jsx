import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './personajes.css'
const characters = [
  {
    name: "Mafuyu Sato",
    description: "Vocalista de la banda con una voz única que impacta a todos. A pesar de su talento, Mafuyu lucha con un pasado doloroso y el duelo por una pérdida significativa. Su viaje personal es central en la trama, y su interacción con la banda le ayuda a encontrar una forma de sanar."
  },
  {
    name: "Ritsuka Uenoyama",
    description: "El carismático guitarrista de la banda. A primera vista, puede parecer distante y concentrado en su música, pero su pasado y sus inseguridades están profundamente entrelazados con su vida actual. Su desarrollo a lo largo de la serie muestra cómo aprende a abrirse a los demás y a confrontar sus propios sentimientos."
  },
  {
    name: "Akihiko Kaji",
    description: "El baterista de la banda y un amigo cercano de Ritsuka. Con una personalidad relajada pero protectora, Akihiko ofrece una perspectiva diferente sobre la vida y el amor, proporcionando tanto humor como apoyo emocional a sus compañeros."
  },
  {
    name: "Haruki Nakayama",
    description: "El bajista de la banda, conocido por su naturaleza calmada y su actitud comprensiva. Haruki actúa como el pilar de apoyo para los demás miembros, ayudando a mantener la cohesión del grupo mientras lidia con sus propios problemas personales."
  },
  {
    name: "Ugetsu Murata",
    description: "Ugetsu es un músico talentoso que a menudo viaja al extranjero desde Japón y es el exnovio de Akihiko. Conoció a Akihiko en la escuela secundaria y comenzó una relación intermitente con él. Comparte sus sentimientos, que pueden cambiar de ser amigable y abierto a irritarse cuando se siente estresado."
  },
  {
    name: "Hiiragi Kashima",
    description: "Amigo de la infancia de Mafuyu, estuvo en una banda con Yuki Yoshida y Shizusumi Yagi. Al encontrar a Mafuyu años después, Hiiragi se pregunta por qué tiene la guitarra de Yuki. Conoce la relación entre Mafuyu y Yuki y busca a Mafuyu nuevamente para discutir eventos pasados. Está en una relación con Shizusumi."
  },
  {
    name: "Shizusumi Yagi",
    description: "Al igual que Hiiragi, era amigo de Mafuyu. Tocaba la batería en una banda. Está en una relación con Hiiragi."
  },
  {
    name: "Yuki Yoshida",
    description: "Novio de Mafuyu antes de fallecer."
  },
  {
    name: "Ayano Kasai",
    description: "Está en la misma clase que Ritsuka y a menudo intenta hablar con él. Kasai hace preguntas incisivas sobre la amistad de Ritsuka y Mafuyu, esto lo hace por curiosidad y, aunque tiene poca simpatía por el lado de Mafuyu, Kasai se siente molesta por cómo actuó alrededor de Ritsuka ya que tiene sentimientos por él."
  },
  {
    name: "Yayoi Uenoyama",
    description: "Hermana mayor de Ritsuka con la que creció y vive. Está saliendo con Akihiko y asiste a las presentaciones de la banda."
  },
  {
    name: "Kedama",
    description: "También conocido como \"Tama\", es un pomerania blanco que vive con Mafuyu. Kedama es vivaz y disfruta estar con la gente."
  }
];

function Personajes() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Personajes</h2>
      <Row>
        {characters.map((character, index) => (
          <Col md="6" key={index} className="mb-4">
            <Card>
              <CardBody>
                <CardTitle tag="h3">{character.name}</CardTitle>
                <CardText>{character.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Personajes;
