import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props){
    return(
        
        <div className="card" style={{width:400}}>
        <img className="card-img-top" src={props.avatar_url} alt="Card image"/>
        <div className="card-body">
          <h4 className="card-title">{props.id}</h4>
          <p className="card-text">{props.login}</p>
          <a href={props.html_url} className="btn btn-primary">See Profile</a>
        </div>
      </div>
        );
}
export default Card;