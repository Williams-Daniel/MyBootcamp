import styled from "styled-components";
import Hero from "./Hero";
import LatestNews from "./LatestNews";
import Drivers from "./DrivingLoafers";
import Artisan from "./Artisan";

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Hero />
        <LatestNews/>
        <Drivers/>
        <Artisan/>
      </Container>
    </div>
  );
};

export default HomeScreen;

const Container = styled.div`
width: 100%;
min-height: 100vh;
`