import React from 'react';
import {Table} from 'react-bootstrap'
import api from '../../api';


class home extends React.Component{

  constructor(props) {
    super(props); 
    console.log("tengo el token????")
    console.log(props.token)
    console.log("hay por dios")
    this.state = {
      data_concursos: [],
      DataisLoaded: false
    }
  }


  componentDidMount() {
    console.log("haciendo component")
    console.log(localStorage.getItem("usuario_id"))
    const data = {
      usuario_id: localStorage.getItem("usuario_id")
    }
    console.log(data)
    api.post("/api/admin",data)
    .then((response) => {
      console.log("response: "); 
      console.log(response.data.concursos)
      this.setState({data_concursos: response.data.concursos, DataisLoaded: true})
    })
      .catch(function(error) {
      console.log("erororornonronronron")
      console.log(error)
    });

}



  render(){
     return(
      <div class="row">
          <div class="col-12">
              <div class="card">
                  <div class="card-header">
                      <h4 class="card-title">Lista de concursos</h4>
                  </div>
                  <div class="card-body">
                    <div className="table-responsive">
                        <Table >
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>NOMBRE</th>
                              <th>VALOR</th>
                              <th>GUION</th>
                              <th>FECHA INICIO</th>
                              <th>FECHA FIN</th>
                              <th>ACCIONES</th>
                            </tr>
                          </thead>
                          <tbody>

                            { !this.state.DataisLoaded?
                              <h1>Descargando...</h1>
                            :this.state.data_concursos.map(concurso => {
                              return(
                                  <tr key={concurso.id}>
                                    <td>{concurso.id}</td>
                                    <td>{concurso.nombre}</td>
                                    <td>{concurso.valor}</td>
                                    <td>{concurso.guion}</td>
                                    <td>{concurso.fechainicio}</td>
                                    <td>{concurso.fechafin}</td>
                                    <td></td>
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


}


export default home