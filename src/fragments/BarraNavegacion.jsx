import React, { useState } from 'react';
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import './barraNav.css';

/* view: component */
function BarraNavegacion({ setMenu, handleChangeMenuInfo, handleChangeMenuPersonaje,handleChangeMenuMusica, handleChangeMenuEncuesta }) {
    const [activeTab, setActiveTab] = useState('inicio');

    const handleTabClick = (tab) => {
        setActiveTab(tab)
        if (tab === 'inicio') setMenu('inicio')
        else if (tab === 'info') handleChangeMenuInfo()
        else if (tab === 'personaje') handleChangeMenuPersonaje()
        else if (tab === 'musica') handleChangeMenuMusica()
        else if (tab === 'encuesta') handleChangeMenuEncuesta();
    }

    return (
        <>
            <Col md="12" xs="12" className="d-flex justify-content-between align-items-center">
                <Nav pills className='barraNavegacion'>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={activeTab === 'inicio' ? 'active' : ''}
                            onClick={() => handleTabClick('inicio')}
                        >
                            Inicio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={activeTab === 'info' ? 'active' : ''}
                            onClick={() => handleTabClick('info')}
                        >
                            Info
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={activeTab === 'personaje' ? 'active' : ''}
                            onClick={() => handleTabClick('personaje')}
                        >
                            Personajes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={activeTab === 'musica' ? 'active' : ''}
                            onClick={() => handleTabClick('musica')}
                        >
                            Musica
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            href="#" 
                            className={activeTab === 'encuesta' ? 'active' : ''}
                            onClick={() => handleTabClick('encuesta')}
                        >
                            Encuesta
                        </NavLink>
                    </NavItem>
                </Nav>
                <img src='src/assets/img/Given_logo.png' alt="Given_logo" /> 
            </Col>
        </>
    );
}

/* exportación */
export default BarraNavegacion;
