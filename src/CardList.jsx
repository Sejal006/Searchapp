import React from "react";
import Card from "./Card";

function CardList({profile}){
    return(
     <> 
        {profile.map((p,ind)=>{ 
        return <Card {...p} key={ind}/>

       })}
     </>
        
    
    );
}

export default CardList;