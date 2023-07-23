import styled from "styled-components"
import {AiOutlineInstagram} from "react-icons/ai"
import img1 from "../Assets/driving_loafers_porsche_911_desk.webp"
import img2 from "../Assets/Men_collection_winter_2022.jpeg"
import img3 from "../Assets/chelsea_boot_carmina_desk.webp"
import img4 from "../Assets/Boots.jpeg"

const Giant = ()=>{
    const myArr = [{Img:img1},{Img:img2},{Img:img3},{Img:img4}]

    return(
        <div>
            <Container>
                <Top>
                    <Holder>
                    <Title>#The GiantShoemaker</Title>
                    <Content>Get inspired by other customers and do not miss the news by following us on Instagram.</Content>
                    </Holder>
                </Top>
                <Middle>
                    <Holder2>
                    {
                        myArr.map((props)=>(
                            <Image src={props.Img}/>
                        ))
                    }
                    </Holder2>
                </Middle>
                <Bottom>
                    <Icon/>
                    <IconText>INSTAGRAM</IconText>
                <Button>MEN'S SELECTION</Button>
                </Bottom>
            </Container>
        </div>
    )
}

export default Giant

const Container  =styled.div`
width: 100%;
height: 700px;
/* background-color: purple; */
`
const Top  =styled.div`
width: 100%;
height: 20%;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
`
const Title  =styled.div`
font-size: 25px;

`
const Content  =styled.div`
text-align: center;
`
const Bottom  =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Middle  =styled.div`
height: 300px;
/* background-color: brown; */
display: flex;
justify-content: center;
align-items: center;
`
const Icon  =styled(AiOutlineInstagram)`
font-size: 30px;
margin-top: 20px;
`
const Image  =styled.img`
height: 230px;
width: 270px;
object-fit: cover;
`
const IconText  =styled.div`
font-size: 15px;
`
const Holder  =styled.div`
width: 420px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Holder2  =styled.div`
width: 98%;
display: flex;
justify-content: space-between;
/* background-color: blue; */
`
const Button = styled.div`
width: 200px;
height: 40px;
border: 1px solid black;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 100;
font-size: 13px;
margin-left: 10px;
`