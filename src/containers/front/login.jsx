import React, {useState} from 'react'; 
import api from '../../api';
import { useNavigate } from 'react-router-dom'; 
// import axios from 'axios'; 


export const Login = (props) => {
    
    // const [loginForm, setLoginForm ] = useState({
    //     email: "", 
    //     clave: ""
    // })

    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");

    const navigate = useNavigate();

    function logMeIn(event) {
        
        const data = {
            email: email.email,
            clave: clave.clave
        }

        api.post("/api/login",data)
        .then((response) => {
          console.log(response.data)
          localStorage.setItem('usuario_id', response.data.usuario_id);
          props.setToken(response.data.access_token)
          navigate("/home")
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
  
        // setLoginForm(({
        //   email: "",
        //   password: ""}))
  
        event.preventDefault()
      }

    function handledMail(event) {
        console.log(event.target.value)
        setEmail({
            email: event.target.value
        })

    }    

    function handledClave(event) {
        setClave({
            clave: event.target.value
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
                                                        <h4 class="text-center mb-4">Login</h4>
                                                       
                                                            <div class="form-group">
                                                                <label><strong>Email</strong></label>
                                                                <input type="email" className="form-control" placeholder='email' onChange={handledMail} />
                                                            </div>
                                                            <div class="form-group">
                                                                <label><strong>Password</strong></label>
                                                                <input type="password" className="form-control" placeholder='password' onChange={handledClave} />
                                                            </div>
        
                                                            <div class="text-center">
                                                                <button  className="btn btn-primary btn-block" onClick={logMeIn}  >Sign me in</button>
                                                            </div>
                                                      
                                                        <div class="new-account mt-3">
                                                            <p>Don't have an account? <a className="text-primary" href="./page-register.html" >Sign up</a></p>
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
 


export default Login;