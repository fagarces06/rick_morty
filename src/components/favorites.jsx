
import { connect } from "react-redux";

function favorites(props) {
    //const {name,species,gender,image,onClose}=props;
    console.log("props en componente favorites",props)
 
    return (
 
       //{techSkills.map((skill) =><li key={skill}>{skill}</li>)}
      // {

       <div>         
          <h1> You are in favorites</h1>

       </div>
 
    //   }
    );
 }
 
const mapStateToProps = (state) => {
   
    return {
      ReducerFavorites: state.myFavorites,
    };
  };
  export default connect(mapStateToProps(favorites));