import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { Grid, Column } from './Grid';


const LowerDivStyle = styled.div`
    margin-top: 20px;
    height: 350px;
    padding: 10px 36px;
    background-color: #fbfffb;
    transition: 0.3s linear;
    box-shadow: 0px 0px 5px 3px #dfe6e8;
    p{
        color: rgba(135, 140, 142, 0.97);
        font-family: -webkit-pictograph;
        font-size: small;
        text-align: center;
    }
    h2{
        color: #5d8599;
        font-family: serif;
        text-align: center;
    }
    h1#head{
        text-align: center;
        color: green;
    }
    :hover{
        box-shadow: 0px 1px 5px 9px #dfe6e8;
    }
`;

const HeadingStyle = styled.div`
    text-align: center;
    margin-top: 30px;
    color: #3a5673;
`;


const LowerDiv = () => (
    <Fragment>
        <HeadingStyle id="head">
            <h1>Our Services</h1>            
        </HeadingStyle>
        <Grid>
            <Column>
                <LowerDivStyle>
                    <h2>Social Media Marketing</h2>
					<p>Social media has been utilized to create amazing marketing masterpieces. Large corporations have successfully employed 
					social media to increase their sales, brand, and the community around their products. Small businesses have also used social 
					media to increase their sales as well.No matter your company size, social media can be used to join the conversation with 
					your target audience and promote your brand.</p>
                </LowerDivStyle>
            </Column>
            <Column>
                <LowerDivStyle>
                    <h2>Email Marketing</h2>
					<p>In the process of running your business, winning new customers is as important as nurturing the relationship with the clients you already have.
                    Email marketing is imperative for building and sustaining relationships with prospects, leads, current customers, even past customers..</p>
                </LowerDivStyle>
            </Column>
            <Column>
                <LowerDivStyle>
                    <h2>SEO and SEM</h2>
					<p>We help make the adjustment to your web pages, content and promote the content to help improve your visibility in organic search engine results.
					We also help you bid for your advertisements to show along with search results for keywords that people are searching for. 
					Hence, your business is seen by people the very moment they are searching for the products and services you offer</p>
                </LowerDivStyle>
            </Column>
            <Column>
                <LowerDivStyle>
                    <h2>Digital Marketing</h2>
					<p>Getting your business online is not an afterthought in business, it is both foundational and catalytic to your business success.
							You must have heard it said that you either get online or get out. We believe that to be true.</p>
                </LowerDivStyle>
            </Column>
            <Column>
                <LowerDivStyle>
                <h2>Consultation and Advisory Services</h2>
				<p>Our dream is to be your trusted digital advisor and strategic partner. It is our pleasure to offer 
				you professional advice and expert opinion that will meet your digital needs.
				This is the kind of relationship we look forward to having with you - our esteemed client. </p>
                </LowerDivStyle>
            </Column>
            <Column>
                <LowerDivStyle>
                <h2>Content Creation and Strategy</h2>
                <p>Being an essential component of an effective inbound strategy and the message your brand delivers, 
                we help create and leverage personalized content that not only educates your audience but audience
                but also offers outstanding customer service and helps progress your prospects and ideal customers through 
                every stage of the inbound methodology.</p>

                </LowerDivStyle>
            </Column>
        </Grid>
    </Fragment>
)

export default LowerDiv;
