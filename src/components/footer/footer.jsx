import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import Object from '../../constants/Objetos';
import '../../style/style.scss'



function Footer() {
    return (

        <section className="footer" id='header'>
            <header>
                <Container>
                    <Row>
                        <Col>
                            <p>&copy; Raphael Souza Rodrigues</p>
                        </Col>
                        
                    </Row>

                </Container>
            </header>
        </section>

    )
}

export default Footer;

