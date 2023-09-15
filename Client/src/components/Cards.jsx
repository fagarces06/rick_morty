import styles from "../CSS/styles.module.css";
import { connect } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFav } from "../redux/actions";
import { removeFav } from "../redux/actions";
import { useEffect } from "react";
function Cards(props) {
  const [favoritelist,setFavoriteList]=useState([]);

  const { characters, removeCharacter, favoritecharacter, ReducerFavorites, addFav, removeFav } =
    props;
   
 // console.log("valor de characters en el reducer", ReducerFavorites );
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const handleFavorite = (character) => {
    if(favoritelist.includes(character.id)===false){
      console.log("dispacheado");
      //dispatch(addFav(character));
      addFav(character)
    }else{
      alert("no se puede aregar dos veces un personajep")
    }
    setFavoriteList([...favoritelist, character.id]);
    //console.log("lista de favortios",favoritelist)


      
      
   
     

  };
  
  /*
  useEffect(() => {
   ReducerFavorites.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
*/
  return (
    //

    <div className={styles.container}>
      {characters.map((character) => (
        <div key={character.id} className={styles.card}>
          <button onClick={(e) => removeCharacter(character.id)}>X</button>
          {favoritelist.includes(character.id) ? (
            <button >❤️</button>
          ) : (
            <button onClick={()=>handleFavorite(character)}>🤍</button>
          )}
          <div className={styles.content}>
            <h2 className={styles.title_character}>{character.name}</h2>
            <img src={character.image} alt="" width="100" height="100" />
            <div className={styles.description}>
              <h2>{character.species}</h2>

              <h2>{character.gender}</h2>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
const mapDispatchToprops={ // este objecto es quien envia las funciones de las actions como props a mi componente para luego usarlas en onClick()
   addFav,
   removeFav
}


const mapStateToProps = (state) => {
//  console.log("valor de state jiji", state.myFavorites);
  return {
    ReducerFavorites: state.myFavorites,
  };
};



//export default connect(mapStateToProps,mapDispatchToprops)(Cards);
const PreloadConnect = connect(mapStateToProps,mapDispatchToprops)(Cards)
export default PreloadConnect;