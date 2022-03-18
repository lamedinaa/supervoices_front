import React, { useEffect, useState } from 'react';
// import { DateTime } from 'react-datetime-bootstrap';
import { Button, Container, Form, Row, Col,Card,Jumbotron } from 'react-bootstrap';
import api from '../../api';
import {Link,useParams} from 'react-router-dom';



export const Landingpageconcurso = (props) => {
    

     const nombreconcurso = useParams().nombreconcurso
     const idconcurso = useParams().idconcurso

     const [existeconcurso,setExisteConcurso] = useState(false)
    

     console.log(nombreconcurso,"NOMBRECONCURSO");
     console.log(idconcurso,"idconcurso");

     useEffect(() => {
        getConfirmarConcurso();
     })

     const getConfirmarConcurso = () => {
       const data  = {"id_concurso": idconcurso, "nombre": nombreconcurso}
       api.post("/api/consultaconcurso",data)
       .then( (response) => {
         console.log(response.data)
         if(response.data.concurso == "true"){
            setExisteConcurso(true);
         }else{
            setExisteConcurso(false);
         }

         console.log(existeconcurso,"existe concurso")

       }).catch( (error) => {
         console.log(error);
       })
     }

     return(
    <Container>
        {existeconcurso?
        
        <Row>
            <div class="container-fluid bg-light text-dark p-5">
              <div class="container bg-light p-5">
                <h1 class="display-4 fw-bold">Bienvenido a tu concurso</h1>
                <hr />
                  <Container>
                    <Row>
                      <Col>
                        <Card style={{ width: '15rem' }}>
                          
                          <Card.Body>
                            <Card.Title>Sube tu voz</Card.Title>
                            <Card.Text>
                                Acá puede subir tu voz 
                            </Card.Text>
                            
                            <Link to={"inscripcion"}> <button type="button" class="btn btn-primary">SUBIR VOZ</button> </Link>
                        </Card.Body>
                      </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '15rem' }}>
                          
                          <Card.Body>
                            <Card.Title>Recomendaciones</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                      </Card>
                      </Col>
                      <Col>
                        <Card style={{ width: '15rem' }}>
                          <Card.Body>
                            <Card.Title>Guion</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                      </Card>
                      </Col>

                    </Row>

                  </Container>
              </div>
            </div>
        </Row>

      :
      <h1>Upss no encontramos un concurso con ese nombre</h1>     
      }
      </Container>

    
     )




}


export default Landingpageconcurso;
