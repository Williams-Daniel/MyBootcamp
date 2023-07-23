import styled from "styled-components"
import img from "../Assets/CArmina's hero.webp"
import {SlArrowLeft} from "react-icons/sl"


const Hero = ()=>{

    return(
        <div>
            <Container1>
            <HeroImg src={img}/>
            <HeroContainer>
                    <Icon/>
                <Main>
                    <Holder>
                    <Title>SUMMER SALE</Title>
                    <Text>You will find up to 25% off a Selection of our shoe</Text>
                    <ButtonHolder>
                <Button1>MEN'S SELECTION</Button1>
                <Button>MEN'S SELECTION</Button>
                </ButtonHolder>
                    </Holder>
                </Main>
                
            </HeroContainer>
            </Container1>
        </div>
    )
}

{/* <Container1>
            <HeroImg src={img1}/>
            <HeroContainer>
                    <Icon/>
                <Main1>
                    <Holder>
                    <Title>SUMMER SALE</Title>
                    <Text1>You will find up to 25% off a Selection of our shoe</Text1>
                    <ButtonHolder>
                <Button1>MEN'S SELECTION</Button1>
                <Button>MEN'S SELECTION</Button>
                </ButtonHolder>
                
                    </Holder>
                </Main1>
                
            </HeroContainer>
            </Container1> */}

export default Hero

const Container1 = styled.div`
width: 100%;
height: 600px;
background-color: purple;
`
const HeroImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
/* position: ; */
`
const Icon = styled(SlArrowLeft)`
font-size: 40px;
color: #c2a590;

`
const HeroContainer = styled.div`
width: 100%;
height: 600px;
background-color: rgb(0, 0, 0,0.3);
position: relative;
bottom: 604px;
z-index: 5;
display: flex;
/* justify-content: center; */
align-items: center;

`
const Main = styled.div`
width: 85%;
height: 100%;
display: flex;
/* justify-content: center; */
align-items: center;
`
const Holder = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
margin-left: 20px;
color: white;
`
const Title = styled.div`
font-size: 30px;
`
const Text = styled.div`

`
const Button = styled.div`
width: 200px;
height: 40px;
border: 1px solid white;
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 100;
font-size: 13px;
margin-left: 10px;
`
const Button1 = styled.div`
width: 200px;
height: 40px;
border: 1px solid white;
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 100;
font-size: 13px;
`
const ButtonHolder = styled.div`
display: flex;
`