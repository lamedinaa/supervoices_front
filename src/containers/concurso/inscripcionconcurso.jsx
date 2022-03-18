import React, {useEffect, useState} from 'react'; 
import { useParams } from 'react-router';
import api from '../../api';



export const InscripcionConcurso = (props) => {

    const idconcurso = useParams().idconcurso;
    const [inscripcion,setInscripcion] = useState({});

    useEffect(() => {
        setInscripcion( prevState => {
            return { ...prevState, id_concurso: idconcurso }
        })
    },[])

    function handledSubmmit(e) {
        console.log("enviando formulario");
        e.preventDefault();
        console.log(inscripcion);
        envioInscripcion();    
    }



    const envioInscripcion = () => {


        const formdata = new FormData();

        console.log(inscripcion,'INSCRIPCION!!!!')


        formdata.append('id_concurso',inscripcion['id_concurso'])
        formdata.append('file',inscripcion["file"]);
        formdata.append('nombre',inscripcion['nombre']);
        formdata.append('apellido',inscripcion['apellido']);
        formdata.append('email',inscripcion['email']);
        formdata.append('observaciones',inscripcion['observaciones']);
        

        
        console.log(formdata,"arhcivo formdata")

        api.post('/api/locutores',formdata)
        .then( (response) => {
            console.log(response);
        })
        .catch( (error) => {
            console.log( error ) 
        })
    }

    function onChangeFile(e) {

        const file = e.target.files[0];
        setInscripcion( prevState => {
            return { ...prevState, file:file }
        });
        console.log(inscripcion,"hola");
    }

    function onChangeNombre(e) {
        setInscripcion(prevState => {
            return { ...prevState, nombre: e.target.value }
        })
    }

    function onChangeApellido(e) {
        setInscripcion(prevState => {
            return { ...prevState, apellido: e.target.value }
        })
    }

    function onChangeEmail(e) {
        setInscripcion(prevState => {
            return { ...prevState, email: e.target.value }
        })
    }

    function onChangeObservaciones(e) {
        setInscripcion(prevState => {
            return { ...prevState, observaciones: e.target.value }
        })
    }

    



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
                                    <h4 class="text-center mb-4">SUBIR MI VOZ</h4>
                                    <form onSubmit={handledSubmmit}>
                                        <div class="form-group">
                                            <label><strong>Nombres</strong></label>
                                            <input type="text" className="form-control" placeholder="Nombre" onChange={onChangeNombre} />
                                        </div>
                                        <div class="form-group">
                                            <label><strong>Apellidos</strong></label>
                                            <input type="text" className="form-control" placeholder="Apellidos" onChange={onChangeApellido} />
                                        </div>
                                        <div class="form-group">
                                            <label><strong>Email</strong></label>
                                            <input type="email" className="form-control" placeholder="hello@example.com"  onChange={onChangeEmail}  />
                                        </div>
                                        <div class="form-group">
                                            <label><strong>Observaciones</strong></label>
                                            <textarea class="form-control" id="val-suggestions" name="recomendaciones" rows="5" placeholder='Sube tus observaciones' onChange={onChangeObservaciones} ></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label><strong>Sube tu voz:</strong></label>
                                            <input type="file" className="form-control" name="file" onChange={(e) => {onChangeFile(e)}}  />
                                        </div>
                                        <br></br>
                                        <div class="text-center mt-4">
                                            <button type="submit" className="btn btn-primary btn-block">Sign me up</button>
                                        </div>
                                    </form>
                                    <div class="new-account mt-3">
                                        
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



export default InscripcionConcurso; 
