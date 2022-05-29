import react from "react";
import styled from "styled-components"
import {motion} from "framer-motion"
import { LightTheme, DarkTheme } from "./Themes";
import { Github } from "./AllSvgs";
import {NavLink} from "react-router-dom"
import Avatar from "../assets/avatar.jpg"

const Box = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6 {
    font-family:"Karla", sans-serif;
    font-weight: 500;
}
`

const Line = styled(motion.span)`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

width: 2px;
height: 46%;
background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line2 = styled(motion.span)`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
top: 8%;
left: 2rem;

z-index: 3;

width: 2px;
height: 40.5%;
background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line3 = styled(motion.span)`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
top: 0;
left: 2rem;

z-index: 3;

width: 2px;
height: 3%;
background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body };

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Logo = styled.h1`
display: inline-block;
color: ${props => props.theme.text};
font-family: "Pacifico", cursive;

position: fixed;
left: 0.5rem;
z-index: 3;
`

const Sidebar = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 1.3rem;
top: 56%;
scale: 1.3;

z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Avatars = styled.div`
  position:absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);    /* vertically center */
`

const About = styled.h2`
font-family: "Karla", sans-serif;
color: ${props => props.theme.text};
text-align: center;
`

const Work = styled.h2`
font-family: "Karla", sans-serif;
color: ${props => props.theme.text};

text-align: center;
position: absolute;
top: 93%;

bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const Skills = styled.h2`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
left: 95%;
`

const Main = (props) => {
    return (
        <Box>
            <Logo>FH</Logo>
            <Avatars>
                <img width={250} height={250} src={Avatar} alt="avatar img" />
            </Avatars>
            <Line />  
            <Sidebar>
                <NavLink style={{color:"inherit"}} target="_blank" to={{pathname:"https://github.com/Tanzkalmar35"}}>
                    <Github width={25} height={25} fill={ props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
                </NavLink>
            </Sidebar>
            <Line2 />
            <Line3 />
            <About>About me</About>
            <Work>My Work</Work>
            <Skills>Skills</Skills>
        </Box>
    )
}

export default Main