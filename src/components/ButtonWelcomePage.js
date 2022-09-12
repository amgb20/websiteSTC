import React from "react";
import styled from "styled-components";
import { COUNTER } from "./redux";
import { useDispatch, useSelector } from "react-redux";

const Btn = styled.button`
display: inline-block;
/* background-color: ${props => props.theme.text}; */
background-color: red;
color: ${props => props.theme.body};
outline: none;
border: none;

font-size: ${props => props.theme.fontsm};
padding: 1.9rem 2.3rem; // change the size of the box
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: absolute;
&:hover{
    transform: scale(0.9);
}

@media (max-width: 70em){
top: 30%;
}

@media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 30%;
    }
}
@media (max-width: 50em){

    &>*:last-child{
        width: 30%;
    }
}

/* &::after{
    content: ' ' ;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
} */

`


// const Button = ({text, link}) => {
//     return(
//         <a href={link} aria-label={text} target="_blank" rel="noreferrer" >
//         <Btn>{text}</Btn>
//         </a>
//     )
// }

export default function ButtonWelcomePage() {
  const selector = useSelector(state => state);
  const dispatch = useDispatch();
  
  return (
    <div className="ButtonWelcomePage">
      <Btn onClick={() => dispatch({ type: COUNTER })}>click</Btn>
      {/* <h1>Nr: {selector.counter}</h1> */}
    </div>
  );
}