import react from "react";
import styled from "styled-components"
import {motion} from "framer-motion"
import { LightTheme, DarkTheme } from "./Themes";
import { Github } from "./AllSvgs";
import {NavLink} from "react-router-dom"

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

const Logo = styled.h1`
display: inline-block;
color: ${props => props.theme.text};
font-family: "Pacifico", cursive;

position: fixed;
left: 0.5rem;
z-index: 3;
`

const Main = (props) => {
    return (
        <Box>
            <Logo>FH</Logo>
            <Line />  
            <NavLink style={{color:"inherit"}} target="_blank" to={{pathname:"https://github.com/Tanzkalmar35"}}>
                <Github width={25} height={25} fill={ props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </Box>
        
    )
}

export default Main