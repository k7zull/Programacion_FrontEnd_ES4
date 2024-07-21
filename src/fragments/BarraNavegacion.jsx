import React from 'react';
import { Col, Nav, NavItem, NavLink } from "reactstrap";

/* view: component */
function BarraNavegacion({ setMenu, handleChangeMenuDestacado, handleChangeMenuPersonaje, handleChangeMenuEncuesta }) {
    return (
        <>
            <Col md="12" xs="12" className="d-flex justify-content-between align-items-center">
                <Nav pills>
                    <NavItem>
                        <NavLink href="#" onClick={() => setMenu('inicio')}>
                            Inicio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={handleChangeMenuDestacado}>
                            Destacados
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={handleChangeMenuPersonaje}>
                            Personajes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={handleChangeMenuEncuesta}>
                            Encuesta
                        </NavLink>
                    </NavItem>
                </Nav>
                <img src='src/assets/img/Given_logo.png' alt="Given_logo" style={{ height: 'auto' , width: '105px'}} /> 
            </Col>
        </>
    )
}

/* exportación */
export default BarraNavegacion;
