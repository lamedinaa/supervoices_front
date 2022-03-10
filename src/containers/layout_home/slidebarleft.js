import React from 'react';

class Slidebarleft extends React.Component{


  render(){
     return(
                                <div class="quixnav">
                                <div class="quixnav-scroll">
                                    <ul class="metismenu" id="menu">
                                        <li class="nav-label first">Main Menu</li>
                                        <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                                    class="icon icon-single-04"></i><span class="nav-text">Dashboard</span></a>
                                            <ul aria-expanded="false">
                                                <li><a href="/home">Lista de concursos</a></li>
                                                <li><a href="/home/createconcurso">Crear concurso</a></li></ul>    
                                        </li>
                                    </ul>
                                </div>
                            </div>



            )

  }


}


export default Slidebarleft;


