import React from "react";
import {Outlet} from 'react-router-dom';
import Header from "../layout_home/header";
import Headerfront  from "./Headerfront";
import Footerfront  from "./Footerfront";

const Layoutfront = ({children}) =>(
    <div>

        <Headerfront />
         <Outlet />
        <Footerfront />

    </div> 
)

export default Layoutfront;