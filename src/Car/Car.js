import React from "react";
import './Car.css'


export default (props) => (
    <div className="Car">
        <h3>Car name: {props.name}</h3>
        <p>YEAR: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)