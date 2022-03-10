import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from '../containers/front/Landingpage';
import Dashboard from '../containers/home/Dashboard';
import Layoutfront from '../containers/layout_front/Layoutfront'
import Layouthome from '../containers/layout_home/Layouthome';
import Inscripcion from '../containers/front/Inscripcion';
import Login from '../containers/front/login';
import CreateConcurso from '../containers/home/CreateConcurso';
import useToken from '../containers/home/useToken';
import Noauth401 from '../containers/front/Noauth401';


function App(){

    const {token,removeToken,setToken} = useToken()

    return(
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Layoutfront />}>
                <Route index element={<Landingpage />}></Route>
                <Route path="inscripcion" element={<Inscripcion />}></Route>
                <Route path="login" element={<Login setToken={setToken} />}></Route>
            </Route>
        </Routes>
        
        {!token && token!=="" && token!==undefined?
            <Routes>
                    <Route path="home/*" element={<Noauth401 />}></Route>          
            </Routes>
          :
          <Routes>
            <Route path="/home" element={<Layouthome removeToken={removeToken} />}>
                <Route index element={<Dashboard token={token} setToken={setToken} />}></Route>
                <Route exact path="createconcurso" element={<CreateConcurso token={token} setToken={setToken} />}></Route>     
            </Route>
        </Routes> 
        }


    
    </BrowserRouter>
    );
        

            };



export default App;