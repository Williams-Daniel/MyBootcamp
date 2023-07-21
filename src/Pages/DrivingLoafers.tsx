import styled from "styled-components"
import img from "../Assets/driving_loafers_porsche_911_desk.webp"


const Drivers = ()=>{
    return(
        <div>
            <Container>
            <HeroImg src={img}/>
            <HeroContainer>
                <Main>
                    <Holder>
                    <Title>DRIVING LOAFERS</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloremque facilis praesentium consequuntur dolor! Saepe culpa expedita hic nemo at eligendi eius soluta explicabo, sint nisi, eaque, sed velit laboriosam.</Text>
                    <Button>DISCOVER</Button>
                    </Holder>
                </Main>
                
            </HeroContainer>
            </Container>
        </div>

    )
}

export default Drivers

const Container = styled.div`
width: 100%;
height: 600px;
background-color: purple;
`
const HeroImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const HeroContainer = styled.div`
width: 100%;
height: 600px;
background-color: rgb(0, 0, 0,0.3);
position: relative;
bottom: 604px;
z-index: 2;
display: flex;
justify-content: center;
align-items: center;

`
const Main = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Holder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70%;
text-align: center;
margin-left: 20px;
color: white;
/* background-color: red; */

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