import React, { useState, useEffect  } from 'react';
import styled from 'styled-components';

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
position: relative;
&:hover{
    transform: scale(0.9);
}
`

const Counter = () => {
    // const [count, setCount] = useState(0);
  
    //  const increase = () => {
    //   setCount(prevCount => {
    //     const newCount = Number(prevCount) + 1;
    //     localStorage.setItem("count", newCount);
    //     return newCount;
    //   });
    // };
  
    // const decrease = () => {
    //   setCount(prevCount => {
    //     const newCount = Number(prevCount) - 1;
    //     localStorage.setItem("count", newCount);
    //     return newCount;
    //   });
    // };
  
    // useEffect(() => {
    //   const initialValue = localStorage.getItem("count");
    //   if (initialValue) setCount(initialValue);
    // }, []);
  
    // // Just to show you the localStorage Value
    // console.log(localStorage.getItem("count"));
  
    // return (
    //   <div>
    //     {/* <Btn onClick={() => dispatch({ count })}>{count}</Btn> */}
    //     {/* <Btn onClick={decrease}>Minus</Btn> */}
        
    //   </div>
    // );

    const selector = useSelector((state) => state);

  return (
    <div>
      {/* <Link to="/">App</Link> */}
      <p>about page NR: {selector.counter}</p>
    </div>
  );
  };
  
  export default Counter;