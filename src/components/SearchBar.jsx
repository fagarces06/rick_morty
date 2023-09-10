import { useState } from 'react';
import styles from '../CSS/styles.module.css';

export default function SearchBar(props) {
   //console.log("propos que entran a searchBar");
   const [search,setSearch]=useState('');

   const search_value=(e)=>{
      console.log("valor del onchange",e);
      setSearch(e.target.value);
   }
   
   return (
      
      <div className={styles.searchbox}>
       
          <input type='search'  placeholder='Write here' value={search} onChange={search_value}/>
      <button onClick={()=>props.addCharacter(search)} >Submit</button> 
      </div>
     
   );
}
