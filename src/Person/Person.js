import React from 'react';
import './Persons.css';
//import Radium from 'radium';

const person = (props)=>{

 return (
     <div className="Persons " >
         <p  onClick={props.click}>I am {props.name} and My age is {props.age}
             <p> {props.children}</p>
             <input type="text" onChange={props.changed} />
         </p>

     </div>
 )
};

export default (person) ;