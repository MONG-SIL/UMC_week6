import { Link } from "react-router-dom"
import styled from "styled-components";

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#ffffffb7;
    padding: 8px 12px;
`

const Navmenu = styled(Link)`
color:black;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;

&:hover{
    transform: scale(1.3);
},
&:focus{
   color: blue;
}
&:active{
   color: red;
};
`


function Navigation () {
    
    //스타일 지정하고 
    return(
        <Navbar>
        <Navmenu to={'/'}>UMC Movie HOME</Navmenu>
        <Navmenu to={'/signup'}>회원가입</Navmenu>
        <Navmenu to={'/popular'}>Popular</Navmenu>
        <Navmenu to={'/nowplaying'}>Now Playing</Navmenu>
        <Navmenu to={'/toprated'}>Top Rated</Navmenu>
        <Navmenu to={'/upcoming'}>Upcoming</Navmenu>
        </Navbar>
    )
}



export default Navigation;