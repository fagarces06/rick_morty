import { useState } from 'react';
import styles from '../CSS/styles.module.css';
export default function SearchBar(props) {
   //console.log("propos que entran a searchBar");

   return (
      <div className={styles.searchbox}>
       
          <input type='search'  placeholder='Write here'  />
      <button onClick={()=>props.addCharacter()} >Submit</button> 
      </div>
   );
}
