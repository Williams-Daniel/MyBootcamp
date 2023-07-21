import styled from "styled-components"
import img1 from "../Assets/LatestComp/CelesteBLK1_360x.jpeg"
import img2 from "../Assets/LatestComp/GuetheMP1_360x.jpeg"
import img3 from "../Assets/LatestComp/2020.5.13_300x.jpeg"
import img4 from "../Assets/LatestComp/EbonyMPB1_360x.jpeg"

const LatestNews = ()=>{

const myArr = [{Img:img1,name:"Black Oxford",price:"275"},{Img:img2,name:"Black Oxford",price:"275"},{Img:img3,name:"Black Oxford",price:"275"},{Img:img4,name:"Black Oxford",price:"275"}]

    return(
        <div>
            <Container>
                <Main>
                    <Top>
                        <Title>LAST NEWS</Title>
                        <Text>Discover new model now available in our website</Text>
                    </Top>
                    <Bottom>
                    <MenText>Men</MenText>
                    <Shoes>
                        {
                            myArr.map((props)=>(
                                <Card>
                        <Img src={props.Img}/>
                        <Text2>{props.name}<div>{props.price}</div></Text2>
                        </Card>
                            ))
                        }
                    </Shoes>
                    </Bottom>
                </Main>
            </Container>
        </div>
    )
}

export default LatestNews

const Container = styled.div`
width: 100%;
height: 700px;
display: flex;
justify-content: center;
/* background-color: brown; */

`
const Main = styled.div`
width: 90%;
height: 100%;
`
const Top = styled.div`
height: 10%;
width: 100%;
margin-top: 100px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`
const Title = styled.div`
font-size: 23px;
`
const Text2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Card = styled.div`
height: 100%;
width: 250px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`
const Text = styled.div`
margin-top: 10px;
`
const Bottom = styled.div`
width: 100%;
height: 60%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* background-color: grey; */
`
const MenText = styled.div`
margin-top: 10px;
`
const Shoes = styled.div`
width: 100%;
height: 95%;
display: flex;
justify-content: space-between;
/* background-color: red; */
`
const Img = styled.img`
width: 250px;
height: 280px;
border-radius: 3px;
/* background-color: white; */
margin-top: 20px;
`