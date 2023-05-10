
import { useRef, useState,useEffect } from 'react';
import loginstyle from '../CSS/login.css';
import { useNavigate } from 'react-router-dom';
  //funciones del login





export default function Login(props) {
   const navigate = useNavigate();
   const user = 'ejemplo@gmail.com';
   const pass = '1password';
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
   console.log("objeto:",infouser);

   const validatelogin=(username,userpassword)=>{
      var regexEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      setError('');
      var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
      console.log("ingreso a validar",username.userpassword)
      if(!username.trim() || username.trim()===undefined || !userpassword.trim() || userpassword===undefined) {
            setShowerror(!showerror);
            setError({
               ...error,
               allinput:"you must fill in all the fields"
            })
            console.log(error);
            return 
            
      }

      if(username.trim()>35 || !regexEmail.test(username)){
         setShowerror(!showerror);
         setError({
            ...error,
            name:"the username it must be an email and no longer than 35 characters"
         })
      }

      if(!userpassword.match(/\d/) || userpassword.length<6 || userpassword.lenght>10){
         setError({
            ...error,
            password:"the password must contain at least one number and be between 6 and 10 characters long."
         })
      }

   
   }
   const handleonSubmit=(e)=>{
      setShowerror(true);
      e.preventDefault();
   const data=new FormData(form.current);

   const dataObject=Object.fromEntries([...data.entries()]);
   console.log(dataObject);
   const {username,userpassword} = dataObject;
   validatelogin(username,userpassword);
   if (username === user && userpassword === pass) {
      setAccess(true);
      navigate('/home');
   }
   }

   const form =useRef(null);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   return(
      //
         <form onSubmit={handleonSubmit} ref={form}>
        <div className="form-body">
            <img src={require('../img/userlogin.png')} alt= "user-login"></img>
            <p className="text">Bienvenido</p>
           { showerror? <div className="alert alert-danger" role="alert"> {error.allinput}{error.name}{error.password}</div>:null} 

            <div className='login-form'>
            <input type="text" placeholder='Write username' value={infouser.username} name="username" onChange={e=>SetInfouser({...infouser,username:e.target.value})}></input>
            <input type="password" placeholder='Write password' value={infouser.password} name="userpassword" onChange={e=>SetInfouser({...infouser,password:e.target.value})}></input>
            <button>Iniciar Sesión </button>
            </div>

        </div>
        </form>
      
   ) 
}
