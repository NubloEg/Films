import {plusCurrentFilm,setCurrentPage} from './redux/filmsReducer'
import { connect } from "react-redux";
import App from './App';



const mapStateToProps=(state)=>{

  return{
      films:state.films,
      currentPage:state.films.currentPage,
      currentFilmsId:state.films.currentFilmsId
  }

}





export default connect(mapStateToProps,{plusCurrentFilm,setCurrentPage})(App)