import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Quote from "../../assets/quote.png";
import Container from './Container';
import { Grid2, Column } from './Grid';

const QuoteDivStyle = styled.div`
    background-color: #EED5D5;
    padding: 40px;
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
        background-color: #262626;
        color: white;
    }
`;

const CallDivStyle = styled.div`
    background-color: #6132E4;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 0;
    a{
        padding: 10px 30px;
        border: 2px solid transparent;
        border-radius: 22px;
        cursor: pointer;
        font-size: x-small;
        background-color: #077eb8;
        color: white;
    }

    .advice{
        background-color: #FF765D;
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
        <CallDivStyle>
            <h2>Call Now 01-999-digitall</h2>
            <p>or</p>
            <p><a href="/advice" className="advice">Get a free Advice</a></p>
        </CallDivStyle>
    </Fragment>
)

export default QuoteDiv;
