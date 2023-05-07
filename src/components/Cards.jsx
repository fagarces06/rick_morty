
import styles from '../CSS/styles.module.css';

export default function Cards(props) {
   const { characters } = props;
   
   return(
      //
      
   
         <div className={styles.container}>
         {characters.map((character) =><div key={character.id} className={styles.card}>
         <button onClick={character.onClose}>X</button>
         <div className={styles.content}>
         <h2 className={styles.title_character}>{character.name}</h2>
         <img  src={character.image} alt="" width="100" height="100" />
         <div className={styles.description}>
     
         <h2>{character.species}</h2>

         <h2>{character.gender}</h2>
         </div>
         </div>
         </div> 
         )};
         </div>
   
      
   ) 
}
