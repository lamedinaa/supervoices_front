import React from "react";
import {Outlet} from 'react-router-dom';
import Header from "../layout_home/header";
import Headerconcurso from "./headerconcurso";
import Footerconcurso from "./footerconcurso";


const Layoutconcurso = ({children}) =>(
    <div>

        <Headerconcurso />
         <Outlet />
         <Footerconcurso />
        

    </div> 
)

export default Layoutconcurso;