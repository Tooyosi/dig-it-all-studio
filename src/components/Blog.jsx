import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Orange from "../../assets/orange.png";
import Hand from "../../assets/hands.jpg";
import Find from "../../assets/find.jpg";
import Profile from "../../assets/maxresdefault.jpg";
import Team from "../../assets/team.jpg";
import Shake from "../../assets/shake.jpg";
import Footer from "./Footer";
import Container from './Container';
import { NavbarStyle, NavBackground, Navbar } from './Navbar';
import { Grid2, Column, Grid7, Grid1 } from './Grid';


const ContactStyle = styled.div`
    background-color: white;
    margin-top: 0px;
    text-align: left;
    color: black;
    padding: 30px;
    p{
        font-family: serif;
        font-size: smaller;
    }
    label{
        padding: 10px;
        text-align: right;
    }
    .plaq{
        padding: 43px;
        height: 650px;
    }

    .plaq > a{
      text-decoration: underline;
      color: black;
      font-size: smaller
    }

    .plaq2{
        margin-top: 50px;
    }
    
`;

const BannerStyle = styled.div`
  margin-top: 70px;    
  text-align: center;
  h1{
    margin: 0;
    font-size: -webkit-xxx-large;
    font-weight: 500;
  }

  h3{
    margin: 0;
    font-weight: 800;
  }

  span{
    height: 26px;
    width: 29px;
    display: inline-block;
    margin: 4px;
    border-radius: 100%
  }

  .red{
      background-color: #EE4223;
  }
  .grey{
      background-color: #ABAAAA;
  }
  .green{
      background-color: #9CCD5F;
  }
`;

const UpperDivStyle = styled.div`
  background-color: #48EAAF;
  color: black;
  p, h2, a{
      margin: 7px;
  }

  p{
    font-size: smaller;
  }

  img{
      width: 40%;
      float: right;
  }
  
  @media(max-width: 650px){
    img{
        width: 70%;
        float: none;
    }
  }

  a{
    text-decoration: underline;
    color: black;
    font-size: smaller
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


const Blog = () => (    
    <Fragment>
    <Navbar/>
    <Container>
        <BannerStyle>
            <h1>DIG-IT-ALL</h1>
            <span className="red"></span>
            <span className="grey"></span>
            <span className="green"></span>
            <h3>BLOG</h3>
        </BannerStyle>
    </Container>
    <UpperDivStyle>
            <Container>
                <Column>
                </Column>
                <Column>
                    <img src={Orange} alt=""/>
                </Column>
            </Container>
            <Grid1>
                <Container>
                    <Column>
                        <p>19-01-2019 | By Adubi Timmy </p>
                        <h2>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed 
                        </h2>
                        <a href="">Read More >>></a>
                    </Column>
                </Container>
            </Grid1>
    </UpperDivStyle>
    <ContactStyle>
      <Container>
        <Grid2>
          <Column>
            <div className="plaq">
                <img src={Hand} alt=""/>
                <p>19-01-2019 | By Adubi Timmy </p>
                <h3>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed 
                </h3>
                <a href="">Read More >>></a>             
            </div>
        </Column>
        <Column>
          <div className="plaq plaq2">
              <img src={Find} alt=""/>
              <p>19-01-2019 | By Adubi Timmy </p>
              <h3>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed 
              </h3>
              <a href="">Read More >>></a>             
          </div>
        </Column>
        <Column>
          <div className="plaq">
              <img src={Find} alt=""/>
              <p>19-01-2019 | By Adubi Timmy </p>
              <h3>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed 
              </h3>
              <a href="">Read More >>></a>             
          </div>
        </Column>
        <Column>
          <div className="plaq plaq2">
              <img src={Find} alt=""/>
              <p>19-01-2019 | By Adubi Timmy </p>
              <h3>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed 
              </h3>
              <a href="">Read More >>></a>             
          </div>
        </Column>
        </Grid2>
      </Container>
    </ContactStyle>
    <Footer />
    </Fragment>
);

  export default Blog;