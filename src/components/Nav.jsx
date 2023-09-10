

import styles from '../CSS/styles.module.css';

import { useState } from 'react';
import SearchBar from './SearchBar';

export default function Nav(props) {

   
    const {addCharacter,logout, go_favorites }=props;


    return (
        <div>
       <nav className={styles.navbar}>
        <img  src={require('../img/titleweb.png')}  alt="" />
        <div >
          
        <SearchBar addCharacter={addCharacter} />
        </div>
        <ol>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a >Favorites</a></li>
            <li><a  onClick={(e)=>logout(e)}>Log Out</a></li>
 
            
        </ol>
       </nav> 
       </div>
    //   }
    );
 }
 