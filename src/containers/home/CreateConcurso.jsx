import React from 'react';
import {Table} from 'react-bootstrap'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import api from '../../api';


class Createconcurso extends React.Component{

    constructor(props) {

        super(props);
        this.state = {
            administrador_id: localStorage.getItem("usuario_id"),
            nombreconcurso: "",
            url: "",
            valor:"",
            guion:"",
            recomendaciones:"",
            fechainicio:"",
            fechafin:"",
            fechacreacion:""
        }
    }

    onNombreChange = e => {
        
        this.setState({
            nombreconcurso: e.target.value
        })
    }

    onUrlChange = e => {
        this.setState({
            url: e.target.value
        })
    }

    onValorChange = e => {
        this.setState({
            valor: e.target.value
        })
    }

    onGuionChange = e => {
        this.setState({
            guion: e.target.value
        })
    }

    onRecomendacionesChange = e => {
        this.setState({
            recomendaciones: e.target.value
        })
    }

    onFechaInicioChange = e => {
        console.log(e.target.value)
        this.setState({
            fechainicio: e.target.value
        })
    }

    onFechaFinChange = e => {
        console.log(e.target.value)
        this.setState({
            fechafin: e.target.value
        })
    }



    handleSubmit = e =>{
        console.log(this.state); 
        
        e.preventDefault();

        const data = {
            administrador_id: this.state.administrador_id,
            nombreconcurso: this.state.nombreconcurso, 
            url: this.state.url,
            valor: this.state.valor,
            guion: this.state.guion,
            recomendaciones: this.state.recomendaciones,
            fechainicio: this.state.fechainicio,
            fechafin: this.state.fechafin,
            fechacreacion: this.state. fechacreacion
        };

        api.post("/api/registrarConcursos",data)
        .then(res => console.log(res))
        .catch(err => console.log(err)); 
    }


  render(){
     return(
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Crea un concurso</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-validation">
                                    <form class="form-valide" onSubmit={this.handleSubmit}>
                                        

                                        <div class="row">
                                            
                                                <div class="col-xl-6">
                                                        <div class="form-group row">
                                                            <label class="col-lg-4 col-form-label" for="val-username"><b>Nombre concurso
                                                                <span class="text-danger">*</span></b> 
                                                            </label>
                                                            <div class="col-lg-6">
                                                                <input type="text" class="form-control" id="val-username" name="nombreconcurso" onChange={this.onNombreChange} placeholder="ingresa el nombre de tu concurso.."  />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-lg-4 col-form-label" for="val-email"><b>URL</b> <span
                                                                    class="text-danger">*</span>
                                                            </label>
                                                            <div class="col-lg-6">
                                                                <input type="text" class="form-control" id="val-email" name="url" onChange={this.onUrlChange} placeholder="ingresa url de tu concurso.." />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-lg-4 col-form-label" for="val-password"><b>valor</b>
                                                                <span class="text-danger">*</span>
                                                            </label>
                                                            <div class="col-lg-6">
                                                                <input type="number" class="form-control" id="val-password" name="val-password" placeholder="valor" onChange={this.onValorChange} />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-lg-4 col-form-label" for="val-confirm-password"><b>Guion</b> <span
                                                                    class="text-danger">*</span>
                                                            </label>
                                                            <div class="col-lg-6">
                                                                <textarea class="form-control" id="val-suggestions" name="guion" rows="5" placeholder="Escribe el guion.." onChange={this.onGuionChange}></textarea>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="form-group row">
                                                        <label class="col-lg-4 col-form-label" for="val-suggestions"><b>Recomendaciones</b>  <span
                                                                class="text-danger">*</span>
                                                        </label>
                                                        <div class="col-lg-6">
                                                            <textarea class="form-control" id="val-suggestions" name="recomendaciones" rows="5" placeholder="Escribe las recomendaciones.." onChange={this.onRecomendacionesChange}></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-4 col-form-label" for="val-currency"><b>Fecha de inicio</b>
                                                            <span class="text-danger">*</span>
                                                        </label>
                                                        <div class="col-lg-6">
                                                            <input type="datetime-local" class="form-control" id="val-currency" name="fechainicio" onChange={this.onFechaInicioChange}/>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-4 col-form-label" for="val-website"><b>Fecha fin</b>
                                                            <span class="text-danger">*</span>
                                                        </label>
                                                        <div class="col-lg-6">
                                                            <input type="datetime-local" class="form-control" id="val-website" name="fechafin" onChange={this.onFechaFinChange}/>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <div class="col-lg-8 ml-auto">
                                                            <button type="submit" class="btn btn-primary">CREAR</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
     )

  }


}


export default Createconcurso;