import React, { Fragment } from 'react';
import { Icon } from 'react-icons-kit';
import {facebookF} from 'react-icons-kit/fa/facebookF';
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare';
import {twitter} from 'react-icons-kit/fa/twitter';
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay';
import {instagram} from 'react-icons-kit/fa/instagram';
import {withCircleRight} from 'react-icons-kit/entypo/withCircleRight';
import Logo from "../../assets/white-background.svg";
import SVG from "svg-inline-react";
import styled from 'styled-components';
import Container from './Container';
import { Grid4, Column, Grid6 } from './Grid';

const FooterStyle = styled.footer`
  margin-top: 0;
  padding: 20px;
  width: 100%;
  background-color: #000000;
  color: #8e7878;
  p{
    font-size: small;
    color: #E6E6E6;
  }
  img{
    width: 155px;
    height: 45px;
  }

  .icon{
    color: white;
    padding: 4px;
  }
`;

const UpperFooter = styled.div`
  background-color: #262626;
  color: #A5A5A5;
  p{
    margin: 0;
    font-family: serif;
    font-size: small;
  }
  a{
    color: #A5A5A5;
  }
  form{
    display: flex;
  }
  input{
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 0px solid transparent;
    padding: 9px;
    margin-top: 10px;
  }
  button{
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: white;
    background-color: black;
    border: 0px solid transparent;
    padding: 9px;
    margin-top: 10px;
  }
  .right{
    float: right;
  }
  .logo{
    color: white;
  }
`;

const Footer = () => (
  <Fragment>
    <UpperFooter>
      <Container>
        <Grid4>
          <Column>
            <h4>About Us</h4> 
            <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.</p>         
          </Column>
          <Column>
            <h4>Our Services</h4>          
            <p>Social Media Marketing</p>
            <p>Email Marketing</p>
            <p>SEO and SEM</p>
            <p>Digital Marketing</p>
            <p>Consultation and Advisory Services</p>
            <p>Content Creation and Strategy</p>
          </Column>
          <Column>
            <h4>Important Links</h4>  
            <p><a href="#">Terms Of Use</a></p>        
            <p><a href="#">Advertise</a></p>        
            <p><a href="#">Contact Us</a></p>        
            <p><a href="#">Privacy Statement</a></p>        
            <p><a href="#">FAQ</a></p> 
            <span className="logo">
              <SVG src={Logo} />
            </span>  
          </Column>
          <Column>
            <h4>Join Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <form action="">
              <input type="text" name="" id="" placeholder="Enter your Email"/>
              <button type="submit"><Icon icon={withCircleRight}/> </button>
            </form>          
          </Column>
        </Grid4>
      </Container>
    </UpperFooter>
    <FooterStyle>
      <Container>
        <Grid6>
          <Column>
            <p>Copyright &copy; Dig-It-All STUDIO. All Rights Reserved</p>      
          </Column>
          <Column>
            <div className="right">
              <Icon className="icon" icon={facebookF}/> 
              <Icon className="icon" icon={twitter}/> 
              <Icon className="icon" icon={youtubePlay}/> 
              <Icon className="icon" icon={instagram}/> 
              <Icon className="icon" icon={linkedinSquare}/> 
            </div>
          </Column>
        </Grid6>
      </Container>
    </FooterStyle>
  </Fragment>
);

export default Footer;
