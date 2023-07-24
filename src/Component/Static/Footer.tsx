import styled from "styled-components";
import { AiOutlineArrowDown, AiOutlineInstagram } from "react-icons/ai";
import { BsArrow90DegDown, BsArrowDown, BsArrowDownShort, BsFacebook, BsPaypal, BsTwitter, BsYoutube } from "react-icons/bs";
import { ImPinterest2 } from "react-icons/im";
import img from "../../Assets/Giantshoemancrop-removebg-preview.png";
import img1 from "../../Assets/payment03.svg";
import img2 from "../../Assets/pay-pal-footer.svg"
import img3 from "../../Assets/klarna_dress_shoes.svg";
import GFooter from "../Reuse/GlobalFooter";

const Footer = () => {
  return (
    <div>
      <Container>
        <Top>
          <IconHolder>
            <IconContainer>
              <Icon />
            </IconContainer>
            <IconContainer>
              <Icon2 />
            </IconContainer>
            <IconContainer>
              <Icon3/>
            </IconContainer>
            <IconContainer>
              <Icon4 />
            </IconContainer>
            <IconContainer>
              <Icon5 />
            </IconContainer>
          </IconHolder>
        </Top>
        <Middle>
          <MiddleHolder>
            <GFooter
            title="Men"
            content1="Cordovan shoes"
            content2="Oxford"
            content3="Derby shoes"
            content4="Loafer"
            content5="Monk strap"
            content6="Boots"
            content7="Exotic skin"
            />
            <GFooter
            title="THE GIANT SHOEMAKER"
            content2="Our story"
            content1="How we make our shoes"
            content3="Stores"
            content4="Event & Exhibition"
            content5="Store locator"
            content6="Blog"
            />
            <GFooter
            title="CUSTOMER SERVICE"
            content1="Contact"
            content2="Shipping"
            content3="Return"
            content4="Payment method"
            content5="Size guide"
            />
           <PayHolder>
           <GFooter
            title="PAYMENT METHODS"
            />
            <Pay>
              <Klana src={img3}/>
              <Three src={img1}/>
              <Paypal src={img2}/>
            </Pay>
           </PayHolder>
          </MiddleHolder>
        </Middle>
        <Bottom>
          <Left>TheGiantShoeman Shoemaker 2023 ©</Left>
          <BMiddle>
          <Holder>
                        <Logo src={img}/>
                        </Holder>
            <LogoText color="white">THE GIANT SHOEMAN</LogoText>
          </BMiddle>
          <Right>
          <Button>English<div style={
            {marginLeft:"2px"}
          }><AiOutlineArrowDown/></div></Button>
          <Button>EUR<div style={
            {marginLeft:"2px"}
          }><AiOutlineArrowDown/></div></Button>
          </Right>
        </Bottom>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 650px;
  background-color: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const Top = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 0.01px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: purple; */
`;
const Middle = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #1f1212; */
`;
const Bottom = styled.div`
  width: 90%;
  border-top: 0.01px solid white;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: purple; */
`;
const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  border: 1.5px solid white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  /* background-color: red; */
`;
const Icon = styled(AiOutlineInstagram)`
  color: white;
  font-size: 20px;
`;
const Icon2 = styled(ImPinterest2)`
  color: white;
  font-size: 20px;
`;
const Icon3 = styled(BsYoutube)`
  color: white;
  font-size: 18px;
`;
const Icon4 = styled(BsFacebook)`
  color: white;
  font-size: 15px;
`;
const Icon5 = styled(BsTwitter)`
  color: white;
  font-size: 15px;
`;
const MiddleHolder = styled.div`
  width: 90%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  /* background-color: burlywood; */
`;
const Left = styled.div`
  color: white;
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 13px;
  /* background-color: purple; */
`;
const BMiddle = styled.div`
width: 50%;
height: 100%;
/* background-color: red; */
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`;
const Right = styled.div`
width: 30%;
height: 100%;
/* background-color: brown; */
display: flex;
align-items: center;
`;
const LogoText = styled.div`
  font-size: 25px;
  color: white;
`;
const Button = styled.div`
width: 130px;
height: 40px;
border: 1px solid white;
/* margin-top: 40px; */
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
font-size: 15px;
margin-right: 10px;
color: white;
`
const Logo = styled.img`
height: 45px;
object-fit: contain;
color: white;
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

const PayHolder = styled.div`
width: 270px;
height: 330px;
/* background-color: purple; */
display: flex;
/* align-items: center; */
flex-direction: column;
`
const Pay = styled.div`
width: 80%;
height: 35%;
/* background-color: black; */
display: flex;
align-items: center;
flex-wrap: wrap;
margin-top:30px;
`
const Klana = styled.img`
object-fit: contain;
height: 21px;
`
const Three = styled.img`
object-fit: contain;
height: 27px;
margin-left: 5px;
`
const Paypal = styled.img`
object-fit: contain;
height: 20px;
`
