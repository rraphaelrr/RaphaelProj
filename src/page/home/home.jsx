import React, { Component } from 'react';
import '../../style/style.scss'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import Objetos from '../../constants/Objetos';


class Home extends React.Component {
    constructor(props) {
        super(props);

    }





    render() {
        return (

            <section className='home'>
                <Container>
                    <main className='headerHome'>
                        <Row>
                            <Col md='6' sm='12'>
                                {Objetos.imgHomeTOp}
                            </Col>
                            <Col md='6' sm='12'>
                                <Row>
                                    <Col md='12' sm='12'>
                                        <h6>Lorem Ipsum</h6>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md='8' sm='12'>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Phasellus sed ligula quam.
                                            Integer rhoncus nulla sit amet nisi molestie hendrerit.
                                            In lectus nibh, tempor a laoreet quis,
                                            luctus non dui. </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='12' sm='12'>
                                        <Button value="GitHub" onClick={() => window.open('https://github.com/rraphaelrr', '_blank')}> GitHub</Button>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </main>
                    <main className='secondSection'>
                        <Row>

                            <Col md='12' sm='12'>
                                <Row>
                                    <Col md='12' sm='12'>
                                        <h6>Lorem Ipsum</h6>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md='8' sm='12'>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Phasellus sed ligula quam.
                                            Integer rhoncus nulla sit amet nisi molestie hendrerit.
                                            In lectus nibh, tempor a laoreet quis,
                                            luctus non dui. </p>
                                    </Col>
                                </Row>
                                <Row>
                                   
                                </Row>
                            </Col>
                           
                        </Row>
                    </main>

                </Container>


            </section>

        )

    }
}

export default Home;