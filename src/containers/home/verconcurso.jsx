import React, {useEffect, useState} from 'react'; 
import api from '../../api';
import { useParams } from 'react-router-dom';
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import {Table} from 'react-bootstrap' ; 

export const Verconcurso = (props) => {

    const idconcurso  = useParams().idconcurso;

    const [locutores,setLocutores] = useState([]);
    const [concurso,setConcurso] = useState({});
    const [dataisloaded,setDataloaded] = useState(false);

    useEffect(() => {
        getInfoConcurso();
        console.log(locutores,"locutores");
    },[]);

    const getInfoConcurso = () => {
        api.get('/api/registrarconcursos/'+idconcurso)
        .then((response) => {
          const Llocutores = response.data.locutores;
          const Lconcurso = response.data.concurso;
          setLocutores(Llocutores);
          setConcurso(Lconcurso);
          setDataloaded(true);
 
        })
    }

    function handleSubmmit(e){
        console.log("envio de formulario");
        e.preventDefault();
        changeConcurso()
    }

    const changeConcurso = () => {
        const data = concurso;
        api.put('/api/registrarconcursos/'+idconcurso,data)
        .then((response) => {
            
              console.log(response)  
        })
    }

    function onChangeNombreConcurso(e) {
        setConcurso( prevState =>  { return { ...prevState ,nombre:e.target.value} })
    }

    function onChangeUrl(e) {
        setConcurso(prevState => { return { ...prevState, url:e.target.value } })
    }

    function onChangePrecio(e) {
        setConcurso(prevState => { return { ...prevState, precio:e.target.value } })
    }

    function onChangeGuion(e) {
        setConcurso(prevState => { return { ...prevState, guion:e.target.value } })
    }

    function onChangeRecomendaciones(e) {
        setConcurso(prevState => { return { ...prevState, recomendaciones:e.target.value } })
    }

    function onChangeFechaInicio(e) {
        setConcurso(prevState => { return { ...prevState, fechainicio:e.target.value } })
    }

    function onCangeFechaFin(e) {
        setConcurso(prevState => { return { ...prevState, fechafin:e.target.value } })
    }

    return(
        <div class="row">
        <div class="col-lg-12">

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">VER Y EDITAR UN CONCURSO</h4>
                </div>
                <div class="card-body">
                    {dataisloaded?
                      <div class="form-validation">
                        <form class="form-valide" onSubmit={handleSubmmit}>
                            <div class="row">
                                    <div class="col-xl-6">
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-username"><b>Nombre concurso
                                                    <span class="text-danger">*</span></b> 
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="text" class="form-control" id="val-username" name="nombreconcurso"  value={concurso.nombre} onChange={onChangeNombreConcurso} />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-email"><b>URL</b> <span
                                                        class="text-danger">*</span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <textarea class="form-control" id="val-suggestions" name="recomendaciones" rows="5" value={concurso.url} onChange={onChangeUrl}></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-password"><b>valor</b>
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <input type="number" class="form-control" id="val-password" name="val-password" value={concurso.precio}  onChange={onChangePrecio} />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-4 col-form-label" for="val-confirm-password"><b>Guion</b> <span
                                                        class="text-danger">*</span>
                                                </label>
                                                <div class="col-lg-6">
                                                    <textarea class="form-control" id="val-suggestions" name="guion" rows="5" value={concurso.guion} onChange={onChangeGuion} ></textarea>
                                                </div>
                                            </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form-group row">
                                            <label class="col-lg-4 col-form-label" for="val-suggestions"><b>Recomendaciones</b>  <span
                                                    class="text-danger">*</span>
                                            </label>
                                            <div class="col-lg-6">
                                                <textarea class="form-control" id="val-suggestions" name="recomendaciones" rows="5" value={concurso.recomendaciones} onChange={onChangeRecomendaciones} ></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-4 col-form-label" for="val-currency"><b>FECHA INICIO:  </b>
                                                <span class="text-danger">*</span>
                                            </label>
                                            <div class="col-lg-6">
                                                {concurso.fechainicio}
                                                <input type="datetime-local" class="form-control" id="val-currency" name="fechainicio" value={concurso.fechainicio} onChange={onChangeFechaInicio} />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-4 col-form-label" for="val-website"><b>FECHA FIN:</b>  
                                                <span class="text-danger">*</span>
                                            </label>
                                            <div class="col-lg-6">
                                                {concurso.fechafin}
                                                <input type="datetime-local" class="form-control" id="val-website" name="fechafin" value={concurso.fechafin} onChange={onCangeFechaFin}/>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-lg-8 ml-auto">
                                                <button type="submit" class="btn btn-primary">EDITAR</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </form>
                    </div>:
                    <h1>Cargando datos ...</h1>
                    }
                </div>
            </div>

            <div className='card'>
                <div class="card-header">
                        <h4 class="card-title">LISTA DE LOCUTORES</h4>
                </div>
                <div class="card-body">
                        <div className="table-responsive">
                            <Table >
                            <thead>
                                <tr>
                                <th> <b>NOMBRE</b> </th>
                                <th>APELLIDO</th>
                                <th>EMAIL</th>
                                <th>Observaciones</th>
                                <th>Nombre de archivo</th>
                                <th>Estado de archivo</th>
                                <th>Fecha de creación</th>
                                <th>Descargar voz</th>
                                </tr>
                            </thead>
                            <tbody>
                                { !dataisloaded?
                                    <h1>Cargando</h1>:
                                    locutores.map(locutor => {
                                        return(
                                            <tr key={locutor.id}>
                                                <td>{locutor.nombre}</td>
                                                <td>{locutor.apellido}</td>
                                                <td>{locutor.email}</td>
                                                <td>{locutor.observaciones}</td>
                                                <td>{locutor.nombreArchivo}</td>
                                                <td>{locutor.convertido==0?"sin convertir":"convertido mp3"}</td>
                                                <td>{locutor.fechacreacion}</td>
                                                <td>{locutor.convertido==0? "sin convertir" :"https://d3mvngqjtj76ft.cloudfront.net/mp3/"+locutor.nombreArchivo}</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                            </Table>
                        </div>

                </div>
            </div>
        </div>
        
    </div>
                
    ) 


}
 


export default Verconcurso;