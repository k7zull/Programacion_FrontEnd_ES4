import { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, ListGroup, ListGroupItem, Alert, Card, CardBody, CardTitle } from 'reactstrap';
import './encuesta.css';

function Encuesta() {
  const [items, setItems] = useState([]);
  const [nuevoItem, setNuevoItem] = useState({ clave1: '', clave2: '', clave3: false, clave4: '' });
  const [editandoItem, setEditandoItem] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const itemsAlmacenados = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(itemsAlmacenados);
    console.log("Items cargados desde localStorage:", itemsAlmacenados);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevoItem(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAgregarItem = () => {
    if (items.find(item => item.clave1 === parseInt(nuevoItem.clave1))) {
      setMessage({ type: 'error', text: 'El ID ingresado ya existe. Por favor, ingresa otra.' });
      return;
    }

    const nuevoItemObj = { ...nuevoItem, clave1: parseInt(nuevoItem.clave1) };
    const nuevoArreglo = [...items, nuevoItemObj];
    localStorage.setItem("items", JSON.stringify(nuevoArreglo));
    setItems(nuevoArreglo);
    setNuevoItem({ clave1: '', clave2: '', clave3: false, clave4: '' });
    setMessage({ type: 'success', text: 'Item añadido exitosamente.' });
  };

  const handleEliminarItem = (clave1) => {
    const resultadosEliminados = items.filter(item => item.clave1 !== clave1);
    localStorage.setItem("items", JSON.stringify(resultadosEliminados));
    setItems(resultadosEliminados);
    setMessage({ type: 'success', text: 'Item eliminado exitosamente.' });
  };

  const handleEditarItem = (item) => {
    setEditandoItem(item);
    setNuevoItem({ ...item });
  };

  const handleGuardarEdicion = () => {
    const itemsActualizados = items.map(item =>
      item.clave1 === editandoItem.clave1 ? nuevoItem : item
    );
    localStorage.setItem("items", JSON.stringify(itemsActualizados));
    setItems(itemsActualizados);
    setEditandoItem(null);
    setNuevoItem({ clave1: '', clave2: '', clave3: false, clave4: '' });
    setMessage({ type: 'success', text: 'Item editado exitosamente.' });
  };

  const handleCancelarEdicion = () => {
    setEditandoItem(null);
    setNuevoItem({ clave1: '', clave2: '', clave3: false, clave4: '' });
  };

  return (
    <Container className="encuesta-container">
      <Row>
        <Col sm="6">
          <Card className="card-custom">
            <CardBody className="card-body-custom">
              <CardTitle tag="h5" className="card-title-custom">Encuesta Rapida</CardTitle>
              <Form onSubmit={(e) => e.preventDefault()}>
                <FormGroup className="encuesta-form-group-custom">
                  <Label for="clave1" className="encuesta-label-custom">Id de comentario</Label>
                  <Input
                    type="number"
                    value={nuevoItem.clave1}
                    onChange={handleChange}
                    name="clave1"
                    className="encuesta-input-custom"
                  />
                </FormGroup>
                <FormGroup className="encuesta-form-group-custom">
                  <Label for="clave2" className="encuesta-label-custom">Nombre</Label>
                  <Input
                    type="text"
                    value={nuevoItem.clave2}
                    onChange={handleChange}
                    name="clave2"
                    className="encuesta-input-custom"
                  />
                </FormGroup>
                <FormGroup className="encuesta-form-group-custom">
                  <Label for="clave3" className="encuesta-label-custom">¿Te gustaron las canciónes?</Label>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={nuevoItem.clave3}
                        onChange={handleChange}
                        name="clave3"
                        className="encuesta-input-custom"
                      />{' '}
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup className="encuesta-form-group-custom">
                  <Label for="clave4" className="encuesta-label-custom">Comentario final</Label>
                  <Input
                    type="text"
                    value={nuevoItem.clave4}
                    onChange={handleChange}
                    name="clave4"
                    className="encuesta-input-custom"
                  />
                </FormGroup>
                {editandoItem ? (
                  <>
                    <Button color="primary" onClick={handleGuardarEdicion} className="encuesta-button-custom">Guardar Cambios</Button>
                    <Button color="secondary" onClick={handleCancelarEdicion} className="encuesta-button-custom">Cancelar</Button>
                  </>
                ) : (
                  <Button color="primary" onClick={handleAgregarItem} className="encuesta-button-custom">Añadir Item</Button>
                )}
              </Form>
              <hr />
              {message.text && (
                <Alert color={message.type === 'success' ? 'success' : 'danger'} className={`message-custom ${message.type}`}>
                  {message.text}
                </Alert>
              )}
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="card-custom">
            <CardBody className="card-body-custom">
              <CardTitle tag="h5" className="card-title-custom">Lista de Comentarios</CardTitle>
              <ListGroup className="encuesta-list-group-custom">
                {items.map((item) => (
                  <ListGroupItem key={item.clave1} className="encuesta-list-item-custom">
                    <span><br></br><strong>ID :</strong> {item.clave1} <br></br><strong>Nombre :</strong> {item.clave2} <br></br><strong>Gusto por las canciones :</strong> {item.clave3 ? 'Sí' : 'No'} <br></br><strong>Comentario :</strong> {item.clave4}</span>
                    <div>
                      <Button size="sm" onClick={() => handleEditarItem(item)} className="encuestaEditar-button-custom">Editar</Button>
                      <Button size="sm" onClick={() => handleEliminarItem(item.clave1)} className="encuestaEliminar-button-custom">Eliminar</Button>
                    </div>
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

export default Encuesta;
