import React from "react";
import "./card-list.style.css";
import {Card} from "";

export const Cardlist = props => {

   return <div className="card-list">
      {props.developers.map(
              developers =>(

              <h1 key={developers.id}>{developers.name}</h1>
              
              )
            )}
   </div>
};

