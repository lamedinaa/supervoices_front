import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Header = (props) => {

    const navigate = useNavigate();

    function logOut() {
        props.removeToken(); 
        localStorage.removeItem("usuario_id"); 
        navigate("/");
    }


    return(

         <div>
                <div class="nav-header">
                </div>           
                <div class="header">
                    <div class="header-content">
                        <nav class="navbar navbar-expand">
                            <div class="collapse navbar-collapse justify-content-between">
                                <div class="header-left">

                                </div>

                                <ul class="navbar-nav header-right">  
                                    <li class="nav-item dropdown notification_dropdown">
                                        <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                                            <button type="submit" class="btn btn-primary" onClick={logOut}>LogOut</button>
                                        </a>    
                                    </li>
                                    <li class="nav-item dropdown header-profile">
                                        <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                                            <i class="mdi mdi-account"></i>
                                        </a>     
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
            </div>
        
         </div>    


    )
    



}

export default Header;