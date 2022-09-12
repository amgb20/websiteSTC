import React from "react";
import styled from "styled-components";

const Btn = styled.button`
display: inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
outline: none;
border: none;

font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ' ;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

`


// const Button = ({text, link}) => {
//     return(
//         <a href={link} aria-label={text} target="_blank" rel="noreferrer" >
//         <Btn>{text}</Btn>
//         </a>
//     )
// }

const Button = ({text, link}) => {
    return(
        <a href={link} aria-label={text} target="_blank" rel="noreferrer" >
        <Btn>{text}</Btn>
        </a>
    )
}

export default Button