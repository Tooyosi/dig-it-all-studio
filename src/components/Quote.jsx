import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Quote from "../../assets/quote.png";
import Container from './Container';
import { Grid2, Column } from './Grid';

const QuoteDivStyle = styled.div`
    background-color: #27253D;
    padding: 40px;
    color: white;
    h2{
        font-size: 41px;
    }
    p{
        font-size: 15px;
        line-height: 23px;
        margin-top: 0;
        font-family: serif;
    }
    a{
        padding: 10px 30px;
        border: 2px solid transparent;
        border-radius: 22px;
        cursor: pointer;
        font-size: small;
        background-color: #F85A01;
        color: white;
    }
`;



const QuoteDiv = () => (
    <Fragment>
        <QuoteDivStyle>
            <Container>
                <Grid2>
                    <Column>
                        <h2>WE DRIVE THE ATTENTION TO YOU</h2>
                        <p>Social media has been utilized to create amazing marketing masterpieces.
                        Large corporations have successfully employed social media to increase their sales,
                        brand, and the community around their products. Small businesses have also
                        used social media to increase their sales as well.No matter your company size, 
                        social media can be used to join the conversation with your target audience and
                        promote your brand.</p>
                    </Column>
                    <Column>
                        <img src={Quote} alt=""/>
                    </Column>
                </Grid2>            
                <a href="">Request a Quote</a>
            </Container>
        </QuoteDivStyle>
    </Fragment>
)

export default QuoteDiv;
