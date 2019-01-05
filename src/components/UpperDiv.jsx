import React, { Fragment, Component } from 'react';
import styled from 'styled-components';


const UpperDivStyle = styled.div`
    margin-top: 30vh;
    color: #ffffff;
    .head{
        font-family: monospace;
        font-size: 1.5em;
    }
    .body{
        margin-top: -7px;
        font-size: 2em;
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
            font-size: 1.5em;
        }
    }
    
    @media(width: 640px){
        margin-top:80px;
    }

    a{
        padding: 15px;
        border: 2px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        background-color: #077eb8;
        opacity: 0.5;
        transition: 0.3s linear;
    }
    a:hover{
        opacity:1;
        width: 90px;
    }
`;

const UpperDiv = () =>(
    <Fragment>
        <UpperDivStyle>
           <p className="head">Digitall Media</p>
           <p className="body">We Provide World Class Services To Grow Your Business</p>
           <a>Click to Get started</a>
           <p className="footer">No better time to start than Now..</p>
        </UpperDivStyle>
    </Fragment>
)

export default UpperDiv;