import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Office from "../../assets/dig-it-all.svg";
import SVG from "svg-inline-react";
import CarouselPage from './Carosel';
import Footer from "./Footer";
import Container from './Container';
import { NavbarStyle, NavBackground, Navbar } from './Navbar';
import { Grid2, Column, Grid, Grid5 } from './Grid';


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
    
  .form-head{
        position: relative;
        top: -119px;
        color: white;
        z-index: 5;
        text-align: left;
    }
    
  @media(max-width: 650px){
    .form-head{
      position: relative;
      top: 0;
      color: black;
      z-index: 5;
      text-align: left;
    }
  }
`;

const Formstyle = styled.form`
    width: 100%;
    background-color: #D6D6D6;
    padding: 60px;
    text-align: center;
    box-shadow: 0px 4px 8px 2px #DEDEDE; 
    position: relative;
    z-index: 5;   
    margin-top: -108px;
    select,  input{
      margin: 5px;
      border: 0px solid transparent;
      // border-bottom: 1px solid #FFFFFF;
      border-radius: 2px;
      padding: 6px;
      height: 5vh;
      background-color: white;
      width: 350px;
      color: #D6D6D6;
    }

    h3, p{
        text-align: left;
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
      background-color: white;
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
      textarea, input, select{
        width: 185px;
      }
    }

    @media(width:768px ){
      position: relative !important
      z-index: 5;
      textarea, input, select{
        width: 185px;
      }
    }

    @media(width:600px ){
      position: relative !important
      z-index: 5;
      textarea, input, select{
        width: 185px;
      }
    }
  @media(max-width:780px ){
    margin-top: 5px;
    position: inherit;
    textarea, input, select{
      width: 185px;
    }
  }
  
  @media(width:800px ){
    position: relative;
    textarea, input, select{
      width: 250px;
    }
  }
`;

const UpperDivStyle = styled.div`
  background-color: #3A348E;
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
        margin-top: -54px;
    }
  }
`;


const LowerDivStyle2 = styled.div`
    background-color: #54EEA9;
    text-align: center;
    @media(max-width: 700px){
      margin-top: 0px !important;
    }
`;


const Project = () => (    
    <Fragment>
    <Navbar/>
    <UpperDivStyle>
        <Container>
            <Grid2>
                <Column>
                    <h2>START A PROJECT</h2>
                </Column>
                <Column>
                    <h2 className="second-h2">Here's what you can expect.</h2>
                    <hr/>
                    <ul>
                        <li>An email/or phone call directly from a member of our team;</li>
                        <li>We will work together to clarify your requirements;</li>
                        <li>We will share a cost estimate;</li>
                        <li>A face to face meeting if necessary.</li>
                    </ul>
                </Column>
            </Grid2>
        </Container>
    </UpperDivStyle>
    <ContactStyle>
      <Container>
        <Grid2>
          <Column>
          <h3 className="form-head">FILL THE FORM TO GET STARTED</h3>
              <Formstyle> 
                  <h3>START A PROJECT</h3>

                  <input type="text" name="name" required placeholder="Fullname" />
                  <input type="email" name="email" required placeholder="Email Address" />
                  <input type="tel" name="phone" required placeholder="Phone Number" />
                  <input type="text" name="company" required placeholder="Company Name"/>
                  <input type="text" name="contact" required placeholder="How you'd like to be contacted? Phone/Email"/>
                  <input type="text" name="role" required placeholder="Role/Job title"/>
                  <p>How much are you willing to spend? (Minimum: #200,000) </p>
                  <input type="number" name="spend" required id=""/>
                  <p>When would you like to begin?</p>
                  <select name="begin" id="">
                    <option value="Immediately">Immediately</option>
                    <option value="Later">Later</option>
                  </select>
                  <textarea name="message" id="" cols="30" rows="10" required placeholder="Describe your project"></textarea>
                  <input type="submit" value="Send" />
                  {/* <p>{this.state.successMessage}</p> */}
              </Formstyle>            
          </Column>
          </Grid2>
          <Grid2>
          <Column>
            <h2>We're are to Help</h2>
            <p>Talk to us and learn how strategic website design and digital marketing can help you
                increase your sales and overall brand value.
            </p>
          </Column>
        </Grid2>
      </Container>
    </ContactStyle>
    <LowerDivStyle2>
        <Container>
            <Column>
              <h1>TESTIMONIALS</h1>
              <Grid5>
                <CarouselPage />
              </Grid5>
            </Column>
        </Container>
    </LowerDivStyle2>
    <Footer />
    </Fragment>
);

  export default Project;