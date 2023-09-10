

const Error={
    username:"",
    password:"",
    allinput:"",
    Showerror: false
}


export default function validateLogin (username,userpassword){
    var regexEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //setError('');
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
   
    if(!username.trim() || username.trim()===undefined || !userpassword.trim() || userpassword===undefined) {

          Error.Showerror=!Error.showerror;
          Error.allinput= "you must fill in all the fields"

          
    }

    if(username.trim()>35 || !regexEmail.test(username)){


       Error.Showerror=!Error.showerror;
       Error.username= "the username it must be an email and no longer than 35 characters"


    }

    if(!userpassword.match(/\d/) || userpassword.length<6 || userpassword.lenght>10){
        Error.Showerror=!Error.showerror;
        Error.password= "the password it must be  no longer than 10 characters and longer than 6 characters"
    }

    return Error;
 
 }

