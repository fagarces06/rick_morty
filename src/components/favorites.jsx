
import { connect } from "react-redux";
import styles from "../CSS/styles.module.css";

import { addFav } from "../redux/actions";
import { removeFav } from "../redux/actions";
import { useDispatch } from "react-redux";
function Favorites(props) {
   const dispatch= useDispatch();
    //const {name,species,gender,image,onClose}=props;
    console.log("props en componente favorites",props)
    const {ReducerFavorites} =props;
    const characters= ReducerFavorites;
    //const characters= [...new Set(ReducerFavorites)];
    console.log("characters del componente favorites",typeof characters);
    const removeCharacter_Favorite=(numberId)=>{
      //console.log("ingresando a removecharacter favorite",numberId)
      dispatch(removeFav(numberId));

     
      
    }
 
    return (
      //
  
      <div className={styles.container}>
        {characters.map((character) => (
          <div key={character.id} className={styles.card}>
            <button onClick={(e) => removeCharacter_Favorite(character.id)}>X</button>

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
   
    return {
      ReducerFavorites: state.myFavorites,
    };
  };
  
  
  const PreloadConnect = connect(mapStateToProps,mapDispatchToprops)(Favorites)
  export default PreloadConnect;

  
  //export default connect(mapStateToProps(favorites));