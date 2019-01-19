import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Office from "../../assets/office.jpg";
import Profile from "../../assets/maxresdefault.jpg";
import Team from "../../assets/team.jpg";
import Shake from "../../assets/shake.jpg";
import Footer from "./Footer";
import Container from './Container';
import { NavbarStyle, NavBackground, Navbar } from './Navbar';
import { Grid2, Column, Grid } from './Grid';


const ContactStyle = styled.div`
    background-color: white;
    margin-top: 0px;
    text-align: left;
    color: black;
    padding: 30px;
    h1, h4, p{
        font-family: serif;
    }
    h1, h3{
        color: #A7A7A7;
        text-align: center;
        margin: 0;
    }
    label{
        padding: 10px;
        text-align: right;
    }
    
`;

const Formstyle = styled.form`
    min-width: 100%;
    background-color: white;
    padding: 40px 40px 76px 40px;
    border: 2px dotted black;
    box-shadow: 0px 4px 8px 2px #DEDEDE;
    position: relative;
    text-align: left;
    /* padding: 24px; */
    z-index: 5;   
    input{
      margin: 5px;
      border: 0px solid transparent;
      // border-bottom: 1px solid #FFFFFF;
      border-radius: 2px;
      padding: 6px;
      height: 5vh;
      background-color: #EFEFEF;
      width: 350px;
      color: white;
    }

    input:focus{
      border-color: transparent;

    }
    ::placeholder { 
      color: white;
      opacity: 1; 
    }

    textarea{
      margin: 5px;
      border: 0px solid transparent;
      border-radius: 2px;
      padding: 6px;
      background-color: #EFEFEF;
      width: 350px;
      height: 15vh;
    }
    input[type="submit"]{
      padding: 10px 30px;
      text-align: center;
      border: 2px solid transparent;
      border-radius: 22px;
      cursor: pointer;
      font-size: x-small;
      background-color: #6132E4;
      transition: 0.3s linear;
      color: white;
      margin-right: 70px;
      width: 130px;
      margin-bottom: 70px;
      float: right;
    }
  
    @media(width:640px ){
      position: relative !important
      z-index: 5;
      textarea, input{
        width: 185px;
      }
    }

    @media(width:768px ){
      position: relative !important
      z-index: 5;
      textarea, input{
        width: 185px;
      }
    }

    @media(width:600px ){
      position: relative !important
      z-index: 5;
      textarea, input{
        width: 185px;
      }
    }
  @media(max-width:780px ){
    position: inherit;
    textarea, input{
      width: 185px;
    }
  }
  
  @media(width:800px ){
    position: relative;
    textarea, input{
      width: 250px;
    }
  }
`;

const UpperDivStyle = styled.div`
  background-color: #B40B45;
  min-height: 50vh;
  margin-top: 50px;
  color: white;
  hr{
        background-color: #FD745E;
        padding: 1.5px;
        border: 2px solid transparent;
        border-radius: 10px;
  }
  
  .second-h2{
      margin-top: 45px;
  }
  @media(max-width: 650px){
    .second-h2{
        margin-top: -10px;
    }
  }
`;

const LowerDivStyle = styled.div`
  background-color: #0A0130;
  min-height: 20vh;
  padding: 30px;
  color: #FE755C;
  text-align: left;
  h1{
    text-align: -webkit-center;
  }
  
  img{
    height: 250px;
    // margin: 20px;
  }

  p{
    text-align: left;
    // margin: 20px;
    color: white;
  }

  a{
    text-align: left;
    cursor: pointer;
    font-size: x-small;
    transition: 0.3s linear;
    color: #FF765D;
   }

  @media(max-width: 600px){
      img{
          width: 100%;
      }
  }

`;


const About = () => (    
    <Fragment>
    <Navbar/>
    <UpperDivStyle>
        <Container>
            <Grid2>
                <Column>
                    <h2>OUR SERVICES</h2>
                </Column>
                <Column>
                    <h2 className="second-h2">We love what we do and it shows.</h2>
                    <hr/>
                    <p>Over the years, we have worked with many businesses in diverse industries.
                        We are proud of our portfolio and we know you'll love it too.
                        Feel free to explore our Digital marketing, Branding, Social Media Marketing, 
                        SEO and Content Creation and Strategy.
                    </p>
                </Column>
            </Grid2>
        </Container>
    </UpperDivStyle>
    <ContactStyle>
      <Container>
          <h1>Full Service Digital Marketing Agency</h1>
          <h3>Full Service Digital Marketing Agency</h3>
        <Grid2>
          <Column>
            <p>
                We work with businesses and non profits harness the growing power and market
                of digital marketing. Helping and working with clients to
                deliver an increase in leads, brand awareness,
                growing sales and support other business goals.
            </p>
            <p>
                We have a great mix of clientele which includes
                some of the world's most famous brands and
                local SME's who operate across many sectors.
            </p>
            <p>
                We work with you as a partner, this way we not only
                deliver you great results. But also foster a lasting relationship, 
                because it is no secret that your success is good for us too.

            </p>
          </Column>
          <Column>
            <img src={Office} alt=""/>
          </Column>
        </Grid2>
      </Container>
    </ContactStyle>
    <LowerDivStyle>
        <Container>
            <Grid>
                <Column>
                    <h2>COMPANY PROFILE</h2>
                    <img src={Profile} alt=""/>
                    <p>Get to know us more. Our Company Profile page contains
                    our corporate Vision and Mission statements, Key clients and Highlights
                    </p>
                    <a href="">Learn More >>></a>
                </Column>
                <Column>
                    <h2>OUR TEAM</h2>                
                    <img src={Team} alt=""/>
                    <p>Get to know us more. Our Company Profile page contains
                    our corporate Vision and Mission statements, Key clients and Highlights
                    </p>
                    <a href="">Learn More >>></a>
                </Column>
                <Column>
                    <h2>NEWS</h2>                
                    <img src={Shake} alt=""/>
                    <p>Get to know us more. Our Company Profile page contains
                    our corporate Vision and Mission statements, Key clients and Highlights
                    </p>
                    <a href="">Learn More >>></a>
                </Column>
            </Grid>
        </Container>
    </LowerDivStyle>
    <Footer />
    </Fragment>
);

  export default About;