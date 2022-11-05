import React from 'react';
import Header from './components/header/header';
import Routing from './routes/route';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'react-bootstrap';
import Footer from './components/footer/footer';


function App() {
  document.title = "Raphael Souza Rodrigues"
  return (
    <div className='App'>
      <Container fluid>
        <Row >
          <Header />
        </Row>
        
        <Row>
          <Routing />
        </Row>
        <Row >
          <Footer />
        </Row>
      </Container>
    </div>
  )
}
export default App;