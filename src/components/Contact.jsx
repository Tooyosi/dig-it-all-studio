import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Container from './Container';
import { Grid5, Column, Grid2 } from './Grid';
import CarouselPage from './Carosel';

const ContactStyle = styled.div`
    background-color: #EFEFEF;
    margin-top: 0px;
    text-align: center;
    color: black;
    padding-top: 30px;
    h1, h4, p{
        font-family: -webkit-pictograph;
    }
    label{
        padding: 10px;
        text-align: right;
    }
    
`;

const Formstyle = styled.form`
    max-width: 100%;
    background-color: white;
    padding: 40px 0 70px 0;
    box-shadow: 0px 4px 8px 2px #DEDEDE; 
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
  bottom: 45vh;
  box-shadow: 0px 4px 8px 2px #DEDEDE; 
  height: 40vh;
  width: 100%;
  padding: 20px 50px;

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
`;

const LastDivStyle = styled.div`
  background-color: #54EEA9;
  margin-top: -13em;

  @media(max-width: 700px){
    margin-top: 0px !important;
  }
`;

export class Form extends Component {
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
    <ContactStyle>
      <Container>
          <h2>LETS TAKE YOU TEN STEPS AHEAD</h2>
          <p>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <Grid2>
          <Column>
              <Formstyle onSubmit={this.sendMail}>   
                  <input onChange={this.inputName} type="text" name="name" required placeholder="Name(required)" />
                  <input onChange={this.inputEmail} type="email" name="email" required placeholder="Your email" />
                  <input onChange={this.inputSubject} type="text" name="subject" required placeholder="Subject" />
                  <textarea onChange={this.inputMessage} name="message" id="" cols="30" rows="10" required placeholder="Message(required)"></textarea>
                  <input type="submit" value="Send" onClick={this.buttonClick} />
                  <p>{this.state.successMessage}</p>
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
      <LastDivStyle>
        <Container>
            <Column>
              <h1>TESTIMONIALS</h1>
              <Grid5>
                <CarouselPage />
              </Grid5>
            </Column>
        </Container>
      </LastDivStyle>
    </ContactStyle>
    </Fragment>
      );
    }
  } 


