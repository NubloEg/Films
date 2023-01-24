import React from "react";
import s from './Film.module.css'
import Gallery from "./Gallery/Gallery";
import Actors from "./Actors/Actors";

const Film=(props)=>{

    let film=props.props.films.films[props.props.currentFilmsId]
    let nowPage;
    switch (props.props.currentPage) {
      case 1:
        nowPage=<div className={s.span}>{film.description}</div>
        break;
      case 2:
        nowPage=<Actors sostav={film.actors}/>
        break;
      case 3:
        nowPage=<Gallery galery={film.gallery}/>
        break;

      case 4:
        nowPage=<div className={s.span}>{film.info}</div>
        break;
      default:
        break;
    }

   

    return(
      
        <div className={s.box_mini}>
          <h1>{film.title}</h1>
          <div className={s.btn_row}>
          <div className={props.props.currentPage===1?s.min_btn_act:s.min_btn} onClick={()=>props.props.setCurrentPage(1)} >Описание</div>
          <div className={props.props.currentPage===2?s.min_btn_act:s.min_btn} onClick={()=>props.props.setCurrentPage(2)} >Актеры</div>
          <div className={props.props.currentPage===3?s.min_btn_act:s.min_btn} onClick={()=>props.props.setCurrentPage(3)} >Галерея</div>
          <div className={props.props.currentPage===4?s.min_btn_act:s.min_btn} onClick={()=>props.props.setCurrentPage(4)} >Информация</div>
          </div>
          <div className={s.line}></div>
          <div>
          {nowPage}
          </div>
         
          <button>Смотреть</button>
        </div>
    )
}

export default Film