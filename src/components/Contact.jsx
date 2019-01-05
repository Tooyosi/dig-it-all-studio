import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { Grid, Column } from './Grid';

const ContactStyle = styled.div`
    background-color: #242424;
    margin: 30px 2px;
    color: white;
    padding-top: 30px;
    text-align: center;
    
`;

const Contact = () => (
    <Fragment>
        <ContactStyle>
            <h3>Get In Touch</h3>
            <Grid>
                <Column>
                    <h5>Visit our office at</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Column>
                <Column>
                    <h5>Give Us a Call on</h5>
                    <p>01-999-digitall</p>
                </Column>
                <Column>
                    <h5>Send us a Mail</h5>
                    <form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id=""/>
                        </div>
                        <div>
                            <label htmlFor="subjext">Subject</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </Column>
            </Grid>
        </ContactStyle>
    </Fragment>
)

export default Contact;