import styled from "styled-components";
import Hero from "./Hero";
import LatestNews from "./LatestNews";
import Drivers from "./DrivingLoafers";
import Artisan from "./Artisan";
import Collection from "./Collection";
import Giant from "./GiantShoeMan";
import Header from "../Component/Static/Header";
import Footer from "../Component/Static/Footer";
import GFooter from "../Component/Reuse/GlobalFooter";

const HomeScreen = () => {

 

  return (
    <div>
      <Container>
        <Header/>
        <Hero/>
        <LatestNews/>
        <Drivers/>
        <Artisan/>
        <Collection/>
        <Giant/>
        <Footer/>
      </Container>
    </div>
  );
};

export default HomeScreen;

const Container = styled.div`
width: 100%;
min-height: 100vh;
`





