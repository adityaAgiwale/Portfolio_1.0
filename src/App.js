import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { BsMouse } from "react-icons/bs";
import { FeaturedProjects } from "./Data/featuredProjects";

export default function App() {
  function sendMailTo() {
    window.location = "mailto:adityaagiwale@gmail.com";
  }

  return (
    <Wrapper>
      {/* <Spline scene="https://prod.spline.design/wdNf2pJMIs9IiY0d/scene.splinecode" /> */}
      <HomeContainer>
        <h1>
          Hi, I am Aditya <br />
          An User Interface & Web Developer
        </h1>
        <p>
          I help businesses and companies reach their goals by designing
          <br />
          user-centric digital products & interactive experiences.
        </p>
        <button onClick={sendMailTo}>
          <FiMail /> Hire Me
        </button>
        {/* <a href="/path#featuredProjects">
          <BsMouse /> Featured Projects
        </a> */}
      </HomeContainer>

      {/* Featured POrojects */}
      <h1 style={{ textAlign: "center", fontFamily: "Manrope" }}>
        Featured Projects
      </h1>
      <ScrollingWrapper>
        {/* <div id="/path#featuredProjects"></div> */}
        {Object.values(FeaturedProjects).map((value, index) => {
          return (
            <Card key={index}>
              <FeaturedImg src={value.imgSrc} alt="banner" />
              <Featured_Project_Name>{value.projectName}</Featured_Project_Name>
              <Featured_Project_Tech>
                ( {value.tech[index]}, {value.tech[index + 1]},
                {value.tech[index + 2]} )
              </Featured_Project_Tech>
              <Featured_Project_Desc>{value.desc}</Featured_Project_Desc>
            </Card>
          );
        })}
      </ScrollingWrapper>

      {/* Conatct Us */}
      <ContactUs>
        <h1>Contact Us</h1>
        <p>
          If you are looking to hire a website develper, I’m currently available
          for work
        </p>
        <button>
          <FiMail />
          adityaagiwale@gmail.com
        </button>
      </ContactUs>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const HomeContainer = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 50px 50px;
  margin: 0;

  h1 {
    color: white;
    text-align: center;
    font-family: "Manrope", sans-serif;
    font-weight: bold;
    margin: 0px;
    font-size: 40px;
  }

  p {
    color: #959595;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 22px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 280px;
    height: 60px;
    background: #1f3e75;
    border: none;
    backdrop-filter: blur(4px);
    border-radius: 10px;
    font-size: 20px;
    color: white;

    font-weight: 700;
    margin-top: 3rem;

    :hover {
      border: 2px solid rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }
  }

  a {
    color: white;
    margin: 100px auto;
    text-decoration: none;
    font-size: 20px;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
  }
`;

const ScrollingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 0 0 33.333333%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const Featured_Project_Name = styled.h2`
  text-align: left;
  padding-left: 20px;
  font-weight: 700;
  text-transform: capitalize;
  margin: 10px 0;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin-bottom: 10px;
  }
`;

const Featured_Project_Desc = styled.p`
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
  padding-left: 20px;
  text-transform: capitalize;
  margin: 10px 0px 30px 0px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin-bottom: 10px;
  }
`;

const Featured_Project_Tech = styled.p`
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
  padding-left: 20px;
  text-transform: capitalize;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin-bottom: 10px;
  }
`;

const FeaturedImg = styled.img`
  object-fit: cover;
  width: 400px;
  height: 300px;
  border-radius: 14px;

  :hover {
    box-shadow: 8px 7px 25px -1px rgba(154, 218, 255, 0.83);
    -webkit-box-shadow: 8px 7px 25px -1px rgba(154, 218, 255, 0.83);
    -moz-box-shadow: 8px 7px 58px -1px rgba(154, 218, 255, 0.83);
    cursor: pointer;
  }
`;

const ContactUs = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;

  h1 {
    color: white;
  }

  p {
    color: white;
    text-align: center;
    margin: 0;
    font-size: 14px;
    color: #959595;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 350px;
    height: 45px;
    background: #1f3e75;
    border: none;
    backdrop-filter: blur(4px);
    border-radius: 10px;
    font-size: 18px;
    color: white;
    margin-top: 50px;
    font-weight: 400;

    :hover {
      border: 2px solid rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }
  }
`;
