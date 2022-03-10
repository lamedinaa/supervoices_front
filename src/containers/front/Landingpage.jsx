import React from 'react';
// import { DateTime } from 'react-datetime-bootstrap';
import { Button, Container, Form, Row, Col,Card,Jumbotron } from 'react-bootstrap';
import api from '../../api';



class Landingpage extends React.Component{

  render(){
     return(
      <Container>
        <Row>
            <div class="container-fluid bg-light text-dark p-5">
              <div class="container bg-light p-5">
                <h1 class="display-4 fw-bold">Bienvenidos a Supervoices</h1>
                <hr />
                  <Container>
                    <Row>
                      <Col>
                        <Card style={{ width: '15rem' }}>
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '15rem' }}>
                          
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '15rem' }}>
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                      </Col>

                    </Row>

                  </Container>
              </div>
            </div>
        </Row>

      </Container>
    
     )

  }


}


export default Landingpage
