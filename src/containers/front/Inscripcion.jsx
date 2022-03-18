import React from 'react';
import api from '../../api';

class Inscripcion extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            nombre: "",
            apellido: "", 
            email: "", 
            clave: ""
        }
    }


    handledSubmmit = e => {
        console.log(this.state)
        e.preventDefault(); 

        const data = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email, 
            clave: this.state.clave
        }

        api.post("/api/registrarAdmin",data)
        .then( res => console.log(res))
        .catch( err => console.log(err)); 
        console.log("debug 2 ")
    }

    NombresChange = e => {
        this.setState({
            nombre: e.target.value
        })
    }
    
    ApellidosChange = e => {
        this.setState({
            apellido: e.target.value
        })
    }

    EmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    passwordChange = e => {
        this.setState({
            clave: e.target.value
        })
    }

    render() {
        return(

            <div class="authincation h-100">
            <br />
            <br />
            <br />
            <br />
            <div class="container-fluid h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-md-6">
                        <div class="authincation-content">
                            <div class="row no-gutters">
                                <div class="col-xl-12">
                                    <div class="auth-form">
                                        <h4 class="text-center mb-4">INSCRIBIRME</h4>
                                        <form onSubmit={this.handledSubmmit}>
                                            <div class="form-group">
                                                <label><strong>Nombres</strong></label>
                                                <input type="text" className="form-control" placeholder="Nombre" onChange={this.NombresChange} />
                                            </div>
                                            <div class="form-group">
                                                <label><strong>Apellidos</strong></label>
                                                <input type="text" className="form-control" placeholder="Apellidos"  onChange={this.ApellidosChange}/>
                                            </div>
                                            <div class="form-group">
                                                <label><strong>Email</strong></label>
                                                <input type="email" className="form-control" placeholder="hello@example.com"  onChange={this.EmailChange}  />
                                            </div>
                                            <div class="form-group">
                                                <label><strong>Password</strong></label>
                                                <input type="password" className="form-control" placeholder='password' onChange={this.passwordChange} />
                                            </div>
                                            <div class="text-center mt-4">
                                                <button type="submit" className="btn btn-primary btn-block">Sign me up</button>
                                            </div>
                                        </form>
                                        <div class="new-account mt-3">
                                            <p>Already have an account? <a className="text-primary" href="page-login.html">Sign in</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

    }

}


export default Inscripcion; 