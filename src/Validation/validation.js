import React from 'react';

const validation=(props)=>{
let value='Too short';
if(props.inputLength>=6){
    value='Too enough';
}
     return(
         <div>
             <p>{props.value}</p>
             <p>{value}</p>
         </div>
     )
}

export default validation;