import React,{useState} from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from './Logo'

// import Twitter from '../Icons/Twitter.js'
// import LinkedIn from '../Icons/LinkedIn.js'

import Twitter from '../Icons/twitter.png'
import Instagram from '../Icons/instagram.png'
import Opensea from '../Icons/opensea.png'

const Section =styled.section`
width:100vw;
background-color: ${props => props.theme.text};


`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile{
    display: none;
}

@media (max-width: 64em){
    .desktop{
        display: none;
    }

    .mobile{
    display: inline-block;
}
}
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;

@media (max-width: 64em){
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom:0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    transform: ${props => props.click ? 'translateY(0)':'translateY(1000%)'};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;

    touch-action: none;

}
`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.body};
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.body};
    transition: width 0.3s ease;
}
&:hover::after{
    width: 100%;
}

@media (max-width: 64em){
    margin: 1rem 0;

    &::after{
        display: none;
    }
}

`
const HamburgerMenu = styled.span`
width: ${props => props.click ? '2rem':'1.5rem'};
height: 2px;
background-color: ${props => props.theme.body};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)':'translateX(-50%) rotate(0)'};

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em){
    display: flex;
}

&::after, &::before{
    content: ' ';
    width: ${props => props.click ? '1rem':'1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px':'0'};
    background-color: ${props => props.theme.body};
    position: absolute;
    transition: all 0.3s ease;
}

&::after{
    top: ${props => props.click ? '0.3rem':'0.5rem'};
    transform: ${props => props.click ? 'rotate(-40deg)':'rotate(0)'};
}
&::before{
    bottom: ${props => props.click ? '0.3rem':'0.5rem'};;
    transform: ${props => props.click ? 'rotate(40deg)':'rotate(0)'};
}
`
// modified
const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
    padding-right: 1.5rem;
    transition: all 0.2s ease;

    &:hover{
        transform: scale(1.2);
    }
}
`
//

const Navigation = () => {

const [click, setClick] = useState(false);

const scrollTo = (id) => {

    let element = document.getElementById(id);

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })

    setClick(!click);
}

    return(

        <Section id="navigation">
            <NavBar>
                <Logo />
                <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                    &nbsp;
                </HamburgerMenu>
                <Menu click={click}>
                    <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                    <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
                    {/* <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem> */}
                    {/* <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem> */}
                    <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
                    <MenuItem>
                    </MenuItem>
                    <IconList>
                        <a href="https://twitter.com/dontpushLAB" target='blank'
                    rel="noopener">
                        <img src={Twitter} alt="Twitter" width="75%"/>
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
                    <MenuItem>
                        <div className="mobile">
                        <Button text="Mint STC Now" link="https://google.com"/>
                        </div>
                    </MenuItem>
                </Menu>
                    <div className="desktop">
                    <Button text="Mint STC Now" link="https://google.com"/>
                    </div>
            </NavBar>
        </Section>
    )
}

export default Navigation