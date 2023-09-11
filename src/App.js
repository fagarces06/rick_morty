//import './App.css'
import Nav from './components/Nav.jsx'
import Login from './components/login.jsx'
import Cards from './components/Cards.jsx'
import Favorites from './components/favorites.jsx'
import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { addFav } from './redux/actions.js'
import { removeFav } from './redux/actions.js'


function App () {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const location= useLocation();
  var showNav=false;
 //const [showNav,setShowNav]= useState(false);
  if (location.pathname!=='/'){
      showNav=true;
  }

  //console.log("valor de shownav en app.js",showNav);*/
  const [showcharacters,showCharacters]= useState(false)
  
  const [characters, setCharacters] = useState({
    character:[{
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 3,
      name: "Summer Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: 4,
      name: "Beth Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    }
    ],
    allCharacter:[     {
      id: 2,
      name: "Morty Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 3,
      name: "Summer Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: 4,
      name: "Beth Smith",
      species: "Human",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },    
    {
      id: 5,
      name: "Jerry Smith",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },    
    {
      id: 6,
      name: "Abadango Cluster Princess",
      species: "Alien",
      gender: "Female",
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    }],
 });
 /*
  const [characters,setCharacters] =useState(
    [
      {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        id: 3,
        name: "Summer Smith",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      },
      {
        id: 4,
        name: "Beth Smith",
        species: "Human",
        gender: "Female",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      },
    ]   
  ) 
*/
  const addCharacter =(number)=>{


    fetch(`https://rickandmortyapi.com/api/character/${number}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {

        
        const newcharacter =[{
      
          id: data.id,
          name:data.name,
          species: data.species,
          gender: data.gender,
          image: data.image
        }]
        const newlist=characters.character.concat(newcharacter)
      //  console.log("valor del data con fetch",newcharacter);
          //setCharacters((characters) => [...characters, data]);
          
          setCharacters({
            ...characters,
            character:newlist
          });
          
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });

/*
    console.log("entra submit");
    const newcharacter =[{
      
      id:7,
      name:"Abradolf Lincler",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
    }]
    
    const newlist=characters.character.concat(newcharacter);
    console.log("nueva lista",newlist);
    setCharacters({
      ...characters,character:newlist
    });
    */


  }

  const removeCharacter=(number)=>{

 

    const newList= characters.character.filter((character) => character.id!==number);

    setCharacters({
      ...characters,character:newList
    });
    
  }

  const favoritecharacter = ()=>{
    console.log("character saved");
    navigate('/favorites')
  }

  const go_home = ()=>{
 
    navigate('/home')
  }

  const go_favorites = ()=>{
 
    navigate('/favorites')
  }

  const logout =(e)=>{
    e.preventDefault();
   
    setAccess(false);
    navigate("/");
  }


  
    useEffect(() => {
      !access && navigate('/');
   }, [access]);
  
  return (

    <div >
        
        { showNav? <Nav addCharacter={addCharacter} logout={logout}  go_home={go_home} go_favorites={go_favorites}></Nav>:null}
        <Routes>
                    
        <Route path='/' element={<Login  ></Login>}></Route>
 
        
        
        <Route path='/home' element={<Cards  characters={characters.character} removeCharacter={removeCharacter} favoritecharacter={favoritecharacter} addFav={addFav} removeFav={removeFav}/>}>  </Route>
       

        <Route path='/favorites' element={<Favorites  ></Favorites>}></Route>
        </Routes>

        

    </div>

  )
}

export default App
