import {setCurrentPage} from './../redux/filmsReducer'
import { connect } from "react-redux";
import Film from "./Film";



const mapStateToProps=(state)=>{

  return{
      films:state.films,
      currentPage:state.films.currentPage,
      currentFilmsId:state.films.currentFilmsId
  }

}





export default connect(mapStateToProps,{setCurrentPage})(Film)