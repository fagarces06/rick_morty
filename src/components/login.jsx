
import { useRef, useState,useEffect } from 'react';
import validateLogin from './validate';
import loginstyle from '../CSS/login.css';
import { useNavigate } from 'react-router-dom';

//import { validatelogin } from './validate';
  //funciones del login





export default function Login(props) {
   const navigate = useNavigate();

   const user = '1';
   const pass = '12';
   const [access, setAccess] = useState(false);
   /*
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   */
   const [error,setError]=useState({
      username:"",
      password:"",
      allinput:""
   });
   const [showerror,setShowerror]= useState(false);
   const [infouser,SetInfouser]= useState({
      username:"",
      password:""
   });
  


   
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

   const form =useRef(null);


   return(
      //
         
         <form onSubmit={(e)=>handleonSubmit(e)} ref={form}>
        <div className="form-body">
            <img src={require('../img/userlogin.png')} alt= "user-login"></img>
            <p className="text">Bienvenido </p>
           { showerror? <div className="alert alert-danger" role="alert"> {error.allinput}{error.username}{error.password}</div>:null} 

            <div className='login-form'>
            <input type="text" placeholder='Write username' value={infouser.username} name="username" onChange={e=>SetInfouser({...infouser,username:e.target.value})}></input>
            <input type="password" placeholder='Write password' value={infouser.password} name="userpassword" onChange={e=>SetInfouser({...infouser,password:e.target.value})}></input>
            <button>Iniciar Sesión  </button>
            
            </div>

        </div>
        </form>
      
   ) 
}
