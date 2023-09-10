import styles from "../CSS/styles.module.css";
import { connect } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFav } from "../redux/actions";
import { removeFav } from "../redux/actions";
import { useEffect } from "react";
function Cards(props) {
  console.log("estos son connect", props);
  const { characters, removeCharacter, favoritecharacter, ReducerFavorites } =
    props;
  console.log("valor de characters", ReducerFavorites );
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const handleFavorite = () => {
   console.log("valor de isfav",isFav);
    if (isFav === true) {
      setIsFav(false);
    } else {
      if(isFav===false){
         setIsFav(true);
         dispatch(addFav(characters));
      }
    }
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
          {isFav ? (
            <button onClick={()=> handleFavorite()}>❤️</button>
          ) : (
            <button onClick={()=>handleFavorite()}>🤍</button>
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
const mapDispatchToprops={ // este objecto es quien envia las funciones buy_pokemon y return_pokmen como props a mi componente para luego usarlas en onClick()
   addFav,
   removeFav
}


const mapStateToProps = (state) => {
  console.log("valor de state", state.myFavorites);
  return {
    ReducerFavorites: state.myFavorites,
  };
};



export default connect(mapStateToProps,mapDispatchToprops)(Cards);
