import React, { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Carousel from "../Carousel";
import Button from '../Button';
import {dark} from '../../styles/Themes';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLayoutEffect } from "react";

import Popup from "../Popup";
import { useState, useEffect } from "react";

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;
// background-color: lightblue; // we can change the color

display: flex;
justify-content: center;
align-items: center;

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
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
        min-height: 50vh;
    }

`

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.body};
align-self: flex-start;
width:80%;
margin: 0 auto;

@media (max-width: 64em){
        width: 100%;
        text-align: center;
    }
@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontlg};

}
`
const SubText = styled.p`
font-size: ${(props) => props.theme.fontlg};
color: ${(props) => props.theme.body};
align-self: flex-start;
width:80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
        width: 100%;
        text-align: center;
        font-size: ${(props) => props.theme.fontmd};
    }
@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontmd};

}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontsm};

}
`
const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width:80%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
        width: 100%;
        text-align: center;
        font-size: ${(props) => props.theme.fontsm};
    }
@media (max-width: 40em){
    font-size: ${(props) => props.theme.fontsm};

}
@media (max-width: 30em){
    font-size: ${(props) => props.theme.fontxs};

}
`

const ButtonContainer = styled.div`
    width: 80%;
    margin: 1rem auto;
    display: flex;
    align-self: flex-start;

        @media (max-width: 64em){
            width: 100%;

            button{
                margin: 0 auto;
            }
        }

`

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

const About = () => {

    const [buttonPopup, setButtonPopup] = useState(false);
    
    const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {

let element = ref.current;

ScrollTrigger.create({
    trigger: element,
    start:'top top',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    scrub: true,
})

    return () => {
        ScrollTrigger.kill();
    };
}, [])

    return(
        <Section ref={ref} id="about">
            <Container>
                <Box> <Carousel /> </Box>
                <Box> 
                    <Title>
                        Welcome to the Second Thoughts Club
                        <meta name="description" content="Welcome to the Second Thoughts Club: an NFT collection where DR.K gives riddle to access is magic world"/>
                    </Title>
                    <SubText>
                    {/* How do you calm yourself down? Dr. K Konstan, psychiatrist to the worlds powerful, insists that art is the answer. He has tested his theory on countless powerful dictators and angry citizens throughout the ages. After countless dead, history shows, clearly it doesn’t work. However, these are the fruits of their anger. */}
                    </SubText>
                    <SubTextLight>
                    How do you calm yourself down? Dr. K Konstan, psychiatrist to the worlds powerful, insists that art is the answer. He has tested his theory on countless powerful dictators and angry citizens throughout the ages. After countless dead, history shows, clearly it doesn’t work. However, these are the fruits of their anger.
                    </SubTextLight>
                    <ButtonContainer>
                        <ThemeProvider theme={dark}>
                            {/* <Button text="DONT JOIN OUR DISCORD"/> */}
                            <Btn onClick={() => setButtonPopup(true)}>
                                 DON'T JOIN OUR DISCORD
                            </Btn>
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                Dr. K strongly recommend you go to school and learn how to read
                            </Popup>
                        </ThemeProvider>
                    </ButtonContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About