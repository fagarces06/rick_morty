//import './App.css'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import { useState } from 'react'



function App () {
  const [characters2, setCharacters2] = useState({
    zooName:"",
    animals:[],
    species:[],
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
    },],
 });
 
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

  const addCharacter =()=>{
    const newcharacter ={
      id:1,
      name:"Evil Rick",
      species: "Humanoid",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/119.jpeg"
    }

    setCharacters([
      ...characters,
      newcharacter
    ])
  }
  
  return (

    <div >

      

        <div >
        <Nav addCharacter={addCharacter}></Nav>
        <hr></hr>
        <Cards 
          characters={characters}
        />
        </div>
      
     
 

 
    </div>

  )
}

export default App
