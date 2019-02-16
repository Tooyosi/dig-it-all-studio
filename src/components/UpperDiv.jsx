import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Grid1, Column } from './Grid';


const UpperDivStyle = styled.div`
    margin-top: 30vh;
    color: #ffffff;
    .head{
        font-family: monospace;
        font-size: 1.5em;
    }
    .body{
        margin-top: -7px;
        font-size: 3em;
        margin-bottom: 50px;
    }
    .footer{
        padding-top: 10px;
        font-family: sans-serif;
        font-size: 0.9em;
    }
    @media(max-width: 780px){
        margin-top:150px;
        .head{
            font-size: 1em
        } 
        .body{
            font-size: 1.3em;
        }
    }
    
    @media(width: 640px){
        margin-top:80px;
    }

    a{
        padding: 10px 30px;
        text-align: center;
        border: 2px solid transparent;
        border-radius: 22px;
        cursor: pointer;
        font-size: x-small;
        background-color: #077eb8;
        transition: 0.5s cubic-bezier(0.47, 0, 0.75, 0.72);
        color: white;
        margin-right: 70px;
    }

    .advice{
        background-color: transparent;
        border: 2px solid white;
    }
    .advice: hover{
        background-color: green;
    }
    
    .contact{
        background-color: #FF765D;
    }
    @media(max-width: 600px){
        a{
            margin-right: 20px;
        }
    }
    @media(max-width: 360px){
        a{
            padding: 5px 15px;
        }
    }
`;

const UpperDiv = () =>(
    <Fragment>
        <Container>
            <Grid1>
                <UpperDivStyle>
                   <h1 className="body">We Provide World Class Services To Grow Your Business</h1>
                   <p><a href="/advice" className="advice">Get Free Advice</a> <a href="/contact" className="contact">Contact Us</a></p>
                </UpperDivStyle>
            </Grid1>
        </Container>
    </Fragment>
)

export default UpperDiv;