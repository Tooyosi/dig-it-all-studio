import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MarketingBg from '../../assets/marketing.jpg';
import Logo from "../../assets/Logo2.jpg";
import Burger from '../../assets/menu.png';
import Cancel from '../../assets/close.png';

export const NavbarStyle = styled.div`
    width: 99.9%;
    background-color: white;
    padding: 15px 0 40px 0;
    position: fixed;
    z-index: 10;
    top: 0%;
    height: 7vh;
    box-shadow: 1px 2px 3px #e5e9ea;
    @media(max-width: 700px){
        .menu-content {
            font-family: 'Oswald', sans-serif; 
            padding: 0 0 0 50px;
        }
        .collapsible-menu {
            background-color: transparent;
            padding: 0px 30px;
            border-bottom: 3px solid transparent;
        }
        .menu-content ul {
            list-style-type: none;
            padding: 0;
            left: -3vh;
        }
        .collapsible-menu a {
            display:block;
            padding: 10px;
            text-decoration: none;
        }
        .collapsible-menu label {
            font-family: 'Sedgwick Ave Display', cursive;
            min-height: 6.2vh;
            width: 5px;
            font-size: 56px;
            display: block;
            position: absolute;
            left: 10%;
            top: 1%;
            cursor: pointer;
            background-size: 35px 50px;
            margin-left: 70%;
            padding: 0px 0 10px 50px;
            border: 3px solid #f0f0f0;
            border-radius: 5px;
            box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        }
        .icon-bar{
            display: block;
            background-color: #888888;
            width: 29px;
            height: 2px;
            border-radius: 1px;
            margin: 8px 0 8px -38px;
        }
        .menu-content {
            max-height: 0;
            overflow: hidden;
            font-family: 'Oswald', sans-serif; 
            padding: 0 0 0 50px;
        }
        /* Toggle Effect */
        input:checked ~ .menu-content {
            max-height: 100%;
            background-color: #F4F4F4;
            width: 100vh;
            position: relative;
            left: -5%;
            margin-top: 39px;
        }
        input:checked ~ .collapsible-menu{
            position: relative;
            left: -5%;            
        }
        
    }
    @media(max-width: 320px){
        .collapsible-menu label {
            height: 7vh;
        }
        .icon-bar{
            display: block;
            background-color: #888888;
            width: 29px;
            height: 2px;
            border-radius: 1px;
            margin: 8px 0 8px -38px;
        }
    }
    
    @media(width: 600px){
        .collapsible-menu label {
            height: 5vh;
        }
    }

    @media(min-width: 568px){
        
    }

    @media(width: 640px){
        .collapsible-menu label {
            height: 13vh;
            margin-top: -13px;
            left: 14%;
        }
        input:checked ~ .menu-content {
            width: 249vh;
        }
    }

    .collapsible-menu{
        float: left;
        display: in-line;
    }

    .menu-content {
        font-family: 'Oswald', sans-serif; 
        padding: 0 0 0 50px;
    }

    .menu-content ul {
        list-style-type: none;
        color: black;
        margin-top: 1px;
        position: relative;
    }
    @media(min-width:855px){
        .menu-content ul{
            left: 152vh;
        }  
    }
    
    @media(width:768px){
        .menu-content ul{
            left: 40vh;
        }  
    }

    @media(width:1440px){
        .menu-content ul{
            left: 112vh;
        }  
    }

    @media(width:1024px){
        .menu-content ul{
            left: 46vh;
        }  
    }

    @media(width:1280px){
        .menu-content ul{
            left: 102vh;
        }  
    }

    @media(width:800px){
        .menu-content ul{
            left: 36vh;
        }  
    }
    .menu-content > ul >li {
        display: inline;
        margin: 0 10px;

    }
    .menu-content > ul >li>a{
        cursor: pointer;
        color: #0a0b0c; 
        opacity: 0.5;
    }

    .menu-content > ul >li>a:hover {
        opacity: 1;        
    }

    input#menu {
        display: none;
    }
    .nav-brand{
        height: 5vh;
        opacity: 1;
        width: 140px;
        position: absolute;
        left: 5%;   
    }
`;


export const NavBackground = styled.div`
    background: #6132E4 no-repeat center/100%;
    // background: url(${MarketingBg}) no-repeat center/100%;
    background-size: cover;
    height: 85vh;
    @media(max-width: 780px){
        background-size: cover;

    }
`;

export const NavBrand = styled.div`
    font-sixe: 30px;
    color: white;
    p{
        padding: 20px 0;
        display: inline;
    }
`;

export const Navbar = () => (
    <Fragment>
        <NavbarStyle className="nav-style">
            <span class="collapsible-menu">
                <img className="nav-brand" src={Logo} />
                <input type="checkbox" id="menu" />
                <label for="menu">
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                </label>
                <div class="menu-content">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Our Services</Link></li>
                        <li><Link to="/">Contact</Link></li>
                     </ul>
                 </div>
            </span>
        </NavbarStyle>
    </Fragment>
)