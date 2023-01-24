import React from 'react';
import './App.css';
import Film from './component/Film';

import icon from './img/next.png'





function App(props) {
  debugger
document.body.style.backgroundColor = props.films.films[props.currentFilmsId].backgroundColor;
let now_image=props.films.films[props.currentFilmsId].image  



 const plus =()=>{
  
  if (props.currentFilmsId+1!==props.films.films.length) {
    let currentFilm=props.currentFilmsId+1;
    props.plusCurrentFilm(currentFilm)
  }else{ props.plusCurrentFilm(0)}
  document.body.style.backgroundColor = props.films.films[props.currentFilmsId+1].backgroundColor;
 }

 const minus =()=>{
  
  if (props.currentFilmsId>0) {
    let currentFilm=props.currentFilmsId-1;
    props.plusCurrentFilm(currentFilm)
  }else{
    props.plusCurrentFilm(props.films.films.length-1)
  }
  document.body.style.backgroundColor = props.films.films[props.currentFilmsId-1].backgroundColor;
 }
 
 const boxStyle={
  marginTop: "200px",
  maxWidth: "1000px",
  height: "600px",
  backgroundImage:' url('+now_image +')',
  backgroundSize: "cover",
  borderRadius: "40px"
 }
  return (
    <div className="Film">
      <div style={boxStyle} >
          <img alt={"left"} className='left' onClick={minus}  src={icon}/>
          <Film props={props}/>
          <img alt={"right"} className='right' onClick={plus} src={icon}/>
      </div>
    </div>
  
  );
}

export default App;
