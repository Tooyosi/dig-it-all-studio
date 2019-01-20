import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Google from "../../assets/Googlemap-600x551.jpg";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Hands from "../../assets/hands.jpg";
import Computer from "../../assets/computer.jpeg";
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
        font-family: -webkit-pictograph;
    }
    label{
        padding: 10px;
        text-align: right;
    }
    img{
        width: 295px;
        height: 310px;
    }
    
`;

const MapStyle = {
    width: '50%',
    height: '40%'
  }

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
  background-color: #890CA1;
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
  background-color: #32DEE4;
  min-height: 20vh;
  padding: 30px;
  text-align: center;
  h1{
    text-align: -webkit-center;
  }
  
  img{
    width: 90%;
    height: 310px;
    margin: 20px;
  }

  p{
    position: relative;
    bottom: 15vh;
    font-size: 20px;
    color: white;
  }

  a{
    padding: 10px 30px;
    text-align: center;
    border: 2px solid transparent;
    border-radius: 22px;
    cursor: pointer;
    font-size: x-small;
    background-color: #077eb8;
    transition: 0.3s linear;
    color: white;
    background-color: #FF765D;
    margin-right: 70px;
   }

  @media(max-width: 600px){
      img{
          width: 100%;
      }
  }
  .map{
      width: inherit;
  }

`;


class ContactPage extends Component {
    constructor() {
      super();
      this.state = { 
          formName: '', 
          formEmail: '',
          formSubject: '',
          formMessage: '', 
          successMessage: ''
      };
      this.sendMail = this.sendMail.bind(this);
      this.inputName = this.inputName.bind(this);
      this.inputEmail = this.inputEmail.bind(this);
      this.inputSubject = this.inputSubject.bind(this);
      this.inputMessage = this.inputMessage.bind(this);
      this.buttonClick = this.buttonClick.bind(this);
      this.successOutput = this.successOutput.bind(this);
    }
    sendMail(event) {
        event.preventDefault()
      axios({
        method: 'post',
        url: `https://dig-it-all.herokuapp.com/api/email`,
        data: {
            name:   this.state.formName,
            email: this.state.formEmail,
            subject: this.state.formSubject,
            message: this.state.formMessage
        }
      }).then(response => {
        console.log(response);
        response.json().then((result)=>this.setState({ successMessage: result}))
      }).then(data => {if(data.status ===200) return alert("sent")} )
      .catch(error => {
        console.log(error);
      });
    }
    inputName(event) { 
      this.setState({
        formName: event.target.value,
      })
    }
    inputEmail(event) {
      this.setState({
        formEmail: event.target.value,
      })
    }
    inputSubject(event) {
      this.setState({
        formSubject: event.target.value,
      })
    }
    inputMessage(event) {
      this.setState({
        formMessage: event.target.value,
      })
    }
    successOutput(event) {
      if(this.state.formMessage === " "){
        this.setState({
        successMessage: " ",
        })
      } else{
        this.setState({
          successMessage: "Your Mail Has been sent successfully",
        })
      }
      new FormData();
    }
    buttonClick(event) {
      this.successOutput();
    }
    render() {
      return (
          
    <Fragment>
    <Navbar/>
    <UpperDivStyle>
        <Container>
            <Grid2>
                <Column>
                    <h2>CONTACT US</h2>
                </Column>
                <Column>
                    <h2 className="second-h2">GOOD NEWS! WE CAN HELP YOU GROW YOUR BUSINESS OR CAREER</h2>
                    <hr/>
                    <p>WE ARE ON A MISSION TO ACHIEVE REAL SUCCESS</p>
                </Column>
            </Grid2>
        </Container>
    </UpperDivStyle>
    <ContactStyle>
      <Container>
        <Grid2>
          <Column>
              <Formstyle onSubmit={this.sendMail}> 
                  <h3>How Can We Help You?</h3>
                  <p>Do you have a question or are you interested in working with us? Just fill out the form field below.</p>  
                  <input onChange={this.inputName} type="text" name="name" required placeholder="Name(required)" />
                  <input onChange={this.inputEmail} type="email" name="email" required placeholder="Your email" />
                  <input onChange={this.inputSubject} type="text" name="subject" required placeholder="Subject" />
                  <textarea onChange={this.inputMessage} name="message" id="" cols="30" rows="10" required placeholder="Message(required)"></textarea>
                  <input type="submit" value="Send" onClick={this.buttonClick} />
                  <p>{this.state.successMessage}</p>
              </Formstyle>
          </Column>
          <Column>
            <div className="map">
              {/* <img src={Google} alt=""/> */}
              <Map google={this.props.google} zoom={14} style={MapStyle}>
                  <Marker onClick={this.onMarkerClick}
                          name={'Current location'} />
                  <InfoWindow onClose={this.onInfoWindowClose}>
                      <div>
                        {/* <h1>{this.state.selectedPlace.name}</h1> */}
                      </div>
                  </InfoWindow>
              </Map>
            </div>
          </Column>
        </Grid2>
        <Grid2>
            <Column>
                <h3>Our Office</h3>
                <p>72B Lagos Way, Digitall Estate, Ikoyi, Lagos Nigeria.</p>
            </Column>
            <Column>
                <h3>Call Us On</h3>
                <p>+234-01-999-digitall</p>
            </Column>
        </Grid2>
      </Container>
    </ContactStyle>
    <LowerDivStyle>
        <Container>
            <h1>We've hand picked some case studies we think you'll like:</h1>
            <Grid2>
                <Column>
                    <img src={Computer} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit</p>
                </Column>
                <Column>
                    <img src={Hands} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit</p>
                </Column>
            </Grid2>
            <a href="">READ MORE</a>
        </Container>
    </LowerDivStyle>
    <Footer />
    </Fragment>
      );
    }
  } 

  export default GoogleApiWrapper({
    apiKey: (process.env.API_KEY)
  })(ContactPage)
//   export default ;