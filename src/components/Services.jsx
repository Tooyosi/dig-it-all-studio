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
        margin-top: -34px;
    }
  }
`;

const LowerDivStyle = styled.div`
  background-color: white;
  min-height: 20vh;
  padding: 30px;
  text-align: center;
  h2{
    margin-top: 70px;
    font-weight: 100;
    text-align: left;
}
  
  img{
    height: 250px;
    // margin: 20px;
  }

  p{
    text-align: left;
    font-size: smaller;
  }

  a{
    padding: 10px 30px;
    text-align: center;
    border: 2px solid transparent;
    border-radius: 22px;
    cursor: pointer;
    background-color: #3513ab;
    transition: 0.3s linear;
    margin-top: 70px;
    color: white;
}

  @media(max-width: 600px){
      img{
          width: 100%;
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


const Services = () => (    
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
            <SVG src={Office} alt=""/>
          </Column>
        </Grid2>
      </Container>
    </ContactStyle>
    <LowerDivStyle>
        <Container>
            <Grid>
                <Column>
                    <h2>SEO and SEM</h2>
                    <p>We help make the adjustment to your web pages, content and promote the
                    content to help improve your visibility in organic search engine results. 
                    We also help you bid for your advertisements to show along with search results 
                    for keywords that people are searching for. Hence, your business is seen by people 
                    the very moment they are searching for the products and services you offer</p>
                </Column>
                <Column>
                    <h2>Digital Marketing</h2>
                    <p>Getting your business online is not an afterthought in business, 
                    it is both foundational and catalytic to your business success. 
                    You must have heard it said that you either get online or get out. 
                    We believe that to be true.</p>
                </Column>
                <Column>
                    <h2>Consultation and Advisory Services</h2>
                    <p>Our dream is to be your trusted digital advisor and strategic partner. 
                    It is our pleasure to offer you professional advice and expert opinion that 
                    will meet your digital needs. This is the kind of relationship we look forward 
                    to having with you - our esteemed client.</p>
                </Column>
                <Column>
                    <h2>Social Media Marketing</h2>
                    <p>Social media has been utilized to create amazing marketing masterpieces.
                    Large corporations have successfully employed social media to increase their sales,
                    brand, and the community around their products. Small businesses have also
                    used social media to increase their sales as well.No matter your company size, 
                    social media can be used to join the conversation with your target audience and
                    promote your brand.</p>
                </Column>
                <Column>
                    <h2>Content Creation and Strategy</h2>
                    <p>Being an essential component of an effective inbound strategy and 
                    the message your brand delivers, we help create and leverage personalized 
                    content that not only educates your audience but audience but also offers 
                    outstanding customer service and helps progress your prospects and ideal 
                    customers through every stage of the inbound methodology.</p>
                </Column>
                <Column>
                    <h2>Email Marketing</h2>
                    <p>In the process of running your business, winning new customers is as important
                    as nurturing the relationship with the clients you already have. Email marketing is 
                    imperative for building and sustaining relationships with prospects, leads, current customers, 
                    even past customers.</p>
                </Column>
            </Grid>
            <a href="">Free Consultation</a>
        </Container>
    </LowerDivStyle>
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

  export default Services;