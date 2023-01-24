import React from "react";
import s from "./Gallery.module.css"

const Gallery=(props)=>{

    let gallerys=props.galery.map(p=>{
       return <span className={s.image}>
        <img alt="Актер" src={p.img}/>
        
    </span>
    })

    return(<div className={s.all_gallery}>
       {gallerys}
        
        
    </div>
       
    )
}

export default Gallery