import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from './Logo'

// import Facebook from '../Icons/Facebook'
// import Instagram from '../Icons/Instagram'
import Twitter from '../Icons/twitter.png'
import LinkedIn from '../Icons/linkedin.png'
import Instagram from '../Icons/instagram.png'
import Opensea from '../Icons/opensea.png'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};

display: flex;
/* justify-content: center; */
/* align-items: center; */
flex-direction: column;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content:  space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};

@media (max-width: 48em){
width: 90%;

h1{
font-size: ${props => props.theme.fontxxxl};

}
}

`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em){
width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.2);
    }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em){
display: none;
}
`
const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
    text-decoration: underline;
}

@media (max-width: 48em){
flex-direction: column;
width: 100%;

span{
    margin-bottom: 1rem;
}

}
`

const Footer = () => {

    const scrollTo = (id) => {

        let element = document.getElementById(id);
    
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }

    return(
        <Section>
            <Banner/>
            <Container>
            <Left>
                <Logo />
                <IconList>
                        <a href="https://twitter.com/dontpushLAB" target='blank'
                    rel="noopener">
                            <img src={Twitter} alt="Twitter" width="75%"/>
                        </a>
                        <a href="https://www.linkedin.com/company/86744472" target='blank'
                        rel="noopener">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/second_thoughts_club/" target='blank'
                    rel="noopener">
                        <img src={Instagram} alt="Instagram" width="75%"/>
                        </a>
                        <a href="" target='blank'
                    rel="noopener">
                        <img src={Opensea} alt="Opensea" width="70%"/>
                        </a>
                </IconList>
            </Left>
            <MenuItems>
            <Item onClick={() => scrollTo('home')}>Home</Item>
                    <Item onClick={() => scrollTo('about')}>About</Item>
                    <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
                    <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
                    <Item onClick={() => scrollTo('team')}>Team</Item>
                    <Item onClick={() => scrollTo('faq')}>Faq</Item>
            </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Second Thoughts Club. All rights reserved 
                </span>
                <span>
                    <a href="https://www.freeprivacypolicy.com/live/2c189c6d-6a1e-42fa-9d5a-a714d33c01b8"> Privacy Policy</a>
                </span>
                <span>
                <a href="https://www.freeprivacypolicy.com/live/ab4918e9-f9d1-40f5-8146-a886339335a7">Term of users</a>
                </span>
                <span>
                    Created by a bunch of wankers
                </span>
            </Bottom>
        </Section>
    )
}

export default Footer