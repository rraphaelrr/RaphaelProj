import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import Object from '../../constants/Objetos';
import '../../style/style.scss'



function Header() {
    return (

        <section className="header" id='header'>
            <header>
                <Container>
                    <Row>
                        <Col>
                            <h5>Raphael Souza Rodrigues</h5>
                        </Col>
                        
                    </Row>

                </Container>
            </header>
        </section>

    )
}

export default Header;

