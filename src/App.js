//import './App.css'
import Nav from './components/Nav.jsx'
import Login from './components/login.jsx'
import Cards from './components/Cards.jsx'
import { useState,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'


function App () {
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
  const addCharacter =()=>{
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
    


  }


 
  
  return (

    <div >

      

        <div >
        
        <Routes>
       
        
        <Route path='/' element={<Login  ></Login>}></Route>
        <Route path='/home' element={<Nav addCharacter={addCharacter}></Nav>}>
          
        
        </Route>
        <Route path='app' element={<Cards  characters={characters.character}/>}>  </Route>
        </Routes>
  
        
         
        
   
        </div>
      
     
 

 
    </div>

  )
}

export default App
