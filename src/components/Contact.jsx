import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Column, Grid2 } from './Grid';

const ContactStyle = styled.div`
    background-color: #477b95;
    margin: 30px 2px;
    color: #f6fcfb;
    padding-top: 30px;
    box-shadow: 0px 5px 8px 5px #5e869a;
    h2, h4, p{
        text-align: center;
        font-family: -webkit-pictograph;
    }
    label{
        padding: 10px;
        text-align: right;
    }
    
`;

const Formstyle = styled.form`
    max-width: 250px;
	margin: 0 auto;
    input{
        margin: 5px;
        border: 1px solid #afc3af;
        border-radius: 8px;
        padding: 6px;
        width: 250px;
    }
    textarea{
        margin: 5px;
        border: 1px solid #afc3af;
        border-radius: 8px;
        padding: 6px;
        width: 250px;
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
      }).catch(error => {
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
        <h2 id="contact">Get In Touch</h2>
        <Grid2>
            <Column>
                <h4>Visit our office at</h4>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </Column>
            <Column>
                <h4>Give Us a Call on</h4>
                <p>01-999-digitall</p>
            </Column>
        </Grid2>
        <Column>
            <h4>Send us a Mail</h4>
            <Formstyle onSubmit={this.sendMail}>
                <input onChange={this.inputName} type="text" name="name" required placeholder="Your name" />
                <input onChange={this.inputEmail} type="email" name="email" required placeholder="Email" />
                <input onChange={this.inputSubject} type="text" name="subject" required placeholder="Subject" />
                <textarea onChange={this.inputMessage} name="message" id="" cols="30" rows="10" required placeholder="message"></textarea>
                <input type="submit" value="Send" onClick={this.buttonClick} />
                <p>{this.state.successMessage}</p>
            </Formstyle>
        </Column>
        </ContactStyle>
    </Fragment>
      );
    }
  } 


