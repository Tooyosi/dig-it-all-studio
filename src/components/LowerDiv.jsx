import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Woman from "../../assets/Blacknerdwoman.png";
import Container from './Container';
import { Grid, Grid2, Column } from './Grid';

const ServicesDiv = styled.div`
    h2{
        margin-top: 14vh;        
    }
    .pink-span{
        color: #FE907C;
    }

    .green-span{
        color: #79A73F;
    }
`; 

const LowerDivStyle = styled.div`
    margin-top: 20px;
    min-height: 300px;
    padding: 10px;
    background-color: white;
    transition: 0.3s linear;
    border-radius: 10px;
    p{
        color: rgba(31, 33, 33, 0.97);
        font-family: -webkit-pictograph;
        font-size: small;
        text-align: left;
    }
    h2{
        font-family: sans-serif;
        text-align: left;
        font-size: larger;
        font-weight: lighter;
    }
    h1#head{
        text-align: center;
        color: green;
    }
    :hover{
        box-shadow: 0px 1px 5px 3px #aea5a5;
    }
    .service-title{
        background-color: #FF765D;
        /* height: 100px; */
        color: #FFF7F6;
        position: relative;
        font-size: x-small;
        top: 0;
        padding: 15px 0;
        margin-top: -4px;
    }
    img{
        height: 200px;
        width: 100%;
    }
`;

const UpperDivStyle = styled.div`
    background-color: #bbbbba;
    color: white;
    h2, p, li{
        font-weight: 100;
        font-family: monospace;
    }
    li{
        margin-bottom: 20px;
    }
    img{
        width: 80%;
        height: 20%;
        border: 0px solid transparent;
        border-radius: 45%;    
    }
`;

const LowerDiv = () => (
    <Fragment>
        <UpperDivStyle>
            <Container>
                <Grid2>
                    <Column>
                        <img src={Woman} alt=""/>
                    </Column>
                    <Column>
                        <h2>We Help Businesses Grow Through Strategic Digital Marketing Campaigns</h2>
                        <p>DIG-IT-ALL provides Online Marketing services to help businesses improve their visibility
                            online and acuire more customers.
                        </p>
                        <ul>
                            <li>Connect with your target auddience each time they need your product or services</li>
                            <li>Leverage Social Media Marketing to Engage your propects and convert them to paying customers</li>
                        </ul>
                    </Column>
                </Grid2>
            </Container>
        </UpperDivStyle>
        <Container>
            <Grid>
                <Column>
                    <ServicesDiv>
                        <h2>What 
                            <span className="pink-span"> DIG</span>
                            <span className="pink-span">-</span>
                            <span className="green-span">IT</span>
                            <span className="pink-span">-</span>
                            <span className="pink-span">ALL </span>
                            Can Do For You
                        </h2>
                    </ServicesDiv>
                </Column>
                </Grid>
                <Grid>
                <Column>
                    <LowerDivStyle>
                        <h2>Social Media Marketing</h2>
                        <p>Social media has been utilized to create amazing marketing masterpieces.
                        Large corporations have successfully employed social media to increase their sales,
                        brand, and the community around their products. Small businesses have also
                        used social media to increase their sales as well.No matter your company size, 
                        social media can be used to join the conversation with your target audience and
                        promote your brand.</p>
                    </LowerDivStyle>
                </Column>
                <Column>
                    <LowerDivStyle>
                        <h2>Email Marketing</h2>
                        <p>In the process of running your business, winning new customers is as important
                        as nurturing the relationship with the clients you already have. Email marketing is 
                        imperative for building and sustaining relationships with prospects, leads, current customers, 
                        even past customers.</p>
                    </LowerDivStyle>
                </Column>
                <Column>
                    <LowerDivStyle>
                        <h2>SEO and SEM</h2>
                        <p>We help make the adjustment to your web pages, content and promote the
                        content to help improve your visibility in organic search engine results. 
                        We also help you bid for your advertisements to show along with search results 
                        for keywords that people are searching for. Hence, your business is seen by people 
                        the very moment they are searching for the products and services you offer</p>
                    </LowerDivStyle>
                </Column>
                <Column>
                    <LowerDivStyle>
                        <h2>Digital Marketing</h2>
                        <p>Getting your business online is not an afterthought in business, 
                        it is both foundational and catalytic to your business success. 
                        You must have heard it said that you either get online or get out. 
                        We believe that to be true.</p>
                    </LowerDivStyle>
                </Column>
                <Column>
                    <LowerDivStyle>
                        <h2>Consultation and Advisory Services</h2>
                        <p>Our dream is to be your trusted digital advisor and strategic partner. 
                        It is our pleasure to offer you professional advice and expert opinion that 
                        will meet your digital needs. This is the kind of relationship we look forward 
                        to having with you - our esteemed client.</p>
                    </LowerDivStyle>
                </Column>
                <Column>
                    <LowerDivStyle>
                        <h2>Content Creation and Strategy</h2>
                        <p>Being an essential component of an effective inbound strategy and 
                        the message your brand delivers, we help create and leverage personalized 
                        content that not only educates your audience but audience but also offers 
                        outstanding customer service and helps progress your prospects and ideal 
                        customers through every stage of the inbound methodology.</p>
                    </LowerDivStyle>
                </Column>
            </Grid>
            </Container>
    </Fragment>
)

export default LowerDiv;
