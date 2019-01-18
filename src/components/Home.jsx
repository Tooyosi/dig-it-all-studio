import React, { Fragment } from 'react';
import Container from './Container';
import { NavbarStyle, NavBackground, NavBrand } from './Navbar';
import { GlobalStyle } from './GlobalStyle';
import { Grid, Column, Grid1 } from './Grid';
import Logo from "../../assets/Logo2.jpg";
import UpperDiv from "./UpperDiv";
import LowerDiv from "./LowerDiv";
import QuoteDiv from "./Quote";
import {Form} from "./Contact";
import Footer from "./Footer";


const Home = () => (
        <Fragment>
            <GlobalStyle/>
            <NavBackground>
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
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#head">Our Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                 </ul>
                             </div>
                        </span>
                </NavbarStyle>
                <UpperDiv />
            </NavBackground>
            <Container>
                < LowerDiv />
            </Container>
            <QuoteDiv />
            <Form />
            <Footer />
        </Fragment>
)

// class Home extends Component {
//     render(){
//         return(
//             <p>Hey There</p>
//         )
//     }
// }
export default Home;