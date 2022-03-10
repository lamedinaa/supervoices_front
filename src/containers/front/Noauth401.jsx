import React from "react";
import {Container} from "react-bootstrap";


class Noauth401 extends React.Component{

    render(){
        return(
        <Container>
        <br></br>
        <br></br>
        <div class="authincation h-100">
            <div class="container-fluid h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-md-5">
                        <div class="form-input-content text-center">
                            <div class="mb-5">
                                <a class="btn btn-primary" href="/">Volver a inicio</a>
                            </div>
                            <h1 class="error-text font-weight-bold">400</h1>
                            <h4 class="mt-4"><i class="fa fa-thumbs-down text-danger"></i> Bad Request</h4>
                            <p>No se puede resolver su petición</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
            
        )
    }

}



export default Noauth401; 