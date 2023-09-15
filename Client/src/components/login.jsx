
import { useRef, useState,useEffect } from 'react';
import validateLogin from './validate';
import loginstyle from '../CSS/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export default function Login(props) {
   const navigate = useNavigate();
   const {handleonSubmit}=props
   const user = '1';
   const pass = '12';
   const [prueba,setPrueba]=useState("sin conexsion");
   const [error,setError]=useState({
      username:"",
      password:"",
      allinput:""
   });
   const [showerror,setShowerror]= useState(false);
   const [infouser,SetInfouser]= useState({
      email:"",
      password:""
   });
    
  
  
   /*
   const handleonSubmit=(e)=>{
  
    //  setShowerror(true);
      e.preventDefault();
   const data=new FormData(form.current);

   const dataObject=Object.fromEntries([...data.entries()]);

   const {username,userpassword} = dataObject;
   const validate= validateLogin(username,userpassword);

   console.log(validate.username);
   setError({
      ...error,
      username: validate.username,
      password: validate.password,
      allinput: validate.allinput
   })
   setShowerror(validate.Showerror);

   if (username === user && userpassword === pass) {
      setAccess(true);
      navigate('/home');
   }
   }
*/
   const form =useRef(null);


   return(
      //
         
         <form onSubmit={()=>handleonSubmit(infouser)} ref={form}>
        <div className="form-body">
            <img src={require('../img/userlogin.png')} alt= "user-login"></img>
            <p className="text">Bienvenido </p>
            
           { showerror? <div className="alert alert-danger" role="alert"> {error.allinput}{error.username}{error.password}</div>:null} 

            <div className='login-form'>
            <input type="text" placeholder='Write username' value={infouser.email} name="email" onChange={e=>SetInfouser({...infouser,email:e.target.value})}></input>
            <input type="password" placeholder='Write password' value={infouser.password} name="password" onChange={e=>SetInfouser({...infouser,password:e.target.value})}></input>
            <button>Iniciar Sesión  </button>
            
            </div>

        </div>
        </form>
      
   ) 
}
