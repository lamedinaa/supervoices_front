import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './header';
import Slidebarleft from './slidebarleft';

const Layouthome = (props) => (

    <div>


            <Header removeToken={props.removeToken} />
            <Slidebarleft />
            <div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles mx-0">
                    <div class="col-sm-6 p-md-0">
                        <div class="welcome-text">
                            <h4>Hola Bienvenido!</h4>
                            <span class="ml-1"></span>
                        </div>
                    </div>
                    <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Table</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0)">Datatable</a></li>
                        </ol>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>    
    </div>

)

export default Layouthome;