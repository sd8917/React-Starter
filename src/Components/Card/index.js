import React from 'react';
import { toLower,toUpper } from '../../utils';


const Card = (props) => {
    const HeadingStyle={
        color : "red",
        backgroundColor: "yellow"
      }

    const {index, name, age, salary} = props;
    
    return ( 
        // <div key={props.index}>
        //   <h2 style ={HeadingStyle} >Name : {props.name}</h2>
        //   <h3>Age : {props.age}</h3>
        //   <h4>Salary : {props.salary}</h4>
        // </div>
        <div key={index} 
         style={ //Inlin css..
             { border : "1px solid red", padding : "20px", margin: "20px"}
         }>
        <h2 style ={HeadingStyle} >Name :{ toUpper(name) }</h2>
        <h3>Age : {age}</h3>
        <h4>Salary : {salary}</h4>
      </div>
     );
};

 
export default Card;