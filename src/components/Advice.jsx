import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from "./Footer";
import Container from './Container';
import { NavbarStyle, NavBackground, Navbar } from './Navbar';
import { Grid2, Column, Grid7, Grid5 } from './Grid';


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
    
`;

const Formstyle = styled.form`
    max-width: 100%;
    background-color: white;
    padding: 60px;
    box-shadow: -1px 1px 12px 6px #DEDEDE;; 
    position: relative;
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

const QuestionStyle = styled.div`
    background-color: white;
    position: relative;
    left: 95%;
    z-index: 2;
    bottom: 47vh;
    box-shadow: -1px 1px 3px 6px #DEDEDE;
    min-height: 40vh;
    width: 100%;
    padding: 57px 76px;
    text-align: left;

  p{
    line-height: 0.5px;
    font-family: serif;
    font-size: small;
  }
  .left{
    float: left;
    display: inline-block;
  }
  .left-2{
    display: inline-block;
  }
  .right{
    float: right;
    display: inline-block;
  }

  @media(max-width:500px ){
    position: inherit;
  }
  
  @media(max-width:360px ){
    padding: 20px !important;
    height: 57vh !important;
    
  .right{
    float: left;
    display: inline-block;
  }
  }

  @media(width: 568px){
    bottom: 91vh;
    p{
      line-height: 13px;
    }
  }
`;

const UpperDivStyle = styled.div`
  background-color: #FF765D;
//   min-height: 50vh;
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

const UpperDivStyle2 = styled.div`
    float: right;
    width: 50%;
    hr{
        background-color: #FD745E;
        padding: 1.5px;
        border: 2px solid transparent;
        border-radius: 10px;
    }
    @media(max-width: 700px){
        width: 100%;
        float: left;
    }
`;

const LowerDivStyle = styled.div`
  background-color: #6132E4;
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


const Advice = () => (    
    <Fragment>
    <Navbar/>
    <UpperDivStyle>
        <Container>
            <Grid2>
                <Column>
                    <h2>ABOUT US</h2>
                </Column>
            </Grid2>
        </Container>
    </UpperDivStyle>
    <UpperDivStyle2>
        <Container>
            <Grid2></Grid2>
            <Grid2>
                <Column>
                    <h2>Ask Us Anything</h2>
                    <hr/>
                    <p>Our mission is to deliver exceptional ROI to our clients. Through metric driven digital
                        marketing campaigns and beautiful responsive websites
                    </p>
                </Column>
            </Grid2>
        </Container>
    </UpperDivStyle2>
    <ContactStyle>
      <Container>
        <Grid2>
          <Column>
              <Formstyle>   
                  <input type="text" name="name" required placeholder="Name(required)" />
                  <input type="email" name="email" required placeholder="Your email" />
                  <input type="text" name="subject" required placeholder="Subject" />
                  <textarea  name="message" id="" cols="30" rows="10" required placeholder="Message(required)"></textarea>
                  <input type="submit" value="Send" />
              </Formstyle>
              <QuestionStyle>
                <h4>Questions?</h4>
                <p>We would love to hear from you</p>
                <div className="left">
                  <h5>Phone</h5>
                  <p>01-999-digitall</p>
                </div>
                <div className="right">
                  <h5>Email</h5>
                  <p>hello@digitall.com</p>
                </div>
                <div className="left-2">
                  <h5>Address</h5>
                  <p>Lorem ipsum dolor sit amet. NG</p>                      
                </div>
              </QuestionStyle>
          </Column>
        </Grid2>
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

  export default Advice;