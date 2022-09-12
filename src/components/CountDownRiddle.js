import React from "react";
import styled from "styled-components";

const Section = styled.section`
min-height: 100vh;
width: 100%;
/* background-color: ${props => props.theme.text}; */
background-color: red;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;
background-color: lightblue; // we can change the color

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

const HoldersPage = () => {

    return(
        <Section>
            <Container>
                LOL
            </Container>
        </Section>
    )
}

export default HoldersPage 