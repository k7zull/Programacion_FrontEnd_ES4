import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import './personajes.css';

function Personajes() {
  const personajes = [
    {
      nombre: "Mafuyu Sato",
      descripcion: "Vocalista de la banda con una voz única que impacta a todos. A pesar de su talento, Mafuyu lucha con un pasado doloroso y el duelo por una pérdida significativa. Su viaje personal es central en la trama, y su interacción con la banda le ayuda a encontrar una forma de sanar.",
      imagen: "src/assets/img/imgPers/mafuyu.png",
      imagenHover: "src/assets/img/imgPers/mafuyuManga.png"
    },
    {
      nombre: "Ritsuka Uenoyama",
      descripcion: "El carismático guitarrista de la banda. Parecer distante y concentrado en su música, pero su pasado y sus inseguridades están profundamente entrelazados con su vida actual. Su desarrollo a lo largo de la serie muestra cómo aprende a abrirse a los demás y a confrontar sus propios sentimientos.",
      imagen: "src/assets/img/imgPers/uenoyama.png",
      imagenHover: "src/assets/img/imgPers/uenoyamaManga.png"
    },
    {
      nombre: "Akihiko Kaji",
      descripcion: "El baterista de la banda y un amigo cercano de Ritsuka. Con una personalidad relajada pero protectora, Akihiko ofrece una perspectiva diferente sobre la vida y el amor, proporcionando tanto humor como apoyo emocional a sus compañeros.",
      imagen: "src/assets/img/imgPers/akihiko.png",
      imagenHover: "src/assets/img/imgPers/akihikoManga.png"
    },
    {
      nombre: "Haruki Nakayama",
      descripcion: "El bajista de la banda, conocido por su naturaleza calmada y su actitud comprensiva. Haruki actúa como el pilar de apoyo para los demás miembros, ayudando a mantener la cohesión del grupo mientras lidia con sus propios problemas personales.",
      imagen: "src/assets/img/imgPers/haruki.png",
      imagenHover: "src/assets/img/imgPers/harukiManga.png"
    },
    {
      nombre: "Ugetsu Murata",
      descripcion: "Ugetsu es un músico talentoso que a menudo viaja al extranjero desde Japón y es el exnovio de Akihiko. Comparte sus sentimientos, que pueden cambiar de ser amigable y abierto a irritarse cuando se siente estresado.",
      imagen: "src/assets/img/imgPers/ugetsu.png",
      imagenHover: "src/assets/img/imgPers/ugetsuManga.png"
    },
    {
      nombre: "Hiiragi Kashima",
      descripcion: "Amigo de la infancia de Mafuyu, estuvo en una banda con Yuki Yoshida y Shizusumi Yagi. Al encontrar a Mafuyu años después, Hiiragi se pregunta por qué tiene la guitarra de Yuki.",
      imagen: "src/assets/img/imgPers/hiiragi.png",
      imagenHover: "src/assets/img/imgPers/hiiragiManga.png"
    },
    {
      nombre: "Shizusumi Yagi",
      descripcion: "Al igual que Hiiragi, era amigo de Mafuyu. Tocaba la batería en una banda.",
      imagen: "src/assets/img/imgPers/shizusumi.png",
      imagenHover: "src/assets/img/imgPers/shizusumiManga.png"
    },
    {
      nombre: "Yuki Yoshida",
      descripcion: "Novio de Mafuyu antes de fallecer.",
      imagen: "src/assets/img/imgPers/yuki.png",
      imagenHover:"src/assets/img/imgPers/yukiManga.png"
    },
    {
      nombre: "Ayano Kasai",
      descripcion: "Está en la misma clase que Ritsuka y a menudo intenta hablar con él. Aunque tiene poca simpatía por el lado de Mafuyu, Kasai se siente molesta por cómo actuó alrededor de Ritsuka ya que tiene sentimientos por él.",
      imagen: "src/assets/img/imgPers/ayano.png",
      imagenHover:"src/assets/img/imgPers/ayanoManga.png"
    },
    {
      nombre: "Yayoi Uenoyama",
      descripcion: "Hermana mayor de Ritsuka con la que creció y vive. Está saliendo con Akihiko y asiste a las presentaciones de la banda.",
      imagen: "src/assets/img/imgPers/yayoi.png",
      imagenHover:"src/assets/img/imgPers/yayoiManga.png"
    },
    {
      nombre: "Kedama",
      descripcion: "También conocido como \"Tama\", es un pomerania blanco que vive con Mafuyu. Kedama es vivaz y disfruta estar con la gente.",
      imagen: "src/assets/img/imgPers/kadema.png",
      imagenHover: "src/assets/img/imgPers/kademaManga.png"
    }
  ]

  return (
    <Container className="personajes-container">
      <Row>
        {personajes.map((personaje, index) => (
          <Col sm="6" md="4" lg="3" key={index} className="mb-4">
            <Card className="personaje-card">
              <div className="personaje-img-container">
                <CardImg top width="100%" src={personaje.imagen} alt={personaje.nombre} className="personaje-img" />
                <CardImg top width="100%" src={personaje.imagenHover} alt={`${personaje.nombre} hover`} className="personaje-img-hover" />
              </div>
              <CardBody>
                <CardTitle tag="h5" className="personaje-title">{personaje.nombre}</CardTitle>
                <CardText className="personaje-description">{personaje.descripcion}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Personajes;
