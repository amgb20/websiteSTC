import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {light} from '../../styles/Themes'
import LastSupper from '../sections/LastSupper.svg'
import GIF from './download.gif'
import "@fontsource/black-ops-one"

import ButtonWelcomePage from '../ButtonWelcomePage';
import Counter from '../Counter';

import { Link } from 'react-router-dom';


const Section = styled.div`
min-height: 100vh;
width: 100%;
/* background-color: ${props => props.theme.text}; */
background-color: black;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 75%;
height: 75vh;
margin: 0 auto;
// background-color: lightblue; // we can change the color

display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
max-width: 1440x;

position: absolute;

@media (max-width: 70em){
width: 85%;
}

@media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 80%;
    }
}
@media (max-width: 40em){

    &>*:last-child{
        width: 90%;
    }
}
`
const Box = styled.div` 
top: 0;
bottom: 0;
left: 0;
right: 0;

margin-left: auto;
margin-right: auto;

object-fit: cover;
`

const Box1 = styled.div`
position: absolute;
  top: 30%;
  left: 47%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;

  position: absolute;

  @media all and (max-width: 1024px)
  {
    top: 30%;
    left: 50%;
  }
`
const Box2 = styled.div`
position: absolute;
  top: 35%;
  left: 42%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box3 = styled.div`
position: absolute;
  top: 35%;
  left: 55%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box4 = styled.div`
position: absolute;
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box5 = styled.div`
position: absolute;
  top: 45%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box6 = styled.div`
position: absolute;
  top: 27%;
  left: 40%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box7 = styled.div`
position: absolute;
  top: 27%;
  left: 27%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box8 = styled.div`
position: absolute;
  top: 27%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box9 = styled.div`
position: absolute;
  top: 27%;
  left: 75%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box10 = styled.div`
position: absolute;
  top: 27%;
  left: 71%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box11 = styled.div`
position: absolute;
  top: 37%;
  left: 69%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box12 = styled.div`
position: absolute;
  top: 34%;
  left: 65%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Box13 = styled.div`
position: absolute;
  top: 39%;
  left: 75%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`

const TeaserBox = styled.div`
position: absolute;
  top: 80%;
  left: 20%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: transparent;
  font-size: 16px;
  padding: 75px 75px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`
const Header = styled.div`

    font-size: ${(props) => props.theme.fontxxl};
    color: ${(props) => props.theme.body};
    text-align: center;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    bottom: 80%;
    left: 0;
    right: 0;
    height: fit-content;
    margin: auto;
    font-family: 'Black Ops One', sans-serif;

    margin-left: auto;
margin-right: auto;
margin-top: auto;

`

// added
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
//

const WelcomePage = () => {

    return(

        <ThemeProvider theme={light}>
            <Section >
            <Header>
                Second Thoughts Club
            </Header>
                <TeaserBox><img src={GIF} alt={GIF} height="100%"/></TeaserBox>
                <Container>
                    <Box >
                        <img src={LastSupper} alt={LastSupper} height="550vh" width="100%"/>
                        <Link to="/home">
                            <Box1>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box1>
                            <Box2>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box2>
                            <Box3>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box3>
                            <Box4>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box4>
                            <Box5>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box5>
                            <Box6>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box6>
                            <Box7>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box7>
                            <Box8>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box8>
                            <Box9>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box9>
                            <Box10>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box10>
                            <Box11>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box11>
                            <Box12>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box12>
                            <Box13>
                                <ButtonWelcomePage >Box2</ButtonWelcomePage>
                            </Box13>
                </Link>
                    </Box>
                </Container>
             </Section>
        </ThemeProvider>
        
        
    )
}

export default WelcomePage