import styled from "styled-components"
import img from "../../Assets/Giantshoemancrop-removebg-preview.png"
import {CiSearch,CiHeart} from "react-icons/ci"
import {IoIosContact} from "react-icons/io"
import {HiOutlineShoppingBag} from "react-icons/hi"
import  { useState } from "react"
import { Link } from "react-router-dom"




const Header = ()=>{
    const [show,setShow] = useState<boolean>(false)
    const onShow = ()=>{
        if(window.scrollY >= 50){
            setShow(true)
        }else{
            setShow(false)
        }


    }
window.addEventListener("scroll",onShow)
    return(
   
            <div>
            {
                show?(
                    <Container bg="#1B1B1B">
                <Main>
                    <Left>
                        <Nav>Shoes</Nav>
                        <Nav1>About</Nav1>
                        <Nav1>Contacts</Nav1>
                    </Left>
                    <Middle>
                        <Link to="/" style={{color:"white"}}>
                        <Holder>
                        <Logo src={img}/>
                        </Holder>
                        </Link>
                        <LogoText color="white">THE GIANT SHOEMAN</LogoText>
                    </Middle>
                    <Right>
                    <SearchHolder>
                        <Icon/>
                        <SearchText>Search</SearchText>
                        </SearchHolder>
                         <Link to="/signup" style={{color:"white"}}><LoginIcon/></Link>
                         <FavIcon/>
                         <CartIcon/>
                    </Right>
                </Main>
            </Container>
                ):(
                    <Container bg="transparent">
                <Main>
                    <Left>
                        <Nav>Shoes</Nav>
                        <Nav1>About</Nav1>
                        <Nav1>Contacts</Nav1>
                    </Left>
                    <Middle>
                    <Link to="/" style={{color:"white"}}>
                        <Holder>
                        <Logo src={img}/>
                        </Holder>
                        </Link>
                        <LogoText color="white">THE GIANT SHOEMAN</LogoText>
                    </Middle>
                    <Right>
                    <SearchHolder>
                        <Icon/>
                        <SearchText>Search</SearchText>
                        </SearchHolder>
                        <Link to="/signup" style={{color:"white"}}><LoginIcon/></Link>
                         <FavIcon/>
                         <CartIcon/>
                    </Right>
                </Main>
            </Container>
                )
            }
        </div>
        )
    
}

export default Header
const Container = styled.div<{bg:string}>`
width: 100%;
height: 90px;
display: flex;
justify-content: center;
background-color: ${({bg})=>bg};
color: white;
/* border-bottom: 1px solid darkgrey; */
position: fixed;
z-index: 10;

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: brown */
;
`
const Left = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const Middle = styled.div`
width: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: purple; */

`
const Right = styled.div`
width: 230px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Nav1 = styled.div`
margin: 0 15px;
`
const Holder = styled.div`
width:40px;
height: 50px;
border-radius: 0 0 50px 30px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`
const Nav = styled.div``
const Logo = styled.img`
height: 45px;
object-fit: contain;
color: white;
`
const LogoText = styled.div<{color:string}>`
font-size: 20px;
font-weight: 500;
color: ${({color})=>color};
`
const SearchHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const SearchText = styled.div`
margin-left: 2px;
`
const LoginIcon = styled(IoIosContact)`
font-size: 25px;
`
const FavIcon = styled(CiHeart)`
font-size: 25px;
`
const CartIcon = styled(HiOutlineShoppingBag)`
font-size: 22px;
`
const Icon = styled(CiSearch)`
font-size: 25px;
`