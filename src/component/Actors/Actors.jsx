import React from "react";
import s from "./Actors.module.css"

const Actors=(props)=>{
   
    let actors=props.sostav.map((p)=>{
       return <span className={s.actor}>
        <img alt="Актер" src={p.icon}/>
        <div className={s.text}>{p.name}</div>
</span>
    })

    return(<div className={s.all_Actor}>
            {actors}
    </div>
       
    )
}

export default Actors