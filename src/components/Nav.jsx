import SearchBar from './SearchBar.jsx'
import styles from '../CSS/styles.module.css';

export default function Nav(props) {
    
    
    const {addCharacter}=props;
    
    
    return (

       <nav className={styles.navbar}>
        <img  src={require('../img/titleweb.png')}  alt="" />
        <div >
          
        <SearchBar addCharacter={addCharacter} />
        </div>
        <ol>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>Contact</a></li>
            
        </ol>
       </nav>
 
    //   }
    );
 }
 