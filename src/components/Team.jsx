import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Timmy from "../../assets/timmy.jpg";
import Toyosi from "../../assets/toyosi.jpg";
import Opeyemi from "../../assets/opeyemi.jpg";
import Aghama from "../../assets/aghama.jpg";
import Sanjay from "../../assets/sanjay.jpg";
import Jack from "../../assets/jack.jpg";
import Footer from "./Footer";
import Container from './Container';
import { NavbarStyle, NavBackground, Navbar } from './Navbar';
import { Grid2, Column, Grid7, Grid } from './Grid';


const ContactStyle = styled.div`
    background-color: white;
    margin-top: 0px;
    text-align: left;
    color: #898989;
    padding: 30px;
    p{
        font-family: serif;
        margin-top: -14px;
        padding-bottom: 20px;
    }
    h3, p{
      margin-left: 10px;
    }
    label{
        padding: 10px;
        text-align: right;
    }
    
    .plaque{
        border: 3px solid white;
        box-shadow: 2px 2px 2px 2px white;
    }

    .photo-plaque{
        border-radius: 3%;
        box-shadow: 0px 0px 2px 2px #CCCCCC;
        margin-bottom: 76%;    
    }
    
    .photo-plaque > img{
        height: 203px;
        border-top-left-radius: 3%;
        border-top-right-radius: 3%;
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
  background-color: #79A73F;
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
        margin-top: -34px;
    }
  }
`;

const LowerDivStyle = styled.div`
  background-color: #B9B9B9;
  margin-top: -20vh;
  min-height: 40vh;
  padding: 30px;
  color: white;
  text-align: center;
  p, h3{
    text-align: -webkit-center;
    margin: 40px 0;
  }
  
a{
    padding: 10px 30px;
    text-align: center;
    border: 2px solid transparent;
    border-radius: 22px;
    cursor: pointer;
    font-size: small;
    background-color: #FE7C65;
    transition: 0.3s linear;
    color: white;
   }

  @media(max-width: 600px){
      img{
          width: 100%;
      }
  }

`;


const Team = () => (    
    <Fragment>
    <Navbar/>
    <UpperDivStyle>
        <Container>
            <Grid2>
                <Column>
                    <h2>OUR TEAM</h2>
                </Column>
                <Column>
                    <h2 className="second-h2">THE FACES BEHIND THE SCENES</h2>
                    <hr/>
                    <p>Our mission is to deliver exceptional ROI to our clients. Through metric driven digital
                        marketing campaigns and beautiful responsive websites
                    </p>
                </Column>
            </Grid2>
        </Container>
    </UpperDivStyle>
    <ContactStyle>
      <Container>
        <Grid>
          <Column>
            <div className="plaque">
              <div className="photo-plaque">
                  <img src={Timmy} alt=""/>
                   <h3>Aduby Timmy</h3>
                   <p>UI/UX Designer</p>
              </div>
            </div>
          </Column>
          <Column>
            <div className="plaque">
                <div className="photo-plaque">
                    <img src={Toyosi} alt=""/>
                  <h3>Oluwatoyosi Oyegoke</h3>
                  <p>Front-end Developer</p>
                </div>
            </div>
          </Column>
          <Column>
            <div className="plaque">
                <div className="photo-plaque">
                    <img src={Opeyemi} alt=""/>
                   <h3>Opeyemi Olaoye</h3>
                   <p>UI/UX Designer</p>
                </div>
            </div>
          </Column>
          <Column>
            <div className="photo-plaque">
                <img src={Aghama} alt=""/>
                   <h3>Aduby Jesurobo</h3>
                   <p>UI/UX Designer</p>
            </div>
          </Column>
          <Column>
            <div className="photo-plaque">
                <img src={Jack} alt=""/>
                   <h3>Jack Slack</h3>
                   <p>Human Resource Manager</p>
            </div>
          </Column>
          <Column>
            <div className="photo-plaque">
                <img src={Sanjay} alt=""/>
                   <h3>Rajesh Sanjay</h3>
                   <p>Project Manager</p>
            </div>
          </Column>
        </Grid>
      </Container>
    </ContactStyle>
    <LowerDivStyle>
        <Container>
            <h1>Take Your Business Forward</h1>
            <h3>Are you ready To begin?</h3>
            <Link to="/project">START A NEW PROJECT</Link>
        </Container>
    </LowerDivStyle>
    <Footer />
    </Fragment>
);

  export default Team;