import styled from "styled-components"
import img1 from "../Assets/ArtisanAsset/how_we_work_carmina_shoes_1.webp"
import img2 from "../Assets/ArtisanAsset/how_we_work_carmina_shoes_2.webp"
import img3 from "../Assets/ArtisanAsset/how_we_work_carmina_shoes_4.webp"
import img4 from "../Assets/ArtisanAsset/how_we_work_carmina_shoes_5.webp"
import img5 from "../Assets/ArtisanAsset/how_we_work_carmina_shoes_6.webp"



const Artisan = ()=>{

    const myArr = [{Img:img1},{Img:img2},{Img:img3},{Img:img4},{Img:img5}]

    return(
        <div>
<Container>
    <Main>
    <Top>
        <Title>GIANTSHOEMAN</Title>
        <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt quo dolores enim dolorem commodi quidem eos facere neque delectus ex asperiores ipsam dicta fuga dolor adipisci, officia . Aperiam sunt quo dolores enim dolorem commodi quidem eos facere neque delectus ex asperiores ipsam dicta fuga dolor adipisci.</Content>
    </Top>
    <Bottom>
        {
            myArr.map((props)=>(
                <Img src={props.Img}/>
            ))
        }
    </Bottom>
    </Main>
</Container>
        </div>
    )
}

export default Artisan

const Container = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: space-between;
/* align-items: center; */
/* flex-direction: column; */
/* background-color: antiquewhite; */
`
const Top = styled.div`
width: 70%;
height: 20%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* background-color: antiquewhite; */
`
const Title = styled.div`
font-size: 20px;
`
const Content = styled.div`
text-align: center;
`
const Bottom = styled.div`
width: 100%;
height: 40%;
display: flex;
justify-content: space-between;
margin-top: 40px;

`
const Main = styled.div`
width: 99.5%;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Img = styled.img`
width: 248px;
height: 280px;
object-fit: contain;
`


