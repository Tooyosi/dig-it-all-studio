import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Office from "../../assets/office.jpg";
import SVG from "svg-inline-react";
import World from "../../assets/world.svg";
import Project from "../../assets/project.svg";
import Certificate from "../../assets/certificate.svg";
import Footer from "./Footer";
import Container from './Container';
import { NavbarStyle, NavBackground, Navbar } from './Navbar';
import { Grid8, Column, Grid7 } from './Grid';


const ContactStyle = styled.div`
    background-color: white;
    margin-top: 0px;
    text-align: left;
    color: black;
    padding: 30px;
    h1, h4, p{
        font-family: serif;
        margin-top: -14px;
    }
    label{
        padding: 10px;
        text-align: right;
    }
    h2{
        margin--top: 0;
    }
    
`;

const UpperDivStyle = styled.div`
  background-color: #79A73F;
//   height: 50vh;
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
  background-color: white;
  min-height: 20vh;
  padding: 30px;
  color: black;
  text-align: center;
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

  .svg-div{
    border-radius: 100%;
    border: 3px solid #FF9683;
  }
  .svg-inner{
    border-radius: 100%;
    margin: 18px;
    padding: 34px;
    max-height: 248px;
    border: 7px solid #BCA9F3;
  }
  .svg-inner > p{
      margin-top: 40px;
      color: black;
      text-align: center;
      font-weight: bold;
  }

`;


const OurProfile = () => (    
    <Fragment>
    <Navbar/>
    <UpperDivStyle>
        <Container>
                <Column>
                    <h2>ABOUT DIG-IT-ALL</h2>
                </Column>
        </Container>
    </UpperDivStyle>
    <ContactStyle>
      <Container>
        <Grid8>
          <Column>
            <img src={Office} alt=""/>
          </Column>
          <Column>
            <h2>Company Profile</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.</p> 
            <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.</p> 
          </Column>
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
            <h2>Our Mission</h2>
            <p>To help businesses suceed through excellent digital services, focused on results</p>
            <h2>Our Vision</h2>
            <p>The worlds biggest digital agency</p>
          </Column>
        </Grid8>
      </Container>
    </ContactStyle>
    <LowerDivStyle>
        <Container>
            <Grid7>
                <Column>
                    <div className="svg-div">
                        <div className="svg-inner">
                            <SVG className="svg" src={Project} />
                            <p>59</p>
                        </div>
                    </div>
                    <h3>Projects Launched</h3>
                </Column>
                <Column>
                    <div className="svg-div">
                        <div className="svg-inner">
                            <SVG className="svg" src={Certificate} />
                            <p>12</p>
                        </div>
                    </div>
                    <h3>Awards</h3>
                </Column>
                <Column>
                    <div className="svg-div">
                        <div className="svg-inner">
                            <SVG className="svg" src={World} />
                            <p>22</p>
                        </div>
                    </div>
                    <h3>International Projects</h3>
                 </Column>
            </Grid7>
        </Container>
    </LowerDivStyle>
    <Footer />
    </Fragment>
);

  export default OurProfile;