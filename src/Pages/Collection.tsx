import styled from "styled-components"
import  img from "../Assets/banner_cordovan.webp"


const Collection = ()=>{
    return(
        <div>
            <Container>
            {/* <HeroImg src={img}/> */}
            <HeroContainer>
                <Main>
                    <Holder>
                    <Title>The giantShoeman</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloremque </Text>
                    <Button>VIEW COLLECTION</Button>
                    </Holder>
                </Main>
                
            </HeroContainer>
            </Container>
        </div>
    )
}

export default Collection
const Container = styled.div`
width: 100%;
height: 518px;
background-color: red;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
`
const HeroContainer = styled.div`
width: 100%;
height: 450px;
background-color:transparent;
display: flex;
/* background-color: blanchedalmond; */
/* justify-content: center; */
/* align-items: center; */

`
const Main = styled.div`
width: 100%;
height: 518px;
display: flex;
/* background-color: aliceblue; */
/* justify-content: center; */
/* align-items: center; */
`
const Holder = styled.div`
display: flex;
flex-direction: column;
margin-left: 50px;
justify-content: center;
/* align-items: center; */
width: 40%;
/* text-align: center; */
/* margin-left: 20px; */
color: white;
/* background-color: red; */

`
const Title = styled.div`
font-size: 16px;
color: #1b1b1b;
`
const Text = styled.div`
color: #1b1b1b;
font-size: 30px;
font-family: "TimesNewRomanMTStd-Italic", sans-serif;
/* width: 350px; */
margin-top: 6px;
`
const Button = styled.div`
width: 200px;
height: 40px;
background-color: #1b1b1b;;
/* border: 1px solid white; */
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 100;
font-size: 13px;
margin-left: 10px;
`